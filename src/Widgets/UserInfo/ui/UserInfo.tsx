import { AboutUser } from 'Entities/Initials'
import { Avatar } from 'Shared/ui'
import styles from './UserInfo.module.css'

export function UserInfo() {
   return (
      <div className={styles.UserInfoFrame}>
         <Avatar Initial="ИТ" />
         <AboutUser Name="Илья Торовин" />
      </div>
   )
}
