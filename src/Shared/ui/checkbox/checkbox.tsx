import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'
import styles from './checkbox.module.css'
type CheckBoxProps = InputHTMLAttributes<HTMLInputElement> & {
   id: string
   children: ReactNode
}

export const Checkbox = forwardRef<HTMLInputElement, CheckBoxProps>(function Checkbox(
   { id, children, ...otherProps },
   ref
) {
   return (
      <label className={styles.container}>
         {children}
         <input type="checkbox" id={id} ref={ref} {...otherProps}></input>
         <span className={styles.checkmark}></span>
      </label>
   )
})
