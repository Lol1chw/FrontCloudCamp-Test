import { Input, InputProps } from 'Shared/ui'
import style from './inputMaster.module.css'

type InputMaster = Omit<InputProps, 'className'> & {
   helperText?: string
}

export function InputMaster({ children, placeholder, helperText, disabled }: InputMaster) {
   if (helperText) {
      return (
         <label className={style.label}>
            {children}
            <Input className={style.disabled} placeholder={placeholder} disabled={disabled}>
               {helperText}
            </Input>
         </label>
      )
   } else {
      return (
         <label className={style.label}>
            {children}
            <Input className={style.disabled} placeholder={placeholder} disabled={disabled} />
         </label>
      )
   }
}
