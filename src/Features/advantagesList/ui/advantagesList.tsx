import { AdvantageItem } from 'Entities/advantages'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { PlusSvg } from 'Shared/assets/icons'
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
            {fields.length === 0 && <p className={styles.error}>At least one field must be filled in</p>}
            {fields.map((field, index) => {
               if (errors?.Advantages?.[index]?.advantage?.message) {
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
               <PlusSvg fieldsLenght={fields.length} />
            </Button>
         </ul>
      </>
   )
}
