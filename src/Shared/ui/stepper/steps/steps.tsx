import styles from './steps.module.css'

export function Step({ className = 'circle' }: { className: string }) {
   return <div className={styles[className]}></div>
}
