import { HTMLAttributes } from 'react'
import { FieldArrayWithId, UseFieldArrayRemove, UseFormRegister } from 'react-hook-form'
import type { Step2Values } from 'Shared/lib/index'

export type AdvantageItemProps = HTMLAttributes<HTMLInputElement> & {
   remove: UseFieldArrayRemove
   index: number
   key: string
   register: UseFormRegister<Step2Values>
   fields: FieldArrayWithId<Step2Values>
}
