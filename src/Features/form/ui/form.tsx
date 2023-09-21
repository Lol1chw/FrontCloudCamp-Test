import { useSelector } from 'react-redux'
import { selectStepperActive } from 'Shared/ui/index'
import { Step1 } from './step1'
import { Step2 } from './step2'

// сделать switch case конструкцию для /create, if(active === 1) {и т.д.}

export function Form() {
   const active = useSelector(selectStepperActive)

   switch (active + 1) {
      case 1:
         return <Step1 />
      case 2:
         return <Step2/>
      case 3:
         return <div>step 3</div>
   }
}
