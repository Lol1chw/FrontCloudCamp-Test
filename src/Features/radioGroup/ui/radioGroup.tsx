import { useFormContext } from 'react-hook-form'
import type { Step2Values } from 'Shared/lib/index'
import { Radio } from 'Shared/ui'
import { useData } from '../model/model'
import styles from './radioGroup.module.css'

export function RadioGroup() {
   const {
      register,
      formState: { errors }
   } = useFormContext<Step2Values>()
   const { radioArr } = useData()

   return (
      <>
         <label className={styles.label}>Radio group</label>
         <ul className={styles.list}>
            {radioArr.map((element) => {
               return (
                  <li key={element.key}>
                     <Radio
                        {...register('RadioGroup')}
                        name="RadioGroup"
                        value={element.value}
                        key={element.key}
                        id={element.id}>
                        {element.label}
                     </Radio>
                  </li>
               )
            })}
         </ul>
         {errors.RadioGroup?.message && <p className={styles.error}>{errors.RadioGroup.message}</p>}
      </>
   )
}
