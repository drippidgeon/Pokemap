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
            </select>
            <button id="addMarkerBtn">Add Marker</button>
        </div>
    `;

    const popup = L.popup()
        .setLatLng([lat, lng])
        .setContent(popupContent)
        .openOn(map);

    setTimeout(() => {
        document.getElementById('addMarkerBtn').addEventListener('click', function() {
            const description = document.getElementById('markerDescription').value;
            const iconType = document.getElementById('markerIcon').value;
            if (description.trim() !== "") {
                addMarker(lat, lng, description, iconType);
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

// Function to save the new marker to overworldMarkers.js
function saveMarkerToFile(lat, lng, description, iconType) {
    let newMarker = `markerSet(${lat.toFixed(2)}, ${lng.toFixed(2)}, "${description}", ${iconType}, currentMap);\n`;

    fetch(savePath, { method: 'GET' })
        .then(response => response.text())
        .then(text => {
            let updatedContent = text + newMarker;
            saveToFile(updatedContent);
        })
        .catch(err => console.error("Error reading file:", err));
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
