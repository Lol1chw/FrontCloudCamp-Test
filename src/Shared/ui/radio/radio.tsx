import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'
import styles from './radio.module.css'
type RadioProps = InputHTMLAttributes<HTMLInputElement> & {
   id: string
   children: ReactNode
   name: string
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(
   { id, children, name, ...otherProps },
   ref
) {
   return (
      <label className={styles.container}>
         {children}
         <input name={name} type="radio" id={id} ref={ref} {...otherProps}></input>
         <span className={styles.checkmark}></span>
      </label>
   )
})
