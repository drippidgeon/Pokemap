//var tileX = -128;
//var tileY = 256;
//var bounds = L.latLngBounds(L.latLng(tileX, 0), L.latLng(0, tileY));
//var maxBounds = L.latLngBounds(L.latLng(tileX - outOfBoundsInt, 0 - outOfBoundsInt), L.latLng(0 + outOfBoundsInt, tileY + outOfBoundsInt));
const outOfBoundsInt = 20;
var mapTime = 1;
var oldtarget;
var map = L.map('map', {
    preferCanvas: true,
    // minZoom: 2,
    // maxZoom: 7,
    // center: [-64, 128],
    // zoom: 2,
    // maxBounds: maxBounds,
    maxBoundsViscosity: 1.0,
    doubleClickZoom: false,
    crs: L.CRS.Simple,
    detectRetina: true,
    markerZoomAnimation: true,
    zoomControl: false
});

function getPolygonCenter(coords) {
    let sumX = 0, sumY = 0;
    coords.forEach(coord => {
        sumX += coord[0];
        sumY += coord[1];
    });

    const centerX = sumX / coords.length;
    const centerY = sumY / coords.length;

    return [centerX, centerY];
}


const urlParams = new URLSearchParams(window.location.search);
const place = urlParams.get('place');


if (place) {
    for (let i = 0; i < overworldRegions.features.length; i++) {
        if (overworldRegions.features[i].properties.name === place) {
            console.log('Match found:', overworldRegions.features[i].properties.name);
            let originalCoords = overworldRegions.features[i].geometry.coordinates[0];

            let center = getPolygonCenter(originalCoords);
            map.setView([center[1], center[0]], 5);
            setTimeout(() => {
                map.flyTo([center[1], center[0]], 5, {
                    duration: 2,
                    easeLinearity: 0.25
                });
            }, 1000);

        }else{
            console.log('No match found:', place);
        }
    }

}

new L.Control.Zoom({
    position: 'bottomright'
}).addTo(map);
var LocationArray = [];

// create bottom-left pokemon info box and add to map
var info = L.control({
    position: 'bottomleft'
});
info.onAdd = function(map) {
    this._div = L.DomUtil.create('div', 'info');
    this.update();
    return this._div;
};
info.update = function(props) {
    this._div.innerHTML = (props ?   '<div class="info-header">' +
        '<h4>' + props.name + '</h4>' +
        '<button class="time" style="background-color:peachpuff" onclick="setMorning()">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-alt-high-fill" viewBox="0 0 16 16">' +
        '<path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3m8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5m-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4"/>' +
        '</svg>' +
        '</button>' +
        '<button class="time" style="background-color:skyblue" onclick="setDay()">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">' +
        '<path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>' +
        '</svg>' +
        '</button>' +
        '<button class="time" style="background-color:#C3B1E1" onclick="setNight()">' +
        '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">' +
        '<path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>' +
        '</svg>' +
        '</button>' +
        '<button onclick="info.update()">close</button>' +
        '</div>' +
        outpkmn(props) :
        'Click on a location');
};
info.addTo(map);

// debug function to print coords to console
map.on('click', function (e) {
    var coord = e.latlng;
    console.log(e)
    var lat = (coord.lat / tileSize) + 1;
    var lng = coord.lng / tileSize;
    lat = Math.round(lat * 16) / 16;
    lng  = Math.round(lng * 16) / 16;
    console.log('Tile Location: ' + lat + ', ' + lng);
    console.log('Map Location: ' + Math.floor(lat * tileSize) + ', ' + Math.floor(lng * tileSize));
});

loadMap("Overworld");

function loadMap(mapName, returnLoc = undefined) {
    currentMap = mapName;
    // remove all existing layers from the map
    map.eachLayer(function (layer) {
        map.removeLayer(layer);
    });
    // clear the pokemon info box
    info.update();
    // set viewport options
    let selectedMap = maps[mapName];
    map.options.minZoom = selectedMap.minZoom;
    map.options.maxZoom = selectedMap.maxZoom;
    map.options.maxBounds = L.latLngBounds(L.latLng(selectedMap.bounds[0] - outOfBoundsInt, 0 - outOfBoundsInt), L.latLng(0 + outOfBoundsInt, selectedMap.bounds[1] + outOfBoundsInt));
    // move view before switching map
    if (returnLoc) {
        map.setView([returnLoc[0][0]/4, returnLoc[0][1]/4], returnLoc[1]);
    } else {
        map.setView([selectedMap.bounds[0]/2, selectedMap.bounds[1]/2], selectedMap.zoom);
    }
    // create tile and vector layers
    var tileLayer = L.tileLayer('tilesets/' + selectedMap.shortname + '/{z}/{y}/{x}.png', {
        tms: false,
        reuseTiles: true,
        attribution: 'Original by <a target="_blank" href="https://pkmnmap.com">Jaxson Keenes</a> | Gen 4 Update by <a target="_blank" href="https://github.com/ICEREG1992/pkmnmap4">William Sullivan</a><br>Maps from <a target="_blank" href="https://bulbapedia.bulbagarden.net/wiki/Category:Platinum_locations">Bulbapedia</a> | Item locations from <a target="_blank" href="https://youtube.com/playlist?list=PLDHidtsnukfIVS-VhbJRuxHVfKgmPduIE&si=agUfWjlSWxbYmLkX">Techno Trainer</a>',
        bounds: L.latLngBounds(L.latLng(selectedMap.bounds[0], 0), L.latLng(0, selectedMap.bounds[1])),
        tileSize: 256
    });
    var vectorLayer = L.geoJson(selectedMap.vector, {
        style: style,
        onEachFeature: onEachFeature
    });
    console.log(mapName);
    // add layers to map
    tileLayer.addTo(map);
    vectorLayer.addTo(map);
    selectedMap?.itemLayer?.addTo(map);
    selectedMap?.hiddenLayer?.addTo(map);
    selectedMap?.berryLayer?.addTo(map);
    selectedMap?.tmLayer?.addTo(map);
    selectedMap?.entranceLayer?.addTo(map);
}

function pkmnListOutput(str, arr, title, perc) {
    if (arr.length != 0) {
        str = str + '<div class="pkmn-list-row">' + title + '</div>';
        for (var i = 0; i < arr.length; i++) {
            str = str + '' + '<div class="pkmn-list-column">' + arr[i].name + '</div>' + '<div class="pkmn-list-column">' + arr[i].area + '</div>' + '<div class="pkmn-list-column">' + arr[i].levels + '</div>' + '<div class="pkmn-list-column">' + arr[i].rate + perc + '</div>';
        }
    }
    return str;
}



function outpkmn(props) {
    const pokemonData = props.Pokémon;
    var str = '<div id="pkmn-list">';
    str += '<div class="pkmn-list-column">Name</div><div class="pkmn-list-column">Method</div><div class="pkmn-list-column">Levels</div><div class="pkmn-list-column">Rate</div>';

    if (!pokemonData || Object.keys(pokemonData).length === 0) {
        return '<div class="pkmn-nodata">No Data Available</div>';
    }

    for (const [pokemonName, pokemonAttributes] of Object.entries(pokemonData)) {
        str += `<div class="pkmn-list-row">${pokemonName}</div>`;
        
        for (const attribute of pokemonAttributes) {
            var useMapTimeLevels = false;
            var useMapTimeRate = false;

            var levels = attribute.levels;
            var rate = attribute.rate;
            
            if (Array.isArray(levels)) {
                levels = levels[mapTime];
                useMapTimeLevels = true;
            }

            if (Array.isArray(rate)) {
                rate = rate[mapTime];
                useMapTimeRate = true;
            }

            cleanedName = attribute.name.split(" ")[0];

            str += `<div class="pkmn-list-column">
                <a href="https://www.pokewiki.de/${cleanedName}" target="_blank">${attribute.name}</a>
            </div>
                    <div class="pkmn-list-column">${attribute.area}</div>`
            var levelsdiv = document.createElement('div')
            levelsdiv.className = useMapTimeLevels ? `pkmn-list-column time${mapTime}` : "pkmn-list-column"
            levelsdiv.innerHTML = levels
            str += levelsdiv.outerHTML
            var ratediv = document.createElement('div')
            ratediv.className = useMapTimeRate ? `pkmn-list-column time${mapTime}` : "pkmn-list-column"
            ratediv.innerHTML = rate
            str += ratediv.outerHTML
        }
    }

    str += '</div>';
    return str;
}

function style(feature) {
    return {
        weight: 2,
        opacity: 0,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0
    };
}

function updateFeature(e) {
    // if something's already been clicked, set style so it looks unclicked
    if (null != oldtarget) {
        oldtarget.setStyle({opacity: 0});
    }
    // update infobox, set style
    var layer = e.target;
    info.update(layer.feature.properties);
    layer.setStyle({
        opacity: 1,
    });
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    // remember this for next time
    oldtarget = e.target;
}

function onEachFeature(feature, layer) {
    layer.on({
        click: updateFeature,
    });
}