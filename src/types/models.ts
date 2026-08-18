export type Confidence = 'low' | 'medium' | 'high'
export type SourceKind = 'user' | 'inferred' | 'reference' | 'placeholder'

export type FootprintCategory =
  | 'home'
  | 'food'
  | 'everyday_mobility'
  | 'long_distance_travel'
  | 'goods_leisure'
  | 'shared_society'

export interface GeoPoint {
  lat: number
  lon: number
}

export interface DataProvenance {
  sourceKind: SourceKind
  sourceId?: string
  confidence: Confidence
  note?: string
}

export interface StageInputs {
  settlement?: 'rural' | 'urban' | 'suburban'
  householdResources?: 'very_limited' | 'modest' | 'comfortable' | 'affluent' | 'unknown'
  householdSize?: number
  dwelling?: string
  heating?: string
  cooling?: string
  cookingFuel?: string
  schoolOrWorkMobility?: string
  privateCar?: boolean
  flightsPerYear?: number
  foodPattern?: string
  shoppingPattern?: string
  monthlySpendingEur?: number
}

export interface FootprintBreakdown {
  home: number
  food: number
  everyday_mobility: number
  long_distance_travel: number
  goods_leisure: number
  shared_society: number
}

export interface LifeStage {
  id: string
  startYear: number
  endYear: number
  label: string
  place: string
  countryCode: string
  region?: string
  coordinates: GeoPoint
  lifeStage: string
  narrative: string
  inputs: StageInputs
  estimate?: {
    central: number
    low: number
    high: number
    confidence: Confidence
    breakdown: FootprintBreakdown
    status: 'illustrative' | 'calculated'
  }
}

export interface PersonProfile {
  id: string
  name: string
  birthYear: number
  flag?: string
  tagline?: string
  stages: LifeStage[]
  status: 'demo' | 'placeholder' | 'user'
}

export interface CountryReference {
  iso3: string
  name: string
  coordinates: GeoPoint
  year: number
  metric: 'territorial_co2' | 'consumption_co2' | 'consumption_ghg'
  value: number | null
  unit: string
  sourceId: string
  note?: string
}

export interface ReferenceRecord {
  id: string
  title: string
  publisher: string
  url: string
  accessed: string
  scope: string
  note?: string
}
