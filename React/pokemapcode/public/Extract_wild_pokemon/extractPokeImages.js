const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const { fileURLToPath } = require('url');
const filePath = path.join(__dirname, './../Kanto_Route_View/overworldRegions.js'); // Path to the data file
//const { getCordfromLoc } = require('./../functions');

const saveDir = path.join(__dirname, 'public/assets/pokemon_images');

if (!fs.existsSync(saveDir)) {
    fs.mkdirSync(saveDir, { recursive: true });
}

// Scrape the image URL
async function getPokemonImageUrl(pokemonName) {
    const url = `https://www.pokewiki.de/${encodeURIComponent(pokemonName)}`;

    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const imageElement = $('img[src*="Hauptartwork_"]');
        if (imageElement.length === 0) {
            console.log(`No main artwork found for ${pokemonName}.`);
            return null;
        }

        const imageUrl = `https://www.pokewiki.de${imageElement.attr('src')}`;
        return imageUrl.replace(/\/thumb/, '').split('/').slice(0, -1).join('/');
    } catch (error) {
        console.error(`Error scraping ${pokemonName}:`, error.message);
        return null;
    }
}

// Function for downloading images
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
            response.data.on('end', () => resolve(`${pokemonName} saved.`));
            response.data.on('error', (err) => reject(err));
        });
    } catch (error) {
        console.error(`Error downloading ${pokemonName}:`, error.message);
    }
}

async function downloadAllImages() {
    const allPokemon = new Set();

    let pokemonData = require(filePath);
    console.log(pokemonData);
    pokemonData.features.forEach((feature) => {
        data = feature.properties.Pokémon;
        for (const [pokemonName, pokemonAttributes] of Object.entries(data)) {
            for (const attribute of pokemonAttributes) {
                allPokemon.add(attribute.name.split(" ")[0]);
            }
        }
    });

    console.log(`Starting download for ${allPokemon.size} Pokémon...`);

    const downloadPromises = Array.from(allPokemon).map(async (pokemonName) => {
        console.log(`Scraping ${pokemonName}...`);
        const imageUrl = await getPokemonImageUrl(pokemonName);

        if (imageUrl) {
            console.log(`Downloading: ${imageUrl}`);
            await downloadImage(pokemonName, imageUrl);
        }
    });

    await Promise.all(downloadPromises);
    console.log('Download completed.');
}

downloadAllImages();

// const databasePath = path.join(__dirname, '../Einall_Route_View/overworldRegions.js');

let pokemonData = require(filePath);

// Update database with image paths
async function updateDatabase() {
    for (const feature of pokemonData.features) {
        const locations = feature.properties.Pokémon;

        for (const [pokemonName, pokemonAttributes] of Object.entries(locations)) {
            for (const attribute of pokemonAttributes) {
                attribute.image = `/assets/pokemon_images/${encodeURIComponent(attribute.name.split(" ")[0])}.png`;
            }
        }
    }
    fs.writeFileSync(filePath, `module.exports = ${JSON.stringify(pokemonData, null, 2)};`);
    console.log('Database successfully updated!');
}

updateDatabase();