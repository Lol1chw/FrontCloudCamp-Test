import { useAppDispatch } from 'Shared/lib'
import { Container, Stepper, increment } from 'Shared/ui'
export function Create() {
   const dispatch = useAppDispatch()
   
   return (
      <Container className="create">
         <Container className="layoutCreate">
            <Stepper />
            <button onClick={() => dispatch(increment())}></button>
         </Container>
      </Container>
   )
}
