import { forwardRef } from 'react'
import { Input } from 'Shared/ui'
import type { InputMasterProps } from '../types/index'
import style from './inputMaster.module.css'

export const InputMaster = forwardRef<HTMLInputElement, InputMasterProps>(function InputMaster(
   { children, placeholder, helperText, disabled, ...otherProps },
   ref
) {
   if (helperText) {
      return (
         <label className={style.label}>
            {children}
            <Input placeholder={placeholder} disabled={disabled} {...otherProps} ref={ref}>
               {helperText}
            </Input>
         </label>
      )
   } else {
      return (
         <label className={style.label}>
            {children}
            <Input placeholder={placeholder} disabled={disabled} {...otherProps} ref={ref} />
         </label>
      )
   }
})
