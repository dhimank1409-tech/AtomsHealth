# 🌍 AtmosHealth V1.0 – Planetary Health Geospatial Intelligence

> **Next.js AI-powered geospatial dashboard uniting satellite observations, in-situ ground monitoring, atmospheric boundary layer dynamics, and gridded demographic vulnerability into evidence-grade public health preparedness intelligence.**

---

## 🎨 Pitch-Deck Aesthetic & Design Tokens

AtmosHealth V1.0 is styled strictly in alignment with the institutional pitch deck:
- **Tonal Palette**: Navy (`#26345e`), Beige (`#ebe7d6`), Navy-dark (`#1d2848`), Beige-dark (`#ddd8c4`).
- **Accents**: Accent Amber (`#e8b35a` on navy) and Rust (`#a64b2a` on beige).
- **Status Tones**: Critical (`#b5654f`), Severe (`#c98b6b`), High (`#d9b38c`), OK (`#6fa88a`).
- **Typography**: Anton for big uppercase titles, Space Grotesk for body and labels, Tabular Numbers (`tabular-nums`) for all data.
- **Rules**: Zero gradients, zero neon glows, zero box shadows, flat tonal surfaces only, 8px grid scale, and 128px desktop side margins.

---

## 🚀 How to Run

### 1. Prerequisites
- Node.js >= 18
- npm >= 9

### 2. Installation & Setup
```bash
# Clone and enter workspace
cd ESAI

# Install dependencies
npm install

# Seed verified baseline data into SQLite database
npm run db:seed

# Start Next.js development server on localhost:3000
npm run dev
```

Visit **[http://localhost:3000](http://localhost:3000)** in your browser.

### 3. Run Automated Tests
```bash
npm test
```
Runs the full suite verifying all 8 API route handlers, standard envelope responses, Zod validation, and error handling.

### 4. Build Production Bundle
```bash
npm run build
```

---

## 🔑 Required Environment Variables

All keys are defined in `.env` (template provided in `.env.example`):

| Variable | Required | Default | Description |
| :--- | :--- | :--- | :--- |
| `DATABASE_URL` | **Yes** | `"file:./dev.db"` | SQLite database connection for Prisma ORM. |
| `PORT` | No | `3000` | Application port. |
| `NEXT_TELEMETRY_DISABLED` | No | `1` | Disables anonymous Next.js telemetry for offline builds. |
| `OPENAQ_API_KEY` | Optional | `""` | OpenAQ ground sensor network API key (public fallback used if absent). |
| `COPERNICUS_API_KEY` | Optional | `""` | Copernicus Data Space API key (Open-Meteo CAMS proxy used if absent). |
| `DATA_GOV_IN_API_KEY` | Optional | `""` | India data.gov.in / CPCB API key (local station network used if absent). |

---

## 🛰️ Data Sources & Lineage

Every metric displayed on the dashboard links back to its verified telemetry stream:

1. **Satellite Atmospheric Observations (FR-02)**:
   - **Provider**: European Space Agency (ESA) & Copernicus Atmosphere Monitoring Service (CAMS).
   - **Sensor**: Sentinel-5P / TROPOMI Spectrometer (Level-3 Daily Gridded Product).
   - **Parameters**: Tropospheric NO2 Column (µmol/m²), PM2.5 Equivalent Proxy (µg/m³), Aerosol Optical Depth (AOD).
   - **Spatial Resolution**: 0.1° × 0.1° (~10 km grid).
2. **Ground In-Situ AQI Network (FR-03)**:
   - **Provider**: Central Pollution Control Board (CPCB) with OpenAQ as a clearly labelled fallback.
   - **Instrument**: Continuous Ambient Air Quality Monitoring Stations (BAM-1020).
   - **Parameters**: Station-level AQI, PM2.5, PM10, NO2, sensor calibration health status.
3. **Meteorological Boundary Layer Context (FR-04)**:
   - **Provider**: Open-Meteo High-Resolution Global Forecast Grid (ECMWF IFS model).
   - **Parameters**: Temperature, relative humidity, wind vector, Atmospheric Boundary Layer (ABL) height with thermal inversion alert (<250m).
4. **Gridded Population & Demographic Vulnerability (FR-07)**:
   - **Provider**: WorldPop / Global Human Settlement Layer (GHSL) and aggregated regional census boundaries.
   - **Parameters**: Gridded human population count, proportion of elderly (>65), proportion of young children (<5), baseline respiratory morbidity index.

---

## ⚠️ Known Limitations & Scope Boundaries

- **Out of Scope (By Design)**:
  - AtmosHealth **does not** diagnose diseases, predict individual clinical conditions, provide hospital triage recommendations, or generate unvalidated future pollution forecasts.
  - The Scenario Exploration sandbox evaluates relative sensitivity on historical baseline observations, not clinical outcomes.
- **Sensor Coverage**:
  - Satellite optical sensors (TROPOMI) may experience cloud-cover masking during heavy overcast conditions.
  - Ground monitoring stations represent precise point coordinates that require spatial interpolation between sparse monitor locations.
- **Data Privacy**:
  - Public-health datasets are strictly aggregated by administrative census sub-districts. No individual-level or identifiable medical records are processed.
