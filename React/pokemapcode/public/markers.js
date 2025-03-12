var itemIcon = L.divIcon({
    className: 'itemIcon',
    iconSize: null,
    popupAnchor: [0, -10]
});
var hiddenIcon = L.divIcon({
    className: 'hiddenIcon',
    iconSize: null,
    popupAnchor: [0, -10]
});
var tmIcon = L.divIcon({
    className: 'tmIcon',
    iconSize: null,
    popupAnchor: [0, -10]
});
var berryIcon = L.divIcon({
    className: 'berryIcon',
    iconSize: null,
    popupAnchor: [0, -10]
});
var entranceIcon = L.divIcon({
    className: 'entrance',
    iconSize: null,
    popupAnchor: [0, -10]
});
var trainerIcon = L.divIcon({
    className: 'trainerIcon',
    iconSize: null,
    popupAnchor: [0, -10]
});

var currentMap = "Overworld";
var tileSize = .25;
function markerSet(lat, lng, description, iconImage, world, returnLoc) {
    let latf = lat * tileSize - (tileSize / 2);
    let lngf = lng * tileSize + (tileSize / 2);
    var marker = L.marker([latf, lngf], {
        icon: iconImage,
        title: description
    });
    marker.name = description;
    marker.iconImage = iconImage;
    if (returnLoc) {
        marker.returnLoc = returnLoc;
    }
    marker.bindPopup(description);
    switch (iconImage) {
        case hiddenIcon:
            if (null == maps[world].hiddenLayer) {
                maps[world].hiddenLayer = L.layerGroup();
            }
            maps[world].hiddenLayer.addLayer(marker);
            break;
        case itemIcon:
            if (null == maps[world].itemLayer) {
                maps[world].itemLayer = L.layerGroup();
            }
            maps[world].itemLayer.addLayer(marker);
            break;
        case berryIcon:
            if (null == maps[world].berryLayer) {
                maps[world].berryLayer = L.layerGroup();
            }
            maps[world].berryLayer.addLayer(marker);
            break;
        case tmIcon:
            if (null == maps[world].tmLayer) {
                maps[world].tmLayer = L.layerGroup();
            }
            maps[world].tmLayer.addLayer(marker);
            break;
        case entranceIcon:
            if (null == maps[world].entranceLayer) {
                maps[world].entranceLayer = L.layerGroup();
            }
            maps[world].entranceLayer.addLayer(marker);
            break;
        case trainerIcon:
            if (null == maps[world].trainerLayer) {
              maps[world].trainerLayer = L.layerGroup();
            }
            maps[world].trainerLayer.addLayer(marker);
           break;
        default:
            console.warn("Unknown item type specified: " + iconImage)
    }
    marker.on('click', onClickEvent);
}

function onClickEvent(e) {
    console.log("Clicked Entrance:", e.target.name);
    console.log("Expected Tileset:", e.target.name);
    console.log("Return Location:", e.target.returnLoc);
    console.log("Clicked Marker:", e.target.name);

    if (e.target.iconImage.options.className == "trainerIcon") {
        if (e.target.trainerData) {
            let trainer = e.target.trainerData;
            let popupContent = `<b>${trainer.name}</b><br>Pokémon: <ul>`;
            trainer.pokemon.forEach(poke => {
                popupContent += `<li>${poke.name} (Level ${poke.level})</li>`;
            });
            popupContent += "</ul>";
            e.target.bindPopup(popupContent).openPopup();
        } else {
            e.target.bindPopup("Trainer-Daten nicht verfügbar.").openPopup();
        }
    }

    if (e.target.iconImage.options.className == "entrance") {
        if (e.target.returnLoc) {
            console.log("Switching to Map:", e.target.name);
            loadMap(e.target.name, e.target.returnLoc);
        } else {
            console.log("Switching to Map without Return Location");
            loadMap(e.target.name);
        }
    }
}
