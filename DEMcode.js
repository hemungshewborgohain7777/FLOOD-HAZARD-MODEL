// ---------- Parameters ----------
var driveFolder = 'EarthEngineExports';   // change to your Drive folder
var outFileName = 'Sikkim_SRTM_30m';     // output filename (without extension)
var exportScale = 30;                    // meters per pixel (SRTM native ~30)
var exportCRS = 'EPSG:4326';             // change if you want a projected CRS (e.g. 'EPSG:32646')

// ---------- 1. Get Sikkim geometry from FAO GAUL (admin1) ----------
var gaul = ee.FeatureCollection('FAO/GAUL/2015/level1');
var sikkim = gaul
  .filter(ee.Filter.eq('ADM0_NAME', 'India'))
  .filter(ee.Filter.eq('ADM1_NAME', 'Sikkim'))
  .first();

if (sikkim === null) {
  print('Sikkim polygon not found in FAO/GAUL level1. Check dataset or modify filter.');
} else {
  var sikkimGeom = sikkim.geometry();
  Map.centerObject(sikkimGeom, 8);
  Map.addLayer(sikkimGeom, {color: 'red'}, 'Sikkim boundary');
}

// ---------- 2. Load SRTM DEM ----------
var srtm = ee.Image('USGS/SRTMGL1_003'); // SRTM 1 arc-second global (~30 m)
var dem = srtm.clip(sikkimGeom);

Map.addLayer(dem, {min: 0, max: 4000}, 'SRTM DEM');

// Optional: create a hillshade for quick visual check
var hillshade = ee.Terrain.hillshade(dem);
Map.addLayer(hillshade, {}, 'Hillshade', false);

// ---------- 3. Export to Google Drive (GeoTIFF) ----------
Export.image.toDrive({
  image: dem,
  description: outFileName + '_toDrive',
  folder: driveFolder,
  fileNamePrefix: outFileName,
  region: sikkimGeom,
  scale: exportScale,
  crs: exportCRS,
  maxPixels: 1e13,
  fileFormat: 'GeoTIFF'
});

// ---------- 4. (Optional) Export to your Earth Engine assets ----------
// Uncomment and run separately if you want to save to your EE assets.
/*
Export.image.toAsset({
  image: dem.toFloat(),
  description: outFileName + '_toAsset',
  assetId: 'users/YOUR_USERNAME/' + outFileName,
  region: sikkimGeom,
  scale: exportScale,
  crs: exportCRS,
  maxPixels: 1e13
});
*/

print('Script ready — check the Tasks tab to start the Drive export.');
