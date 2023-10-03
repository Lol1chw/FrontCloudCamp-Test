import { Control, useWatch } from 'react-hook-form'
import { Step3Values } from 'Shared/lib'
import styles from './watched.module.css'

export function Watched({ control }: { control: Control<Step3Values> }) {
   const count = useWatch({
      control,
      name: 'About'
   })

   return (
      <p className={count && count.replace(/\s/g, '').length > 200 ? styles.error : styles.count}>
         {count ? `${count.replace(/\s/g, '').length}/200` : ''}
      </p>
   )
}
