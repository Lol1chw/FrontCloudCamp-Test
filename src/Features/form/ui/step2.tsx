import { useDispatch } from 'react-redux'
import { Button, decrement } from 'Shared/ui'

export function Step2() {
    const dispatch = useDispatch()
   return (
      <>
         <Button className="back" onClick={() => dispatch(decrement())}>
            Назад
         </Button>
      </>
   )
}
