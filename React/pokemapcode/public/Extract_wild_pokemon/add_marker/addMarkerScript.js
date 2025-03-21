let savePath = "../Kanto_Route_View/overworldMarkers.js"

// Function to create the popup form
function openMarkerPopup(lat, lng) {
    const popupContent = `
        <div>
            <label>Description:</label>
            <input type="text" id="markerDescription" placeholder="Enter description" />
            <label>Icon:</label>
            <select id="markerIcon">
                <option value="hiddenIcon">Hidden</option>
                <option value="tmIcon">TM</option>
                <option value="itemIcon">Item</option>
                <option value="berryIcon">Berry</option>
                <option value="entranceIcon">Entrance</option>
                <option value="trainerIcon">Trainer</option> <!-- NEU -->
            </select>
            <div id="trainerFields" style="display: none;"> <!-- NEU -->
                <label>Trainer Name:</label>
                <input type="text" id="trainerName" placeholder="Trainer Name" />
                <label>Pokémon:</label>
                <textarea id="trainerPokemon" placeholder='Format: [{"name": "Pikachu", "level": 25}]'></textarea>
            </div>
            <button id="addMarkerBtn">Add Marker</button>
        </div>
    `;

    const popup = L.popup()
        .setLatLng([lat, lng])
        .setContent(popupContent)
        .openOn(map);

    setTimeout(() => {
        document.getElementById('markerIcon').addEventListener('change', function() {
            if (this.value === "trainerIcon") {
                document.getElementById('trainerFields').style.display = "block";
            } else {
                document.getElementById('trainerFields').style.display = "none";
            }
        });

        document.getElementById('addMarkerBtn').addEventListener('click', function() {
            const description = document.getElementById('markerDescription').value;
            const iconType = document.getElementById('markerIcon').value;
            const trainerName = document.getElementById('trainerName')?.value || "";
            const trainerPokemon = document.getElementById('trainerPokemon')?.value || "[]";

            if (description.trim() !== "") {
                if (iconType === "trainerIcon") {
                    try {
                        const pokemonList = JSON.parse(trainerPokemon);
                        addTrainerMarker(lat, lng, trainerName, pokemonList);
                    } catch (error) {
                        alert("Fehler: Pokémon-Daten sind nicht im korrekten JSON-Format!");
                    }
                } else {
                    addMarker(lat, lng, description, iconType);
                }
            } else {
                alert("Please enter a description!");
            }
        });
    }, 100);
}

// Function to add a marker dynamically
function addMarker(lat, lng, description, iconType) {
    L.marker([lat, lng], { icon: window[iconType] }).addTo(map)
        .bindPopup(description);
    var newLat = (lat / 0.25) + 1;
    var newLng = lng / 0.25;
    newLat = Math.round(newLat * 16) / 16;
    newLng  = Math.round(newLng * 16) / 16;

    saveMarkerToFile(newLat, newLng, description, iconType);
}

function addTrainerMarker(lat, lng, trainerName, pokemonList, iconType = "trainerIcon") {
    let popupContent = `<b>${trainerName}</b><br>Pokémon: <ul>`;
    pokemonList.forEach(poke => {
        popupContent += `<li>${poke.name} (Level ${poke.level})</li>`;
    });
    popupContent += "</ul>";

    let marker = L.marker([lat, lng], { icon: window[iconType] }).addTo(map)
        .bindPopup(popupContent);

        if (!maps[currentMap]) {
            maps[currentMap] = {};
        }
        if (!maps[currentMap].trainerLayer) {
            maps[currentMap].trainerLayer = L.layerGroup().addTo(map);
        }
        maps[currentMap].trainerLayer.addLayer(marker);

    saveTrainerToFile(lat, lng, trainerName, pokemonList, iconType);
}



// Function to save the new marker to overworldMarkers.js
function saveMarkerToFile(lat, lng, description, iconType) {
    let newMarker = `markerSet(${lat.toFixed(2)}, ${lng.toFixed(2)}, "${description}", ${iconType}, currentMap);\n`;

    fetch("http://localhost:8000/saveMarker.php", {
        method: 'POST',
        headers: {
            "Content-Type": "text/plain",
        },
        body: newMarker,
    })
    .then(response => response.text())
    .then(data => {
        console.log("Marker gespeichert:", data);
    })
    .catch(error => console.error("Fehler beim Speichern:", error));
}

// Function to handle writing the marker data
function saveToFile(content) {
    fetch("http://localhost:8000/saveMarker.php", {
        method: 'POST',
        headers: {
            "Content-Type": "text/plain", // WICHTIG: Kein "application/json"
        },
        body: content,
    })
        .then(response => response.text())
        .then(data => console.log("Marker saved:", data))
        .catch(error => console.error("Error saving file:", error));
}

function saveTrainerToFile(lat, lng, trainerName, pokemonList, iconType) {
    let newTrainer = {
        lat: parseFloat(lat).toFixed(2),
        lng: parseFloat(lng).toFixed(2),
        name: trainerName,
        pokemon: pokemonList,
        iconType: iconType
    };


    fetch("http://localhost:8000/saveTrainer.php", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTrainer),
    })
    .then(response => response.text()) // Erst als Text lesen
    .then(text => {
        return text ? JSON.parse(text) : { error: "Leere Antwort vom Server" };
    })
    .then(data => {
        if (data.success) {
            loadTrainers();
        }
    })
}



