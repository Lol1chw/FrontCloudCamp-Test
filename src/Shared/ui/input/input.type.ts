import { InputHTMLAttributes, ReactNode } from 'react'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
   className?: string
   placeholder?: string
   disabled?: boolean
   children?: ReactNode
}
