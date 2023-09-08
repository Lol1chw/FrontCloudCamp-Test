// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { RootState } from 'App/Providers/StoreProvider/Store'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Line } from './line/line'
import styled from './stepper.module.css'
import { Step } from './steps/steps'
export function Stepper() {
   const steps = useSelector((state: RootState) => state.stepper.value)
   const arr = []
   for (let i = 0; i < steps; i++) {
      arr.push(<Step>{''}</Step>)
   }
   return (
      <>
         <div className={styled.container}>
            <Line>{arr}</Line>
         </div>
      </>
   )
}
