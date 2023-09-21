import { OptionHTMLAttributes, ReactNode, SelectHTMLAttributes, forwardRef } from 'react'
import React from 'react'
import styles from './select.module.css'

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
   label: string
   children: ReactNode
   helperText: ReactNode
}

type ChildProps = OptionHTMLAttributes<HTMLOptionElement> & {
   className: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
   { children, label, className = 'standard', helperText, ...otherProps },
   ref
) {
   if (label && label !== '') {
      return (
         <label className={styles.label}>
            {label}
            <select className={styles[className]} ref={ref} {...otherProps}>
               {React.Children.map(children, (child) => {
                  if (React.isValidElement(child)) {
                     const childProps: ChildProps = {
                        className: styles[child.props.className]
                     }
                     return React.cloneElement(child, childProps)
                  }
               })}
            </select>
            <p className={styles.error}>{helperText}</p>
         </label>
      )
   } else {
      return (
         <select className={styles.select} ref={ref} {...otherProps}>
            {React.Children.map(children, (child) => {
               console.log(child)
               if (React.isValidElement(child)) {
                  const childProps: ChildProps = {
                     className: styles[child.props.className]
                  }
                  return React.cloneElement(child, childProps)
               }
            })}
         </select>
      )
   }
})
