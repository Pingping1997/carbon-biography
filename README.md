# Carbon Biography

**A life-course carbon-footprint research prototype.**

Carbon Biography explores how place, time, household resources, infrastructure, migration, education and expanding opportunities shape a person's environmental footprint across life — rather than reducing the result to a present-day lifestyle score.

## Why this project
Most footprint calculators ask about today's flights, diet, car and electricity. Carbon Biography asks a different question:

> How did the world you were born into, the opportunities you encountered, and the choices available to you together shape your carbon life?

The interface currently has four views:
- **My Life** — life-stage timeline + uncertainty + footprint drivers
- **Map** — the geography of a person's carbon biography
- **Compare Lives** — synchronize two biographies by age
- **Explore the World** — country-average context layer

## Status
Research/UX prototype. The demo biography values are illustrative screening estimates, **not publication-ready LCA results**. Country-reference numbers must be imported from versioned sources before publication.

## Tech stack
- React
- TypeScript
- Vite
- Leaflet / OpenStreetMap
- Static-first architecture, suitable for GitHub Pages

## Run locally
```bash
npm install
npm run dev
```

Build:
```bash
npm run build
npm run preview
```

## Repository structure
```text
carbon-biography/
├── .github/workflows/deploy.yml
├── docs/
│   ├── architecture.md
│   ├── data-model.md
│   └── methodology.md
├── public/data/
│   └── country_reference_template.csv
├── src/
│   ├── components/
│   ├── data/
│   ├── services/
│   ├── types/
│   ├── views/
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
├── package.json
└── vite.config.ts
```

## Design principles
1. **Biography, not questionnaire.** Users construct life stages.
2. **Memories, not engineering quantities.** Ask questions people can answer decades later.
3. **Unknown is not zero.** Use a contextual prior when detailed data are absent.
4. **Country average is context, not personal truth.** Keep reference layers separate from personal estimates.
5. **Show uncertainty.** Prefer ranges and confidence over false precision.
6. **Comparison is explanatory, not moral ranking.** Explain divergence and convergence.
7. **Provenance matters.** Every production factor should identify source, year/version and system boundary.

## Adding a real second person
Edit or replace `davidePlaceholder` in `src/data/demoProfiles.ts`. It is intentionally incomplete so the prototype does not invent an Italian childhood.

Longer term, profiles should be JSON/DB records rather than source code.

## Data roadmap
Suggested order:
1. historical country consumption / territorial CO2 reference series
2. China rural/urban household-footprint priors by period/income group
3. Austria/Italy household priors
4. historical electricity/heating factors
5. flight-distance and aviation methodology
6. food and mobility activity factors
7. uncertainty distributions
8. MRIO/expenditure baseline integration

## Privacy
A carbon biography can contain sensitive socioeconomic and location history. A production service should minimize personal data, make sharing opt-in, avoid public profiles by default, and separate analytics from identity.

## License
MIT for the software scaffold. Dataset licenses/attribution must be handled separately according to each source.
