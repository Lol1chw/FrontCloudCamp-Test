import { ReactNode } from 'react'
import type { InputProps } from 'Shared/ui'

export type InputMasterProps = InputProps & {
   helperText?: ReactNode
   ref?: React.ForwardedRef<HTMLInputElement>
   label?: string
}
