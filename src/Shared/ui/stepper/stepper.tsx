import { ReactNode } from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Container } from '../index'
import { Line } from './line/line'
import { selectCalcWidth, selectStepperActive, selectStepperCircle } from './model'
import styles from './stepper.module.css'
import { Step } from './steps/steps'
export function Stepper() {
   const circles = useSelector(selectStepperCircle)
   const active = useSelector(selectStepperActive)
   const width = useSelector(selectCalcWidth)

   const arr: ReactNode[] = []
   const steps: ReactNode[] = []
   for (let i = 0; i < circles; i++) {
      const uuid = self.crypto.randomUUID()
      arr.push(<Step className={i <= active ? 'active' : 'circle'} key={uuid}></Step>)
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
