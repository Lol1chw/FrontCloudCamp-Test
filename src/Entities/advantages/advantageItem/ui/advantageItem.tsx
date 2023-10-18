import { Button, Input } from 'Shared/ui'
import styles from './advantageItem.module.css'
import { AdvantageItemProps } from './advantageItem.type'
export function AdvantageItem({ index, register, remove, fields }: AdvantageItemProps) {
   return (
      <li className={styles.item} key={fields.id}>
         <Input
            placeholder="Enter advantage"
            id={`field-advatages-${index + 1}`}
            {...register(`Advantages.${index}.advantage` as const)}></Input>
         <Button
            id={`button-remove-${index + 1}`}
            className={'icon'}
            type="button"
            onClick={() => remove(index)}>
            <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="20" height="19" fill="none">
               <path
                  fill="#CCC"
                  d="m5.453 16.652-.895-8.5a.5.5 0 0 1 .498-.552h9.889a.5.5 0 0 1 .497.552l-.895 8.5a.5.5 0 0 1-.497.448h-8.1a.5.5 0 0 1-.497-.448ZM17 5.7H3a.5.5 0 0 1-.5-.5v-.9a.5.5 0 0 1 .5-.5h2.355a.5.5 0 0 0 .268-.078l2.755-1.745a.5.5 0 0 1 .267-.077h2.71a.5.5 0 0 1 .268.077l2.755 1.745a.5.5 0 0 0 .267.078H17a.5.5 0 0 1 .5.5v.9a.5.5 0 0 1-.5.5Z"
               />
            </svg>
         </Button>
      </li>
   )
}
