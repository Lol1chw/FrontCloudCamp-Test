import { InputHTMLAttributes, ReactNode } from 'react'
import { RegisterOptions } from 'react-hook-form'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
   className?: string
   placeholder?: string
   disabled?: boolean
   children?: ReactNode
   register?: RegisterOptions
} 
