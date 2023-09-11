import styles from './steps.module.css'

export function Step({ className }: { className: string }) {
   return <div className={styles[className]}></div>
}
