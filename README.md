Flood Hazard Model – Sikkim (2023)

1.	Project Overview / Problem Statement

Sikkim is a mountainous Himalayan state that experiences frequent flooding and flash flood events due to intense rainfall, steep slopes, river incision, and glacial melt. The devastating 2023 flood events highlighted the urgent need for spatial flood-risk assessment to identify potential inundation zones and support disaster preparedness.
This project develops a terrain-based flood hazard model using elevation data to simulate flood inundation under different flood levels (25% and 50%) and visualize vulnerable low-lying regions.
________________________________________
2.	Objective

The main objectives of this project are:
•	To analyze the topographic influence on flood susceptibility in Sikkim
•	To simulate different flood levels (25% and 50%) using elevation thresholds
•	To identify potential flood-prone areas using 2D and 3D visualization
•	To demonstrate practical application of GIS-based flood modeling techniques
________________________________________
3.	Study Area

Sikkim, India
•	Latitude: ~27°N – 28°N
•	Longitude: ~88°E – 89°E
•	Characterized by:
o	Steep Himalayan terrain
o	Deep river valleys (Teesta River system)
o	Elevation ranging from ~224 m to over 8,200 m
________________________________________
4.	Data Sources

•	Digital Elevation Model (DEM)
o	Source: SRTM / ASTER DEM
o	Resolution: 30 m
o	Provider: USGS EarthExplorer or Google Earth Engine with provided jscode.
o	https://earthexplorer.usgs.gov/ & code.earthengine.google.com

•	Administrative Boundary (Sikkim)
o	India Shapefile clipping.
o	www.igismap.com
________________________________________
5.	Tools & Methods

Software & Tools
•	ArcGIS 10.8 & ArcScene
•	Google Earth Engine
•	3D Analyst tools
•	Raster calculator
•	Hillshade & DEM visualization

Methodology
The flood hazard model was developed using a terrain-based GIS approach combining 2D and 3D visualization techniques to simulate flood inundation scenarios.

•	Data Preparation
The study area boundary (AOI) of Sikkim was collected and prepared for analysis. Digital Elevation Model (DEM) data were acquired from authoritative sources such as Bhuvan. A copy of the AOI was retained for simulating water rise during flood scenarios.

•	DEM Processing
The DEM was clipped to the AOI to extract elevation data specific to Sikkim. The processed DEM was then classified into five elevation zones to represent terrain variation and exported for 3D visualization.

•	3D Visualization Setup
Both the DEM and AOI layers were imported into ArcScene. Base heights were assigned using the DEM surface, and extrusion settings were enabled to create a realistic 3D terrain model. A water surface layer was configured to simulate rising flood levels.

•	Flood Scenario Simulation
Flood scenarios were defined based on percentage rise of total elevation, specifically:
25% Flood Level
50% Flood Level
The Animation toolbar in ArcScene was used to create time-based keyframes, allowing visualization of progressive water rise over the terrain.

Generated:
• 2D View:
Displays the elevation-based topographic structure of Sikkim, serving as the base reference for terrain analysis.
• 3D View:
Visualizes flood inundation under 25% and 50% flood scenarios, highlighting terrain-controlled flood spread.

________________________________________
6.	 Key Outputs (Map Images)

•	 2D Elevation-based Flood Hazard Map
•	 3D Terrain Visualization
•	 25% Flood Level Inundation Map
•	 50% Flood Level Inundation Map
#These outputs help visually interpret how increasing flood levels expand inundated areas across valleys and river basins.
________________________________________
7.	 Results & Interpretation

•	Flood-prone zones are concentrated in low-elevation valleys and river corridors
•	25% flood level affects major river basins and tributary networks
•	50% flood level shows significant expansion into adjacent low-lying areas
•	Higher elevation regions remain largely unaffected due to steep relief
•	Terrain plays a dominant role in controlling flood extent in mountainous regions like Sikkim

### **Flood Recording .mov shows the animation of flooding in the Sikkim region**

________________________________________
8.	 What I Learned

•	Practical application of DEM-based flood modelling
•	Importance of terrain analysis in flood hazard assessment
•	Creating 2D and 3D GIS visualizations for hazard communication
•	Translating raw elevation data into meaningful disaster risk insights
•	Structuring GIS projects for professional and academic portfolios
________________________________________
9.	 Future Improvements

•	Integrate rainfall intensity and discharge data
•	Use hydrodynamic flood models (HEC-RAS 2D)
•	Include land use / land cover (LULC) influence
•	Validate results using historical flood extent data
•	Perform risk assessment by overlaying settlements and infrastructure

