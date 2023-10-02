import { Container, Stepper } from 'Shared/ui'
import { Form } from 'Widgets/index'
export function Create() {
   return (
      <Container className="create">
         <Container className="layoutCreate">
            <Stepper />
            <Form />
         </Container>
      </Container>
   )
}
