// ---------------------------
// Export Sikkim Boundary + DEM
// ---------------------------

// 🔹 Parameters
var driveFolder = 'EarthEngineExports';   // Change to your Google Drive folder name
var exportCRS = 'EPSG:4326';              // WGS84
var scaleDEM = 30;                        // meters per pixel
var fileDEM = 'Sikkim_SRTM_DEM';
var fileBoundary = 'Sikkim_Boundary';

// ---------- 1. Get Sikkim boundary from GAUL dataset ----------
var gaul = ee.FeatureCollection('FAO/GAUL/2015/level1');
var sikkim = gaul
  .filter(ee.Filter.eq('ADM0_NAME', 'India'))
  .filter(ee.Filter.eq('ADM1_NAME', 'Sikkim'))
  .first();

var sikkimGeom = sikkim.geometry();
Map.centerObject(sikkimGeom, 8);
Map.addLayer(sikkimGeom, {color: 'red'}, 'Sikkim Boundary');

// ---------- 2. Load SRTM DEM ----------
var srtm = ee.Image('USGS/SRTMGL1_003');
var dem = srtm.clip(sikkimGeom);
Map.addLayer(dem, {min: 0, max: 4000, palette: ['blue','green','brown','white']}, 'SRTM DEM');

// ---------- 3. Export SRTM DEM to Drive ----------
Export.image.toDrive({
  image: dem,
  description: fileDEM + '_Export',
  folder: driveFolder,
  fileNamePrefix: fileDEM,
  region: sikkimGeom,
  scale: scaleDEM,
  crs: exportCRS,
  maxPixels: 1e13,
  fileFormat: 'GeoTIFF'
});

// ---------- 4. Export Sikkim boundary as SHP ----------
Export.table.toDrive({
  collection: ee.FeatureCollection([sikkim]),
  description: fileBoundary + '_Export',
  folder: driveFolder,
  fileNamePrefix: fileBoundary,
  fileFormat: 'SHP'
});

print('✅ Exports ready — check the Tasks tab and click RUN for each.');
