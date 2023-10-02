import { useFormContext } from 'react-hook-form'
import type { Step2Values } from 'Shared/lib/index'
import { Checkbox } from 'Shared/ui'
import { checkBoxArr } from '../model/model'
import styles from './checkboxGroup.module.css'

export function CheckboxGroup() {
   const { register } = useFormContext<Step2Values>()

   return (
      <>
         <label className={styles.label}>Checkbox group</label>
         <ul className={styles.list}>
            {checkBoxArr.map((element) => {
               return (
                  <li className={styles.listItem} key={element.key}>
                     <Checkbox key={element.key} id={element.id} {...register(element.register)}>
                        {element.label}
                     </Checkbox>
                  </li>
               )
            })}
         </ul>
      </>
   )
}
