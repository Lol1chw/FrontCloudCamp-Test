import { Form } from 'Features/form'
import { Container, Stepper} from 'Shared/ui'
export function Create() {
   
   return (
      <Container className="create">
         <Container className="layoutCreate">
            <Stepper />
            <Form/>
         </Container>
      </Container>
   )
}
