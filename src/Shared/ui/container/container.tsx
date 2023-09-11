import { ReactNode } from 'react'
import styles from './container.module.css'

export function Container({ children, className }: { children: ReactNode; className: string }) {
   return <div className={styles[className]}>{children}</div>
}
