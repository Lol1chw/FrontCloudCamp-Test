import { ReactNode } from 'react'
import styles from './container.module.css'

export function Container({ children, className }: { children: ReactNode; className: string }) {
   const classNames = className
      .split(' ')
      .map((name) => styles[name])
      .join(' ')
   return <div className={classNames}>{children}</div>
}
