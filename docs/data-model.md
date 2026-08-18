# Data model principles

## A field is not just a value
Scientific fields should eventually carry:

```json
{
  "value": "coal stove",
  "sourceKind": "user",
  "confidence": "high",
  "sourceId": null,
  "note": "remembered household heating"
}
```

This prototype keeps provenance at a coarser level for readability. The interfaces are prepared to expand.

## Life-stage questions
Questions should be adaptive and memory-friendly. Ask "How was your home heated?" rather than "How many kWh did you consume in 2001?".

Core MVP variables:
- year
- country / region
- rural / urban / suburban
- life stage
- household resource bracket / local income percentile
- household size
- dwelling
- heating / cooling / cooking fuel
- car ownership
- everyday mobility
- diet pattern
- flights / major travel
- discretionary spending

## Comparison alignment
Support both:
- calendar-year comparison
- same-age comparison

The latter is central for comparing childhoods across places and generations.
