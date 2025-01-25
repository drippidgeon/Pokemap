import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { load } from 'cheerio';

const fetchPokemonData = async () => {
    try {
      const proxyUrl = 'https://api.allorigins.win/get?url=';
      const targetUrl = 'https://www.pokewiki.de/Route_29_(Johto)';
  
      const response = await axios.get(proxyUrl + encodeURIComponent(targetUrl));
      const html = response.data.contents;
      const $ = load(html);
  
      const startSpan = $('span#Pokémon');

      let nextElement = startSpan.parent();

      console.log('Next Element:', nextElement.html());
  
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
                lastLevel = level;
            }else{
                const level = lastLevel; // Use the stored last level here
                const morningFrequency = $(cells[0]).text().trim();
                const dayFrequency = $(cells[1]).text().trim();
                const nightFrequency = $(cells[2]).text().trim();
                const edition = $(cells[3]).text().trim();
  
                currentPokemon.frequencies.push({
                  level: level,
                  morningFrequency: morningFrequency,
                  dayFrequency: dayFrequency,
                  nightFrequency: nightFrequency,
                  edition: edition,
                });
                lastLevel = level;
            }
              }
              rowspanCount--;
  
              // Neues Pokémon
            } else if (cells[0] && $(cells[0]).attr('rowspan')) {
              rowspanCount = parseInt($(cells[0]).attr('rowspan'), 10) - 1;
  
              if ($(cells[4]).attr('colspan')) {
                const level = $(cells[3]).text().trim();
                currentPokemon = {
                  name: $(cells[1]).text().trim(),
                  place: $(cells[2]).text().trim(),
                  frequencies: [
                    {
                      level: level,
                      basicFrequency: $(cells[4]).text().trim(),
                      edition: $(cells[5]).text().trim(),
                    },
                  ],
                };
  
                // Update lastLevel
                lastLevel = level;
  
              } else {
                const level = $(cells[3]).text().trim();
                currentPokemon = {
                  name: $(cells[1]).text().trim(),
                  place: $(cells[2]).text().trim(),
                  frequencies: [
                    {
                      level: level,
                      morningFrequency: $(cells[4]).text().trim(),
                      dayFrequency: $(cells[5]).text().trim(),
                      nightFrequency: $(cells[6]).text().trim(),
                      edition: $(cells[7]).text().trim(),
                    },
                  ],
                };
  
                // Update lastLevel
                lastLevel = level;
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
      console.error('Error fetching the page:', error.message);
    }
  };
  


const App = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    fetchPokemonData().then((data) => {
      if (data) {
        setPokemonData(data);
      }
    });
  }, []);

  return (
    <div>
      <h1>Pokémon Data</h1>
      <div id="root">
        {pokemonData.length > 0 ? (
          pokemonData.map((pokemon, index) => (
            <div key={index}>
              <strong>{pokemon.name}</strong> - {pokemon.place}
              <ul>
                <li>Level: {pokemon.level}</li>
                {pokemon.basicFrequency && <li>Frequency: {pokemon.basicFrequency}</li>}
                {!pokemon.basicFrequency && pokemon.morningFrequency && (
                  <li>Morning Frequency: {pokemon.morningFrequency}</li>
                )}
                {!pokemon.basicFrequency && pokemon.dayFrequency && (
                  <li>Day Frequency: {pokemon.dayFrequency}</li>
                )}
                {!pokemon.basicFrequency && pokemon.nightFrequency && (
                  <li>Night Frequency: {pokemon.nightFrequency}</li>
                )}
                <li>Edition: {pokemon.edition}</li>
              </ul>
            </div>
          ))
        ) : (
          'Loading...'
        )}
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);