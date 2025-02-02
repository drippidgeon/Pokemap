const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const { fileURLToPath } = require('url');
const filePath =   path.join( __dirname,'./../Einall_Route_View/overworldRegions.js');
//const { getCordfromLoc } = require('./../functions');



const saveDir = path.join(__dirname, 'public/assets/pokemon_images');

// Stelle sicher, dass der Ordner existiert
if (!fs.existsSync(saveDir)) {
    fs.mkdirSync(saveDir, { recursive: true });
}

// Funktion zum Scrapen der Bild-URL
async function getPokemonImageUrl(pokemonName) {
    const url = `https://www.pokewiki.de/${encodeURIComponent(pokemonName)}`;

    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        // Finde das Hauptartwork (500px-Hauptartwork_xxx.png)
        const imageElement = $('img[src*="Hauptartwork_"]');
        if (imageElement.length === 0) {
            console.log(`Kein Hauptartwork für ${pokemonName} gefunden.`);
            return null;
        }

        const imageUrl = `https://www.pokewiki.de${imageElement.attr('src')}`;
        return imageUrl.replace(/\/thumb/, '').split('/').slice(0, -1).join('/');
    } catch (error) {
        console.error(`Fehler beim Scrapen von ${pokemonName}:`, error.message);
        return null;
    }
}

// Funktion zum Herunterladen eines Bildes
async function downloadImage(pokemonName, imageUrl) {
    if (!imageUrl) return;

    const savePath = path.join(saveDir, `${pokemonName}.png`);

    try {
        const response = await axios({
            url: imageUrl,
            responseType: 'stream',
        });

        response.data.pipe(fs.createWriteStream(savePath));

        return new Promise((resolve, reject) => {
            response.data.on('end', () => resolve(`${pokemonName} gespeichert.`));
            response.data.on('error', (err) => reject(err));
        });
    } catch (error) {
        console.error(`Fehler beim Herunterladen von ${pokemonName}:`, error.message);
    }
}

// Hauptfunktion zum Durchlaufen aller Pokémon
async function downloadAllImages() {
    const allPokemon = new Set();



    // Pokémon-Namen sammeln
    let pokemonData = require(filePath);
console.log(pokemonData);
    pokemonData.features.forEach((feature) => {
          data =  feature.properties.Pokémon;
        for (const [pokemonName, pokemonAttributes] of Object.entries(data)) {
            for (const attribute of pokemonAttributes) {
                allPokemon.add(attribute.name.split(" ")[0]);
            }

        }
    });

    console.log(`Starte Download für ${allPokemon.size} Pokémon...`);

    // Parallel heruntergeladen werden
    const downloadPromises = Array.from(allPokemon).map(async (pokemonName) => {
        console.log(`Scrape ${pokemonName}...`);
        const imageUrl = await getPokemonImageUrl(pokemonName);

        if (imageUrl) {
            console.log(`Lade herunter: ${imageUrl}`);
            await downloadImage(pokemonName, imageUrl);
        }
    });

    await Promise.all(downloadPromises); // Warte, bis alle Downloads abgeschlossen sind
    console.log('Download abgeschlossen.');
}

downloadAllImages();

// Angenommener Dateipfad zu deiner Pokémon-Datenbank
const databasePath = path.join(__dirname, '../Einall_Route_View/overworldRegions.js');

// Beispielhafte Datei, die die Pokémon-Daten enthält
let pokemonData = require(filePath); // Dies enthält die Pokémon-Daten

async function updateDatabase() {
    // Durch alle Regionen in den Pokémon-Daten iterieren
    for (const feature of pokemonData.features) {
        const locations = feature.properties.Pokémon;

        // Durch alle Pokémon-Einträge in jeder Region iterieren
        for (const [pokemonName, pokemonAttributes] of Object.entries(locations)) {
            for (const attribute of pokemonAttributes) {
                // Jedes Pokémon erhält ein neues `image`-Feld
                attribute.image = `/assets/pokemon_images/${encodeURIComponent(attribute.name.split(" ")[0])}.png`;
            }
        }
    }

    // Die aktualisierten Daten zurück in die Datei schreiben
    fs.writeFileSync(databasePath, `module.exports = ${JSON.stringify(pokemonData, null, 2)};`);
    console.log('Datenbank erfolgreich aktualisiert!');
}

// Aufruf der Funktion
updateDatabase();
