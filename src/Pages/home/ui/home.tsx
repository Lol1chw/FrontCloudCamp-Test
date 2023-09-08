import { InputMaster } from 'Features/inputMaster'
import { Button, Divider } from 'Shared/ui'
import { UserInfo } from 'Widgets/index'
import styles from './home.module.css'

export function Home() {
   return (
      <div className={styles.container}>
         <div className={styles.layout}>
            <UserInfo />
            <Divider />
            <InputMaster placeholder="+7 999 999-99-99" disabled>
               Номер телефона
            </InputMaster>
            <InputMaster placeholder="tim.jennings@example.com" disabled>
               Email
            </InputMaster>
            <Button className={styles.button} id="button-start">
               Начать
            </Button>
         </div>
      </div>
   )
}
