import { forwardRef } from 'react'
import styles from './input.module.css'
import type { InputProps } from './input.type'
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(props, ref) {
   const { className = 'standart', placeholder, children, ...otherProps } = props

   if (children && children !== '') {
      return (
         <>
            <input className={styles[className]} placeholder={placeholder} {...otherProps} ref={ref}></input>
            <p className={styles.error}>{children}</p>
         </>
      )
   } else if (!children) {
      return <input className={styles[className]} placeholder={placeholder} {...otherProps} ref={ref}></input>
   }
})
