import { useSelector } from 'react-redux'
import { Container, Stepper } from 'Shared/ui'
import { Form } from 'Widgets/index'
export function Create() {
   const active = useSelector((state: AppState) => state.stepper.active)

   return (
      <Container className="create">
         <Container className={active === 2 ? 'layoutCreate small' : 'layoutCreate'}>
            <Stepper active={active} circles={3} />
            <Form />
         </Container>
      </Container>
   )
}
