import { Divider } from 'Shared/ui'
import { UserInfo } from 'Widgets/index'
import styles from './home.module.css'
export function Home() {
   return (
      <div className={styles.layout}>
         <UserInfo />
         <Divider />
      </div>
   )
}
