import { InputHTMLAttributes, ReactNode } from 'react'

export type FormProps = InputHTMLAttributes<HTMLFormElement> & {
   children: ReactNode
}

   // сделать switch case конструкцию для /create, if(active === 1) {и т.д.}


export function Form({ children, ...otherProps }: FormProps) {
   return <form {...otherProps}>{children}</form>
}
