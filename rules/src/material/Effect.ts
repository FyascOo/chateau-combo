import { Condition } from './Condition'
import { MaterialType } from './MaterialType'
import { Place } from './Place'

export enum EffectType {
  Discount,
  GainGold,
  GainKeys,
  DiscardFromRiver,
  ChooseBetween,
  PutGoldOnCard,
  PutKeyOnCard
}

export type Effect = Discount | GainGold | GainKeys | DiscardFromRiver | ChooseBetween | PutGoldOnCard | PutKeyOnCard

export type Discount = {
  type: EffectType.Discount
  castle?: number
  village?: number
}

export type GainGold = {
  type: EffectType.GainGold
  gain: number
  opponentsGain?: number
  condition?: Condition
}

export type GainKeys = {
  type: EffectType.GainKeys
  gain: number
  opponentsGain?: number
  condition?: Condition
}

export type DiscardFromRiver = {
  type: EffectType.DiscardFromRiver
  river: Place
  token: MaterialType.GoldCoin | MaterialType.Key
}

export type ChooseBetween = {
  type: EffectType.ChooseBetween
  effect1: Effect
  effect2: Effect
}

export type PutGoldOnCard = {
  type: EffectType.PutGoldOnCard
  gold?: number
  cardsLimit?: number
}

//Expansion1

export type PutKeyOnCard = {
  type: EffectType.PutKeyOnCard
  hasKey: boolean
  effect: Effect
}
