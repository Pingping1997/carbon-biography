import type { PersonProfile } from '../types/models'

export const pingpingProfile: PersonProfile = {
  id: 'pingping-demo',
  name: 'Pingping',
  birthYear: 1997,
  flag: '🇨🇳',
  tagline: 'Rural Shandong → Chinese cities → Vienna',
  status: 'demo',
  stages: [
    {
      id: 'pp-1997-2008',
      startYear: 1997,
      endYear: 2008,
      label: 'Village childhood',
      place: 'Fangjia / Dongying',
      region: 'Shandong',
      countryCode: 'CHN',
      coordinates: { lat: 37.43, lon: 118.67 },
      lifeStage: 'Childhood & primary school',
      narrative: 'Very low material consumption and mobility; coal heating was one of the more important direct household sources.',
      inputs: {
        settlement: 'rural', householdResources: 'very_limited', dwelling: 'family home',
        heating: 'coal stove', cookingFuel: 'LPG / compressed gas', schoolOrWorkMobility: 'walking', privateCar: false,
        flightsPerYear: 0, foodPattern: 'basic household diet', shoppingPattern: 'very limited'
      },
      estimate: { central: 1.0, low: 0.7, high: 1.3, confidence: 'medium', status: 'illustrative',
        breakdown: { home: 0.34, food: 0.38, everyday_mobility: 0.04, long_distance_travel: 0.01, goods_leisure: 0.05, shared_society: 0.18 } }
    },
    {
      id: 'pp-2008-2015', startYear: 2008, endYear: 2015, label: 'Urbanizing teenager', place: 'Dongying', region: 'Shandong', countryCode: 'CHN',
      coordinates: { lat: 37.43, lon: 118.67 }, lifeStage: 'Middle & high school',
      narrative: 'Boarding-school life and car-free mobility kept the footprint relatively low as urban infrastructure and consumption became more accessible.',
      inputs: { settlement: 'urban', householdResources: 'modest', dwelling: 'school dormitory / urban village', heating: 'central / local', schoolOrWorkMobility: 'walking / electric tricycle', privateCar: false, flightsPerYear: 0, foodPattern: 'school canteen', shoppingPattern: 'limited' },
      estimate: { central: 1.7, low: 1.3, high: 2.2, confidence: 'medium', status: 'illustrative',
        breakdown: { home: 0.41, food: 0.60, everyday_mobility: 0.15, long_distance_travel: 0.03, goods_leisure: 0.17, shared_society: 0.34 } }
    },
    {
      id: 'pp-2015-2019', startYear: 2015, endYear: 2019, label: 'University', place: 'Chengdu', region: 'Sichuan', countryCode: 'CHN',
      coordinates: { lat: 30.57, lon: 104.07 }, lifeStage: 'Bachelor study',
      narrative: 'Long-distance mobility entered ordinary life. Shared student housing still moderated residential impacts.',
      inputs: { settlement: 'urban', householdResources: 'modest', dwelling: '6-person dormitory / shared apartment', cooling: 'AC', heating: 'none', schoolOrWorkMobility: 'public transport / walking', privateCar: false, flightsPerYear: 4, foodPattern: 'canteen + restaurants', shoppingPattern: 'online / mall', monthlySpendingEur: 450 },
      estimate: { central: 3.8, low: 3.0, high: 5.0, confidence: 'medium', status: 'illustrative',
        breakdown: { home: 0.49, food: 0.84, everyday_mobility: 0.28, long_distance_travel: 1.29, goods_leisure: 0.37, shared_society: 0.53 } }
    },
    {
      id: 'pp-2019-2022', startYear: 2019, endYear: 2022, label: 'Master study', place: 'Beijing / Langfang', countryCode: 'CHN',
      coordinates: { lat: 39.75, lon: 116.55 }, lifeStage: 'Master study & COVID',
      narrative: 'Urban services, heating, rail/taxi mobility and flights raised the baseline, with a temporary mobility dip during COVID.',
      inputs: { settlement: 'urban', householdResources: 'modest', dwelling: 'dormitory / apartment', heating: 'district heating', cooling: 'AC', schoolOrWorkMobility: 'rail / subway / taxi', privateCar: false, flightsPerYear: 2, foodPattern: 'canteen + restaurants + delivery', shoppingPattern: 'online / mall', monthlySpendingEur: 450 },
      estimate: { central: 3.4, low: 2.7, high: 4.3, confidence: 'medium', status: 'illustrative',
        breakdown: { home: 0.68, food: 0.85, everyday_mobility: 0.50, long_distance_travel: 0.35, goods_leisure: 0.51, shared_society: 0.51 } }
    },
    {
      id: 'pp-2022-now', startYear: 2022, endYear: 2026, label: 'Vienna PhD', place: 'Vienna', countryCode: 'AUT',
      coordinates: { lat: 48.21, lon: 16.37 }, lifeStage: 'PhD / adult',
      narrative: 'Lower-carbon everyday infrastructure coexists with much greater international mobility and discretionary consumption.',
      inputs: { settlement: 'urban', householdResources: 'comfortable', dwelling: 'student / shared apartment', heating: 'building heating', cooling: 'none', schoolOrWorkMobility: 'public transport / walking', privateCar: false, flightsPerYear: 8, foodPattern: 'home cooking + restaurants', shoppingPattern: 'moderate', monthlySpendingEur: 1250 },
      estimate: { central: 6.8, low: 5.0, high: 9.0, confidence: 'low', status: 'illustrative',
        breakdown: { home: 0.75, food: 1.09, everyday_mobility: 0.35, long_distance_travel: 3.20, goods_leisure: 0.61, shared_society: 0.80 } }
    }
  ]
}

export const davidePlaceholder: PersonProfile = {
  id: 'davide-placeholder',
  name: 'Davide',
  birthYear: 1997,
  flag: '🇮🇹',
  tagline: 'Italian comparison profile — intentionally incomplete',
  status: 'placeholder',
  stages: [
    { id:'dv-child', startYear:1997, endYear:2008, label:'Childhood', place:'Italy — add location', countryCode:'ITA', coordinates:{lat:42.8,lon:12.8}, lifeStage:'Childhood', narrative:'Placeholder. Add real childhood housing, heating, mobility and family context.', inputs:{ householdResources:'unknown' } },
    { id:'dv-teen', startYear:2008, endYear:2015, label:'Teenager', place:'Italy — add location', countryCode:'ITA', coordinates:{lat:42.8,lon:12.8}, lifeStage:'Teenager', narrative:'Placeholder. Add school, household and mobility context.', inputs:{ householdResources:'unknown' } },
    { id:'dv-young', startYear:2015, endYear:2022, label:'Young adult', place:'Italy / Europe — add location', countryCode:'ITA', coordinates:{lat:42.8,lon:12.8}, lifeStage:'University / early adult', narrative:'Placeholder. Fill this together instead of assuming a typical Italian lifestyle.', inputs:{ householdResources:'unknown' } },
    { id:'dv-now', startYear:2022, endYear:2026, label:'Adult', place:'Austria / Italy — add location', countryCode:'AUT', coordinates:{lat:48.21,lon:16.37}, lifeStage:'Adult', narrative:'A potentially shared present can follow a very different childhood and cumulative history.', inputs:{ householdResources:'unknown' } }
  ]
}

export const demoProfiles = [pingpingProfile, davidePlaceholder]
