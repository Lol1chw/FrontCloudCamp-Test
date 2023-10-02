import type { Step2Values } from 'Features/authentication'
import { FieldArrayWithId, UseFieldArrayRemove, UseFormRegister } from 'react-hook-form'

export type AdvantageItemProps = {
   remove: UseFieldArrayRemove
   index: number
   key: string
   register: UseFormRegister<Step2Values>
   fields: FieldArrayWithId<Step2Values>
}
