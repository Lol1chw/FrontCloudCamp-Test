import { ReactNode } from 'react'
import styles from './steps.module.css'

export function Step({ children }: { children: ReactNode }) {
   return <div className={styles.circle}>{children}</div>
}
