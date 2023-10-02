import { InputMaster } from 'Entities/inputMaster'
import { useFormContext } from 'react-hook-form'
import type { Step1Values } from 'Shared/lib/index'
import { useData } from '../model/model'

export function InputGroup() {
   const { register } = useFormContext<Step1Values>()
   const { arr } = useData()
   return arr.map((item) => {
      return (
         <InputMaster
            {...register(item.register)}
            key={item.key}
            id={item.id}
            helperText={item.helperText}
            defaultValue={item.defaultValue}
            placeholder={item.placeholder}>
            {item.label}
         </InputMaster>
      )
   })
}
