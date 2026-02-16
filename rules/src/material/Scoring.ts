import { Card } from './Card'
import { cardCharacteristics } from './CardCharacteristics'
import { Condition, ConditionType } from './Condition'
import { EffectType } from './Effect'

export type Scoring = {
  score: number
  condition: Condition
}

export const hasPurse = (card?: Card) => !!card && cardCharacteristics[card].scoring.condition.type === ConditionType.PerGoldInPurse
export const hasLock = (card?: Card) => !!card && cardCharacteristics[card].effects.some((effect) => effect.type === EffectType.PutKeyOnCard)
