import styles from './avatar.module.css'

export function Avatar({ Initial }: { Initial: string }) {
   return (
      <div className={styles.circle}>
         <h1 className={styles.h1}>{Initial}</h1>
      </div>
   )
}
