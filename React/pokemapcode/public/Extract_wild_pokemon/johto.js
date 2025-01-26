const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const proxyUrl = 'https://api.allorigins.win/get?url=';
const targetUrl = 'https://www.pokewiki.de/Neuborkia';
let routeName = targetUrl.split('/').pop();
routeName = routeName.replace(/_/g, ' ');
const routeNumber = routeName.match(/\d+/) ? routeName.match(/\d+/)[0] : null;
console.log('Route Number:', routeNumber);
console.log('Route Name:', routeName);

const fetchPokemonData = async () => {
  try {

    const response = await axios.get(proxyUrl + encodeURIComponent(targetUrl));
    const html = response.data.contents;
    const $ = cheerio.load(html);

    const startSpan = $('span#Pokémon');
    let nextElement = startSpan.parent();

    const extractedData = [];
    let currentPokemon = null;
    let rowspanCount = 0;
    let lastLevel = '';

    while (nextElement.length > 0) {
      nextElement = nextElement.next();
      if (nextElement.is('table')) {
        const rows = nextElement.find('tr').slice(2);

        rows.each((_, row) => {
          const cells = $(row).find('td');

          // Weiterverarbeitung bei rowspanCount
          if (rowspanCount > 0) {
            // Pokémon mit einem Level
            if ($(cells[0]).attr('colspan')) {
              const level = lastLevel; // Use the stored last level here
              const basicFrequency = $(cells[0]).text().trim();
              const edition = $(cells[1]).text().trim();
              currentPokemon.frequencies.push({
                level: level, // Use the stored last level here
                basicFrequency: basicFrequency,
                edition: edition,
              });

              // Pokémon mit mehreren Leveln
            } else if ($(cells[1]).attr('colspan')) {
              const level = lastLevel;
              const basicFrequency = $(cells[1]).text().trim();
              const edition = $(cells[2]).text().trim();

              currentPokemon.frequencies.push({
                level: level,
                basicFrequency: basicFrequency,
                edition: edition,
              });

              // Update lastLevel
              lastLevel = level;

            } else {

              if($(cells[0]).attr('rowspan') >= 1) {
                const level = $(cells[0]).text().trim();
                const morningFrequency = $(cells[1]).text().trim();
                const dayFrequency = $(cells[2]).text().trim();
                const nightFrequency = $(cells[3]).text().trim();
                const edition = $(cells[4]).text().trim();

                currentPokemon.frequencies.push({
                  level: level,
                  morningFrequency: morningFrequency,
                  dayFrequency: dayFrequency,
                  nightFrequency: nightFrequency,
                  edition: edition,
                });

                // Update lastLevel
                lastLevel = level;
              }
            }
            rowspanCount--;

          } else if (cells[0] && $(cells[0]).attr('rowspan')) {
            rowspanCount = parseInt($(cells[0]).attr('rowspan'), 10) - 1;

            if ($(cells[4]).attr('colspan')) {
              currentPokemon = {
                name: $(cells[1]).text().trim(),
                place: $(cells[2]).text().trim(),
                level: $(cells[3]).text().trim(),
                frequencies: [
                  {
                    level: $(cells[3]).text().trim(),
                    basicFrequency: $(cells[4]).text().trim(),
                    edition: $(cells[5]).text().trim(),
                  },
                ],
              };

            } else {
              currentPokemon = {
                name: $(cells[1]).text().trim(),
                place: $(cells[2]).text().trim(),
                level: $(cells[3]).text().trim(),
                frequencies: [
                  {
                    level: $(cells[3]).text().trim(),
                    morningFrequency: $(cells[4]).text().trim(),
                    dayFrequency: $(cells[5]).text().trim(),
                    nightFrequency: $(cells[6]).text().trim(),
                    edition: $(cells[7]).text().trim(),
                  },
                ],
              };
            }

            extractedData.push(currentPokemon);
          }
        });

        const cleanData = extractedData.flatMap((pokemon) => {
          return pokemon.frequencies.map((freq) => {
            return {
              name: pokemon.name,
              place: pokemon.place,
              level: freq.level,
              basicFrequency: freq.basicFrequency,
              morningFrequency: freq.morningFrequency,
              dayFrequency: freq.dayFrequency,
              nightFrequency: freq.nightFrequency,
              edition: freq.edition,
            };
          });
        });

        console.log('Extracted Data:', cleanData);
        return cleanData;
      }
    }
    console.log('No table found after the specified span.');
  } catch (error) {
    console.error('Error fetching the page:', error);
  }
};

function changeDatatoJSONFormat(data) {
  const formattedData = {};

  data.forEach(pokemon => {
    if (!formattedData[pokemon.place]) {
      formattedData[pokemon.place] = [];
    }
    formattedData[pokemon.place].push({
      name: pokemon.name,
      area: pokemon.place,
      levels: pokemon.level,
      rate: pokemon.basicFrequency || [pokemon.morningFrequency, pokemon.dayFrequency, pokemon.nightFrequency],
      edition: pokemon.edition,
    });
  });

  return formattedData;
}

async function updateOverworldRegionsFile() {
  let data = await fetchPokemonData();
  if (data.length === 0) {
    console.log('No data found, exiting...');
    return;
  }

  data = changeDatatoJSONFormat(data);

  // Datei-Pfad für overworldRegions.js
  const filePath = path.join(__dirname, '../Johto_Route_View/overworldRegions1.js');

  // Originaldaten einlesen
  let overworldData = require(filePath);

  const routeRegex = routeNumber ? new RegExp(`\\bRoute ${routeNumber}\\b`) : null;

  // Daten in das richtige Routen-Objekt einfügen
  overworldData.features.forEach((feature) => {
    if ((routeRegex && routeRegex.test(feature.properties.name)) || feature.properties.name === routeName) {
      feature.properties.Pokémon = data;
    }
  });

  // Datei überschreiben mit neuen Daten
  try {
    fs.writeFileSync(filePath, `module.exports = ${JSON.stringify(overworldData, null, 2)};`);
    console.log('File updated successfully!');
  } catch (error) {
    console.error('Error writing file:', error);
  }
}

updateOverworldRegionsFile();
