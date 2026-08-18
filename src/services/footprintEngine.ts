import type { FootprintBreakdown, LifeStage, PersonProfile } from '../types/models'

export const categoryLabels: Record<keyof FootprintBreakdown, string> = {
  home: 'Home',
  food: 'Food',
  everyday_mobility: 'Everyday mobility',
  long_distance_travel: 'Long-distance travel',
  goods_leisure: 'Goods & leisure',
  shared_society: 'Shared society',
}

export function stageDuration(stage: LifeStage) {
  return Math.max(1, stage.endYear - stage.startYear)
}

export function stageCumulative(stage: LifeStage) {
  if (!stage.estimate) return null
  return stage.estimate.central * stageDuration(stage)
}

export function lifetimeFootprint(profile: PersonProfile) {
  const values = profile.stages.map(stageCumulative).filter((v): v is number => v !== null)
  if (!values.length) return null
  return values.reduce((a, b) => a + b, 0)
}

export function dominantCategory(stage: LifeStage) {
  if (!stage.estimate) return null
  const entries = Object.entries(stage.estimate.breakdown) as [keyof FootprintBreakdown, number][]
  return entries.sort((a, b) => b[1] - a[1])[0]?.[0] ?? null
}

export function annualSeries(profile: PersonProfile) {
  const rows: { year: number; value: number | null }[] = []
  const min = Math.min(...profile.stages.map(s => s.startYear))
  const max = Math.max(...profile.stages.map(s => s.endYear))
  for (let year = min; year <= max; year++) {
    const stage = profile.stages.find(s => year >= s.startYear && year <= s.endYear)
    rows.push({ year, value: stage?.estimate?.central ?? null })
  }
  return rows
}

export function cumulativeByAge(profile: PersonProfile, maxAge = 80) {
  const result: { age: number; cumulative: number | null }[] = []
  let cumulative = 0
  for (let age = 0; age <= maxAge; age++) {
    const year = profile.birthYear + age
    const stage = profile.stages.find(s => year >= s.startYear && year <= s.endYear)
    if (!stage?.estimate) result.push({ age, cumulative: null })
    else {
      cumulative += stage.estimate.central
      result.push({ age, cumulative })
    }
  }
  return result
}
