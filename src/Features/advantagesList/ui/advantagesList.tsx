import { AdvantageItem } from 'Entities/advantages'
import { useFieldArray, useFormContext } from 'react-hook-form'
import type { Step2Values } from 'Shared/lib/index'
import { Button } from 'Shared/ui'
import styles from './advantagesList.module.css'

export function AdvantagesList() {
   const {
      register,
      control,
      formState: { errors }
   } = useFormContext<Step2Values>()
   const { fields, append, remove } = useFieldArray<Step2Values>({
      name: 'Advantages',
      control
   })
   let errorMessage = null

   return (
      <>
         <label className={styles.label}>Advantages</label>
         <ul className={styles.list}>
            {fields.length === 0 && <p className={styles.error}>Минимум одно поле должно быть заполнено</p>}
            {fields.map((field, index) => {
               if (index === fields.length - 1 && errors?.Advantages?.[index]?.advantage?.message) {
                  errorMessage = errors?.Advantages?.[index]?.advantage?.message
               }
               return (
                  <AdvantageItem
                     fields={field}
                     register={register}
                     remove={() => remove(index)}
                     index={index}
                     key={field.id}
                  />
               )
            })}
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
            <Button
               className={fields.length === 5 ? 'outlined disabled' : 'outlined'}
               disabled={fields.length === 5 ? true : false}
               id="Button add"
               onClick={() =>
                  append({
                     advantage: ''
                  })
               }>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                  <path
                     fill={fields.length === 5 ? '#0000000a' : '#5558FA'}
                     d="M11 5a1 1 0 1 0-2 0v4H5a1 1 0 1 0 0 2h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2h-4V5Z"
                  />
               </svg>
            </Button>
         </ul>
      </>
   )
}
