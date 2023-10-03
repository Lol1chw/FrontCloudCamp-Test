import { ReactNode } from 'react'
import { Container } from '../index'
import { Line } from './line/line'
import styles from './stepper.module.css'
import { Step } from './steps/steps'

type StepperProps = {
   active: number
   circles?: number
}

export function Stepper({ active, circles = 2 }: StepperProps) {
   const width = (100 / (circles - 1)) * active
   const arr: ReactNode[] = []
   const steps: ReactNode[] = []

   for (let i = 0; i < circles; i++) {
      const uuid = self.crypto.randomUUID()
      let className = ''
      if (active === i) {
         className = 'active'
      } else if (active > i) {
         className = 'finished'
      } else if (active < i) {
         className = 'circle'
      }
      arr.push(<Step className={className} key={uuid}></Step>)
      steps.push(
         <p className={i <= active ? styles['active'] : styles['steps']} key={uuid}>
            {i + 1}
         </p>
      )
   }

   return (
      <>
         <Container className="lineContainer">
            <Line width={width}>{arr}</Line>
            <Container className="steps">{steps}</Container>
         </Container>
      </>
   )
}
