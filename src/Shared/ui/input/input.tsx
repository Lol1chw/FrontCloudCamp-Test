import styles from './input.module.css'
import type { InputProps } from './input.type'

export function Input({ className = 'standard', placeholder, children, ...otherProps }: InputProps) {
   const props = { ...otherProps }

   if (children && children !== '') {
      return (
         <>
            <input className={styles[className]} placeholder={placeholder} {...props}></input>
            <p>{children}</p>
         </>
      )
   } else {
      return <input className={styles[className]} placeholder={placeholder} {...props}></input>
   }
}
