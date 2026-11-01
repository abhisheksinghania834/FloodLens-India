# FloodLens India — Resilience Atlas

Interactive geospatial prototype for exploring historical flood exposure and geographic context in India. Built for AWS Builder Center Weekend Challenge: Map it.

> **Prototype data notice:** Initial map markers and index values are illustrative UI data only. They are NOT official risk scores, observed statistics, live flood conditions or safe evacuation guidance. Replace these records with validated source data before analytical interpretation.

## Challenge requirements mapping

- **Dataset:** Planned integration of India Flood Atlas (1901–2020), JAXA ALOS AW3D30 elevation, and properly attributed OpenStreetMap data.
- **Map:** Searchable Leaflet map, selectable district markers, river context, hospital markers, layer toggles and location profiles.
- **AWS location/data service:** Amazon Location Service is the planned AWS map provider. Configure and integrate a real Amazon Location map before claiming AWS mapping is live. Current prototype uses OpenStreetMap tiles.
- **AWS service:** Target deployment is private S3 origin + CloudFront; Amazon Location Service for AWS mapping.
- **Live demo:** Pending deployment in project owner's AWS account.
- **Public source:** This repository.

## Stack

React, TypeScript, Vite, React Leaflet, Leaflet and Lucide icons.

## Run locally

Requires Node.js 20+ and npm.

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Data sources

1. **India Flood Atlas**, Water and Climate Lab, IIT Gandhinagar. Historical modelled flood-area and risk data for 1901–2020 at about 10 km resolution. Dataset: https://github.com/wcl-iitgn/india-flood-atlas-data. Research: Vegad, U., Pokhrel, Y., and Mishra, V. (2024), *Flood risk assessment for Indian sub-continental river basins*, Hydrology and Earth System Sciences, 28, 1107–1126, https://doi.org/10.5194/hess-28-1107-2024. Verify exact file-level licence and cite the paper.
2. **JAXA ALOS World 3D 30m:** https://www.eorc.jaxa.jp/ALOS/en/dataset/aw3d30/. Follow JAXA terms and attribution.
3. **OpenStreetMap:** https://www.openstreetmap.org/copyright. ODbL attribution applies; derived database sharing may trigger ODbL obligations.

## AWS deployment target

1. Select AWS region `ap-south-1` (Mumbai).
2. Create an Amazon Location map resource with a supported style/provider.
3. Create a narrowly scoped API key for the map resource. Restrict allowed origins to the deployed site once the URL is known. Never commit keys.
4. Create a private S3 bucket and CloudFront distribution using Origin Access Control.
5. Run `npm run build`; upload `dist/` to S3.
6. Integrate and verify the real Amazon Location map on the deployed site. The current prototype is Leaflet/OSM; do not claim the AWS Location map requirement fulfilled until the map visibly uses that AWS resource.
7. Set AWS Budgets and billing alerts, and review regional service pricing before enabling resources.

Optional Lambda/API Gateway only if later data processing requires a backend.

## Data pipeline before scientific/impact claims

- Download original Flood Atlas JSON files; preserve source, time period, units and spatial unit.
- Join records to authoritative district/sub-basin boundaries by documented stable IDs.
- Convert verified geometries to GeoJSON, retain provenance, and simplify only for display.
- Validate schema, missing values, IDs and geometry validity.
- Keep historical modelled hazard separate from live weather/forecast feeds.
- Use facility source dates; do not call a point an emergency shelter unless an authority verifies it.

## Safety

Educational historical-data explorer, not a forecast. Historical modelled inundation does not indicate current danger or safe routes. Follow official district/state disaster-management advisories. A hospital marker does not establish operational status, readiness or flood-time access.

## Licence

No code licence selected yet. Select one after reviewing original-code and upstream dataset reuse conditions. Upstream data licences remain independent.
