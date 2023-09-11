import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './button.module.css'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
   className: string
   children: ReactNode
   id?: string
}

export function Button({ className, children, id, ...otherProps }: ButtonProps) {
   const props = {...otherProps }
   return (
      <button className={styles[className]} id={id} {...props}>
         {children}
      </button>
   )
}
