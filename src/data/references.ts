import type { CountryReference, ReferenceRecord } from '../types/models'

export const referenceRegistry: ReferenceRecord[] = [
  {
    id: 'owid-gcb-consumption-co2',
    title: 'Consumption-based CO₂ emissions per capita',
    publisher: 'Our World in Data / Global Carbon Budget',
    url: 'https://ourworldindata.org/grapher/consumption-co2-per-capita',
    accessed: '2026-08-18',
    scope: 'Country-level consumption-based CO₂ reference layer',
    note: 'Use as contextual reference, not as the personal footprint engine. Check dataset metadata/version before production use.'
  },
  {
    id: 'owid-gcb-territorial-co2',
    title: 'Annual CO₂ emissions per capita',
    publisher: 'Our World in Data / Global Carbon Budget',
    url: 'https://ourworldindata.org/co2-and-greenhouse-gas-emissions',
    accessed: '2026-08-18',
    scope: 'Country-level territorial CO₂ reference layer'
  }
]

// Demo rows only. Null means “do not display a fabricated number”.
// Production data should be generated from a versioned CSV importer, not hand-edited here.
export const countryReferences: CountryReference[] = [
  { iso3:'CHN', name:'China', coordinates:{lat:35.86,lon:104.19}, year:2024, metric:'territorial_co2', value:8.7, unit:'t CO₂/person/year', sourceId:'owid-gcb-territorial-co2', note:'Demo verified reference used in V2 prototype.' },
  { iso3:'USA', name:'United States', coordinates:{lat:37.09,lon:-95.71}, year:2024, metric:'territorial_co2', value:14.0, unit:'t CO₂/person/year', sourceId:'owid-gcb-territorial-co2', note:'Demo verified reference used in V2 prototype.' },
  { iso3:'AUT', name:'Austria', coordinates:{lat:47.52,lon:14.55}, year:2024, metric:'territorial_co2', value:null, unit:'t CO₂/person/year', sourceId:'owid-gcb-territorial-co2', note:'Load from the versioned dataset before publication.' },
  { iso3:'ITA', name:'Italy', coordinates:{lat:41.87,lon:12.57}, year:2024, metric:'territorial_co2', value:null, unit:'t CO₂/person/year', sourceId:'owid-gcb-territorial-co2', note:'Load from the versioned dataset before publication.' }
]
