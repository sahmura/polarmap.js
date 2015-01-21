/*
 * L.PolarMap.layer3574 presets a tile layer with the EPSG:3574 settings.
*/

L.PolarMap.layer3574 = L.PolarMap.laeaTileLayer("http://{s}.tiles.arcticconnect.org/osm_3574/{z}/{x}/{y}.png", {
  name: "ac_3574",
  crs: "EPSG:3574",
  proj4def: "+proj=laea +lat_0=90 +lon_0=-40 +x_0=0 +y_0=0 +datum=WGS84 +units=m +no_defs"
});
