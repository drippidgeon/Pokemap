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
                    duration: 2,        // Animation duration in seconds
                    easeLinearity: 0.25  // Smooth transition effect
                });
            }, 1000);  // Delay flyTo for a smoother experience after load

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
        '<button class="yeartime" style="background-color:lightgreen" onclick="setSpring()">' +
        '<svg fill="currentColor" height="22" width="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 420">' +
        '<path <path d="M417.3,233.8c-6.7-3-16.9-7.6-17.9-11.4c-1-3.8,5.7-12.8,10.1-18.7c6.9-9.2,12.8-17.1,10.4-25.2c-0.8-2.8-3.1-6.7-9-8.9 c-19.7-7.4-43.3-8.2-66.6-2.2c-8.4,2.2-16.6,5.2-24.1,9c2-8.8,3-18,3-27.3c0-24-6.7-46.8-18.8-63.9c-3.7-5.2-7.9-6.4-10.9-6.4 c-8.5-0.2-14.6,7.5-21.8,16.4c-4.6,5.8-11.6,14.5-15.5,14.5s-10.9-8.7-15.5-14.5c-7.2-8.9-13.3-16.6-21.8-16.4 c-3,0.1-7.3,1.3-10.9,6.4c-12.2,17.2-18.8,39.9-18.8,63.9c0,9.3,1,18.5,3,27.3c-7.6-3.8-15.7-6.8-24.1-9 c-23.3-6-46.9-5.3-66.6,2.2c-5.9,2.2-8.2,6.1-9,8.9c-2.4,8.1,3.5,16.1,10.4,25.2c4.4,5.9,11.1,14.9,10.1,18.7 c-1,3.8-11.2,8.4-17.9,11.4c-10.5,4.7-19.5,8.7-21.4,17c-0.7,2.9-0.6,7.3,3.5,12.2c13.6,16.1,33.9,28.3,57.1,34.3 c5.6,1.4,11.2,2.5,16.7,3.2c-4,4.4-7.7,9.2-11.2,14.3c-13.4,20-20.4,42.6-19.9,63.6c0.2,6.3,3.1,9.7,5.5,11.4 c6.9,4.9,16.3,1.9,27.3-1.5c7-2.2,17.7-5.6,21-3.4c3.3,2.2,4.2,13.3,4.9,20.7c1,11.4,1.8,21.3,9,25.8c1.6,1,3.8,1.9,6.7,1.9 c1.7,0,3.7-0.3,6-1.2c19.7-7.5,37.8-22.7,51.2-42.7c1.7-2.6,3.3-5.2,4.8-7.8c1.5,2.7,3.1,5.3,4.8,7.8c13.4,20,31.5,35.1,51.2,42.7 c2.2,0.9,4.2,1.2,6,1.2c2.9,0,5.1-0.9,6.7-1.9c7.2-4.5,8-14.3,9-25.8c0.6-7.4,1.6-18.5,4.9-20.7c3.3-2.2,13.9,1.2,21,3.4 c10.9,3.4,20.4,6.4,27.3,1.5c2.4-1.7,5.3-5.1,5.5-11.4c0.5-21-6.5-43.6-19.9-63.6c-3.4-5.1-7.2-9.9-11.2-14.4 c5.6-0.7,11.2-1.7,16.7-3.2c23.3-6.1,43.6-18.2,57.1-34.3c4.1-4.8,4.2-9.3,3.5-12.2C436.8,242.6,427.7,238.5,417.3,233.8z M219.6,94.3c2.5,1.9,6.5,7,9.1,10.2c7.6,9.4,16.1,20.1,27.2,20.1s19.7-10.7,27.2-20.1c2.6-3.2,6.7-8.3,9.1-10.2 c10.2,14.6,15.7,34,15.7,54.8c0,14.7-2.9,29-8.3,41.4c-2.2,5-4.8,9.7-7.8,13.9c-4.3,6.1-9.3,11.1-14.7,14.7c-4.4,3-9.1,5-13.8,6 v-17.8c11.1-3.3,19.3-13.6,19.3-25.7c0-14.8-12-26.8-26.8-26.8s-26.8,12-26.8,26.8c0,12.2,8.2,22.5,19.3,25.7V225 c-4.1-0.9-8.1-2.5-12-4.9c-2.8-6.4-6.7-12.6-11.6-18.5c-3.9-4.6-8.4-8.9-13.4-12.9c-5-12-7.6-25.6-7.6-39.7 C203.9,128.4,209.5,108.9,219.6,94.3z M272.3,255.4c0.6,2.4,1.4,4.7,2.4,6.9c0,0,0,0.1,0,0.1c1.1,2.5,2.3,4.9,3.8,7.2 c-4.6,1.4-8.9,3.5-12.8,6.2l-0.1,0.1c-0.4,0.3-0.9,0.6-1.3,0.9c-3,2.2-5.7,4.6-8.2,7.4c-2.5-2.8-5.2-5.2-8.2-7.4 c-0.4-0.3-0.9-0.6-1.3-0.9l-0.1-0.1c-4-2.7-8.3-4.7-12.8-6.2c1.5-2.3,2.7-4.7,3.8-7.3c1-2.3,1.8-4.6,2.4-7 c1.4-5.4,1.9-11.1,1.4-16.8c4.9,1.5,9.8,2.3,14.8,2.3c5,0,10-0.8,14.8-2.3C270.4,244.3,270.9,250,272.3,255.4z M256,193.3 C256,193.3,256,193.3,256,193.3C256,193.3,256,193.3,256,193.3c-6.6,0-11.9-5.3-11.9-11.8c0-6.5,5.3-11.8,11.8-11.8 s11.8,5.3,11.8,11.8C267.8,188,262.5,193.3,256,193.3z M88.7,253.8c2.4-1.9,8.4-4.6,12.2-6.3c11-4.9,23.5-10.5,26.3-21.3 c2.8-10.8-5.4-21.7-12.6-31.4c-2.5-3.3-6.4-8.5-7.6-11.4c16.7-6.2,36.9-6.7,57-1.5c13.7,3.6,26.4,9.6,36.8,17.5 c4.8,3.7,9.1,7.7,12.7,11.9c4.5,5.3,7.8,10.8,10,16.6c2.9,7.6,3.6,15.2,2,22.4l-24.7-6.8c-0.2-11.6-7.9-22.2-19.7-25.5 c-2.3-0.6-4.7-1-7.1-1c-12,0-22.6,8.1-25.8,19.7c-3.9,14.3,4.5,29,18.7,33c2.3,0.6,4.7,1,7.1,1c9.4,0,18-5,22.8-12.7l22.3,6.2 c-0.7,1-1.6,2-2.4,3c-8.4,0-17.1,1.7-26,5c-8.6,3.3-16.9,8.1-24.8,14.2c-9.3,0.1-18.8-1.1-28.2-3.5 C117.7,277.6,100.3,267.3,88.7,253.8z M185.4,247C185.4,247.1,185.4,247.1,185.4,247C185.4,247.1,185.4,247.1,185.4,247 c-1.4,5.1-6.1,8.7-11.4,8.7c-1.1,0-2.1-0.1-3.2-0.4c-6.3-1.7-10-8.3-8.2-14.5c1.4-5.1,6.1-8.7,11.4-8.7c1.1,0,2.1,0.1,3.2,0.4 C183.5,234.3,187.2,240.8,185.4,247z M195.2,417.9c-1-2.9-1.6-9.4-1.9-13.5c-1-12-2.2-25.7-11.5-31.8c-9.3-6.2-22.3-2.1-33.8,1.6 c-3.9,1.2-10.2,3.2-13.3,3.4c-0.3-17.8,5.8-37,17.4-54.3c6.1-9.1,13.3-17,21.3-23.6c7.2-5.9,14.9-10.4,22.8-13.4 c8.1-3.1,15.9-4.4,23.2-4c4.6,0.3,8.9,1.3,12.8,3l-18.3,23.8c-3.1-1.2-6.4-1.9-9.7-1.9c-8.4,0-16.1,3.8-21.3,10.5 c-9,11.7-6.8,28.6,4.9,37.6c4.7,3.6,10.4,5.6,16.3,5.6c0,0,0,0,0,0c8.4,0,16.1-3.8,21.3-10.5c4.4-5.7,6.3-12.7,5.3-19.8 c-0.6-4.5-2.3-8.8-4.9-12.4l18.7-24.3c1,1.1,2,2.3,2.9,3.5c-3.9,8.3-6.1,18.1-6.4,28.5c-0.3,12.4,2.1,25.7,6.9,38.6 c-2.5,5.7-5.6,11.3-9.2,16.7C227.2,398.3,211.7,411.4,195.2,417.9z M211.3,324.5C211.3,324.5,211.3,324.5,211.3,324.5 C211.3,324.5,211.3,324.5,211.3,324.5c2.5,1.9,4.1,4.7,4.5,7.9c0.4,3.1-0.4,6.2-2.4,8.7c-2.3,2.9-5.7,4.6-9.4,4.6 c-2.6,0-5.1-0.8-7.2-2.5c-5.2-4-6.1-11.4-2.2-16.6c2.3-2.9,5.7-4.6,9.4-4.6C206.8,322.1,209.2,322.9,211.3,324.5z M377.3,377.4 c-3.1-0.2-9.3-2.2-13.3-3.4c-11.5-3.6-24.5-7.7-33.8-1.5c-9.3,6.2-10.4,19.8-11.5,31.8c-0.4,4.1-0.9,10.6-1.9,13.5 c-16.6-6.5-32-19.5-43.5-36.8c-4.2-6.2-7.6-12.8-10.4-19.4c-4.9-11.9-7.3-24.1-7-35.4c0.3-9.7,2.5-18.5,6.6-25.5 c1.4-2.5,3.1-4.8,5-6.9l18.7,24.3c-2.6,3.6-4.3,7.8-4.9,12.4c-0.9,7.1,1,14.1,5.3,19.8c5.1,6.6,12.9,10.5,21.3,10.5 c6,0,11.6-1.9,16.3-5.6c11.7-9,13.9-25.9,4.9-37.6c-5.1-6.6-12.9-10.5-21.3-10.5c-3.4,0-6.7,0.6-9.7,1.9l-18.3-23.8 c3.1-1.3,6.3-2.2,9.8-2.7c6.1,5.2,13.4,9.5,21.8,12.7c9,3.4,18.7,5.4,29.1,6c7.3,6.2,13.9,13.6,19.5,22 C371.5,340.4,377.6,359.7,377.3,377.4z M300.7,324.5C300.7,324.5,300.7,324.5,300.7,324.5c2.1-1.6,4.6-2.5,7.2-2.5 c3.7,0,7.1,1.7,9.4,4.6c4,5.2,3,12.6-2.2,16.6c-2.1,1.6-4.6,2.5-7.2,2.5c-3.7,0-7.1-1.7-9.4-4.6c-1.9-2.5-2.8-5.6-2.4-8.7 C296.6,329.3,298.2,326.5,300.7,324.5C300.7,324.5,300.7,324.5,300.7,324.5z M374.2,282.8c-10.3,2.7-20.5,3.8-30.6,3.5 c-9.7-0.3-18.7-2.1-26.9-5.2c-7.7-2.9-14.2-6.9-19.3-11.8l-0.6-0.6c-1.4-1.5-2.8-3-3.9-4.6l22.3-6.2c4.8,7.7,13.4,12.7,22.8,12.7 c0,0,0,0,0,0c2.4,0,4.8-0.3,7.1-1c14.3-3.9,22.6-18.7,18.7-33c-3.2-11.6-13.8-19.7-25.8-19.7c-2.4,0-4.8,0.3-7.1,1 c-11.7,3.2-19.5,13.9-19.7,25.5l-24.7,6.8c-1.4-6.6-1-13.4,1.3-20.3c6.1-4.4,11.6-10.2,16.5-17c3.2-4.5,6-9.4,8.4-14.6 c10.1-7.4,22.3-13.1,35.4-16.5c20.1-5.2,40.3-4.7,57,1.5c-1.2,2.9-5.1,8.1-7.6,11.4c-7.2,9.7-15.4,20.6-12.6,31.4 c2.8,10.8,15.3,16.4,26.3,21.3c3.8,1.7,9.7,4.4,12.2,6.3C411.7,267.3,394.3,277.6,374.2,282.8z M334.8,232.5 c1-0.3,2.1-0.4,3.2-0.4c5.3,0,10,3.6,11.4,8.7c1.7,6.3-2,12.8-8.2,14.5c-1,0.3-2.1,0.4-3.2,0.4h0c-5.3,0-10-3.6-11.4-8.7 c0,0,0,0,0,0c0,0,0,0,0,0C324.8,240.8,328.5,234.3,334.8,232.5z"></path>' +
        '</svg>' +
        '</button>' +
        '<button class="yeartime" style="background-color:#f6d7b0" onclick="setSummer()">' +
        '<svg fill="currentColor" height="22" width="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 18">' +
        '<path d="M2.866 10.052H1.277a.554.554 0 0 1 0-1.109h1.589a.554.554 0 0 1 0 1.109zm1.65-3.984a.552.552 0 0 1-.392-.162L3.001 4.782a.554.554 0 0 1 .784-.784l1.123 1.124a.554.554 0 0 1-.392.946zm-1.123 9.09A.554.554 0 0 1 3 14.214l1.123-1.124a.554.554 0 0 1 .784.784l-1.123 1.123a.552.552 0 0 1-.392.163zm9.568-5.66a4.453 4.453 0 1 1-4.454-4.454 4.453 4.453 0 0 1 4.454 4.453zM8.5 4.417a.554.554 0 0 1-.554-.555V2.275a.554.554 0 1 1 1.108 0v1.588a.554.554 0 0 1-.554.555zm0 12.856a.554.554 0 0 1-.554-.554v-1.588a.554.554 0 0 1 1.108 0v1.588a.554.554 0 0 1-.554.554zm3.984-11.206a.554.554 0 0 1-.392-.946l1.123-1.123a.554.554 0 0 1 .784.783l-1.123 1.123a.551.551 0 0 1-.392.163zm1.123 9.09a.553.553 0 0 1-.392-.162l-1.123-1.123a.554.554 0 0 1 .784-.784l1.123 1.124a.554.554 0 0 1-.392.946zm2.116-5.106h-1.589a.554.554 0 0 1 0-1.109h1.589a.554.554 0 0 1 0 1.109z"></path>' +
        '</svg>' +
        '</button>' +
        '<button class="yeartime" style="background-color:#f05133" onclick="setAutumn()">' +
        '<svg fill="currentColor" height="22" width="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">' +
        '<path d="M15.362,9.69c0,0-0.75,1.108-1.068,0c-0.318-1.109-1.346-4.949-1.762-5.226 c-0.417-0.278-0.417-0.278-0.417-0.278s-0.078,1.506-0.594,1.307c-0.515-0.198-4.313-2.217-4.63-2.652L6.574,2.444 c0,0,0.355,3.328-0.515,2.615c0,0,1.113,2.771-2.573,3.048c0,0,1.186,3.087,4.552,4.75c0,0,1.148,1.783-0.949,1.503 c0,0-2.932-0.395-3.325-0.752c0,0-1.548,3.01-3.764,3.128c0,0,2.656,1.504,2.337,4.156c0,0,5.107,0.041,4.911,0.832 c-0.2,0.795-0.555,1.601-0.555,1.601s4.71-0.929,5.422-2.194c0,0,0.989,0.99,1.071,1.939c0,0,2.693-0.594,2.452-2.296 c0,0,1.269,0.948,1.427,2.551l0.554-0.375c0,0-0.319-1.661-1.464-2.967c0,0-0.517-1.308,0.789-0.633c0,0,3.085,1.029,5.7-0.833 c0,0-2.888-0.948-3.006-1.978c0,0,5.394-3.326,5.625-5.542c0,0-1.944,0.198-2.972-0.633c0,0-1.309-0.396,0.394-4.791 c0,0-1.227,0.724-1.62-3.636c0,0-3.051,4.665-4.518,3.082C16.548,5.018,15.165,8.066,15.362,9.69z"></path>' +
        '</svg>' +
        '</button>' +
        '<button class="yeartime" style="background-color:lightskyblue" onclick="setWinter()">' +
        '<svg fill="currentColor" height="22" width="22" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 300">' +
        '<path d="M289.5,140.5h-24.606l11.031-11.03c2.93-2.929,2.93-7.678,0.001-10.606c-2.929-2.929-7.678-2.93-10.606-0.001 L243.681,140.5h-36.369l16.182-17.392c2.821-3.032,2.65-7.777-0.383-10.6c-1.243-1.156-2.775-1.802-4.345-1.961 c-0.952-0.047-21.495-0.003-21.495-0.003L221.315,86.5H251.5c4.143,0,7.5-3.357,7.5-7.5s-3.357-7.5-7.5-7.5h-15.186l17.69-17.69 c2.929-2.93,2.929-7.678,0-10.608c-2.93-2.928-7.844-2.928-10.774,0L225.167,61.1V45.5c0-4.143-3.357-7.5-7.5-7.5 c-4.143,0-7.5,3.357-7.5,7.5v30.601l-24.837,25.004l-0.415-22.645c-0.001-0.036,0.035-0.07,0.034-0.106 c-0.035-1.824-0.704-3.641-2.07-5.059c-2.873-2.982-7.778-3.07-10.761-0.194l-15.951,15.226V53.107l21.47-21.304 c2.929-2.93,3.012-7.678,0.083-10.607c-2.93-2.928-7.803-2.928-10.732,0l-10.821,10.696V7.5c0-4.143-3.357-7.5-7.5-7.5 c-4.143,0-7.5,3.357-7.5,7.5v24.393l-10.53-10.696c-2.93-2.928-7.594-2.928-10.524,0c-2.929,2.93-3.054,7.678-0.125,10.607 l21.179,21.304v35.421l-16.176-15.475c-3.009-2.847-7.67-2.718-10.52,0.289c-1.075,1.136-1.683,2.52-1.914,3.955 c-0.142,0.583-0.203,1.188-0.201,1.811l-0.088,21.229l-25.1-24.944V45.5c0-4.143-3.357-7.5-7.5-7.5s-7.5,3.357-7.5,7.5v14.894 L55.142,43.202c-2.93-2.928-7.594-2.928-10.524,0c-2.929,2.93-2.887,7.678,0.042,10.608L62.392,71.5H46.5 c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h30.892l24.744,24.744l-23.057,0.831c-4.021,0.146-7.524,3.435-7.563,7.418 c-0.004,0.112-0.349,0.225-0.349,0.337c0,0.003,0,0.007,0,0.011c0,0.008,0.345,0.017,0.345,0.024 c0.045,1.875,0.955,3.736,2.395,5.158L89.748,140.5H55.025l-21.638-21.638c-2.93-2.928-7.678-2.928-10.607,0 c-2.929,2.93-2.929,7.678,0,10.607l11.03,11.03H8.5c-4.143,0-7.5,3.357-7.5,7.5s3.357,7.5,7.5,7.5h25.02L22.78,166.239 c-2.929,2.93-2.929,7.678,0,10.607c1.465,1.464,3.385,2.196,5.304,2.196c1.919,0,3.839-0.732,5.304-2.196L54.734,155.5h35.027 l-15.253,16.394c-2.821,3.032-2.65,7.777,0.383,10.6c1.444,1.344,3.277,2.009,5.106,2.009c0.034,0,0.068-0.005,0.103-0.005 c0.022,0,0.044,0.003,0.065,0.003c0.018,0,0.037,0,0.055,0l22.005-0.125L77.101,209.5H46.5c-4.143,0-7.5,3.357-7.5,7.5 s3.357,7.5,7.5,7.5h15.601l-17.399,17.399c-2.929,2.93-2.929,7.678,0,10.607c1.465,1.464,3.385,2.196,5.304,2.196 c1.919,0,3.672-0.732,5.137-2.196l17.025-17.191V250.5c0,4.143,3.357,7.5,7.5,7.5s7.5-3.357,7.5-7.5v-30.185l25.445-25.278 l0.977,24.39c0.148,4.046,3.517,7.306,7.532,7.225c1.364-0.027,2.844-0.465,4.312-1.543c1.063-0.781,15.734-15.812,15.734-15.812 v35.385l-20.971,21.137c-2.93,2.929-2.846,7.678,0.082,10.607c1.465,1.465,3.425,2.197,5.345,2.197 c1.919,0,3.693-0.732,5.157-2.196l10.387-10.532V290.5c0,4.143,3.357,7.5,7.5,7.5c4.143,0,7.5-3.357,7.5-7.5v-25.31l11.404,11.237 c1.465,1.464,3.468,2.196,5.387,2.196c1.919,0,3.881-0.732,5.345-2.196c2.929-2.93,2.783-7.678-0.146-10.607l-21.99-21.845v-35.7 c0,0,13.729,12.896,15.896,14.976c2.167,2.08,3.942,3.25,6.525,3.25c0.015,0,0.03,0,0.046,0c4.142,0,7.48-3.604,7.455-7.746 l-0.306-23.696l24.384,24.551V250.5c0,4.143,3.357,7.5,7.5,7.5c4.143,0,7.5-3.357,7.5-7.5v-15.891l18.064,17.897 c1.465,1.464,3.467,2.196,5.387,2.196c1.919,0,3.88-0.732,5.345-2.196c2.929-2.93,2.95-7.678,0.021-10.607L236.605,224.5H251.5 c4.143,0,7.5-3.357,7.5-7.5s-3.357-7.5-7.5-7.5h-29.894l-25.742-25.742l23.059-0.831c0.082-0.003,0.162-0.016,0.243-0.021 c0.03-0.002,0.06-0.005,0.09-0.008c3.977-0.319,7.037-3.709,6.892-7.736c-0.087-2.424-1.32-4.531-3.155-5.837L209.138,155.5h34.835 l21.345,21.346c1.465,1.465,3.384,2.197,5.304,2.197c1.919,0,3.839-0.732,5.303-2.196c2.93-2.929,2.93-7.678,0.001-10.606 l-10.74-10.74H289.5c4.143,0,7.5-3.357,7.5-7.5S293.643,140.5,289.5,140.5z M200.795,125.483L186.823,140.5h-19.507l15.002-15.002 L200.795,125.483z M170.21,95.784l0.356,20.002l-14.399,14.315V109.16L170.21,95.784z M127.263,95.865l13.904,13.323v20.205 l-13.925-14.008L127.263,95.865z M96.862,126.444l19.762-0.712l14.768,14.768h-20.299L96.862,126.444z M97.246,169.477 L110.25,155.5h20.851l-13.841,13.841L97.246,169.477z M127.863,201.599l-0.854-21.042l14.158-14.241v21.604L127.863,201.599z M170.819,201.264l-14.652-13.478v-22.179l14.442,14.359L170.819,201.264z M200.991,168.564l-19.614,0.706l-13.77-13.77h20.292 L200.991,168.564z"></path>' +
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
    console.log(
    'Map Location: ' + Math.floor(lat * tileSize) + ', ' + Math.floor(lng * tileSize)
    );
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
    selectedMap = maps[mapName];
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
            
            str += `<div class="pkmn-list-column">${attribute.name}</div>
                    <div class="pkmn-list-column">${attribute.area}</div>`
            var levelsdiv = document.createElement('div')
            levelsdiv.className = useMapTimeLevels ? `pkmn-list-column yeartime${mapTime}` : "pkmn-list-column"
            levelsdiv.innerHTML = levels
            str += levelsdiv.outerHTML
            var ratediv = document.createElement('div')
            ratediv.className = useMapTimeRate ? `pkmn-list-column yeartime${mapTime}` : "pkmn-list-column"
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