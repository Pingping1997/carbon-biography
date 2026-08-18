# Architecture

Carbon Biography is intentionally split into four layers.

## 1. UI layer
React components and views under `src/components` and `src/views`. The UI should never hard-code scientific assumptions when they can live in the model/data layers.

## 2. Domain model
`src/types/models.ts` defines profiles, life stages, estimates, breakdown categories, country references and provenance. This is the contract between the UI and future back-end/model code.

## 3. Calculation services
`src/services` contains pure functions. The current demo consumes illustrative stage estimates; a future engine can replace them with calculated values without rewriting the views.

Recommended production pipeline:

`memory-style answers -> activity estimates -> historical factors -> category footprints -> uncertainty distribution -> narrative explanation`

## 4. Reference data
Reference metadata live in `src/data/references.ts`; larger datasets should live in versioned CSV/Parquet files or a future API. Every scientific result should carry source/version metadata.

## Future back end
When static files become limiting, add an API behind the same TypeScript interfaces. Recommended responsibilities:
- dataset import/versioning
- factor lookup by year/region
- MRIO/expenditure baseline lookup
- flight distance and radiative-effect methods
- Monte Carlo uncertainty
- saving/sharing user biographies (only with explicit consent)
