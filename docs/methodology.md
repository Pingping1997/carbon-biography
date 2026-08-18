# Methodology roadmap

## Goal
Estimate a person's life-course climate footprint while distinguishing:
1. structural/context effects,
2. household circumstances,
3. opportunity-related activity,
4. more individually variable behavior.

The atmospheric total is still the total; these labels are interpretive, not different physical CO2 species.

## Proposed model
For person `i`, region `r`, and year `t`:

`CF(i,t) = context baseline(r,t,socioeconomic group) + household adjustments + personal activity overrides`

Categories:
- home
- food
- everyday mobility
- long-distance travel
- goods & leisure
- shared society/services

## Hybrid calculation strategy
Use an expenditure/MRIO or household-footprint baseline when users remember little. Override categories with process/activity-based estimates when better information is available.

Examples:
- unknown household electricity -> retain contextual baseline
- known coal stove -> household-energy override
- known flight itinerary -> route/activity calculation
- known no-car childhood -> mobility adjustment

## Uncertainty
Every stage result should report at least central/low/high and provenance. Avoid false precision. Unknown values should be inferred, not silently treated as zero.

## Country comparisons
Country-average layers are context only. Keep territorial CO2, consumption-based CO2, and broader GHG footprint metrics explicitly separate. Do not mix them in one chart without labeling system boundaries.

## Aviation
Personal flights should be calculated separately from country reference values, with a visible setting for CO2-only versus CO2e including non-CO2 aviation effects.
