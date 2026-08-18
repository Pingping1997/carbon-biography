import type { LifeStage, PersonProfile } from '../types/models'

export function stageAtAge(profile: PersonProfile, age: number): LifeStage | undefined {
  const year = profile.birthYear + age
  return profile.stages.find(stage => year >= stage.startYear && year <= stage.endYear)
}

export function compareAtAge(a: PersonProfile, b: PersonProfile, age: number) {
  return { age, a: stageAtAge(a, age), b: stageAtAge(b, age) }
}
