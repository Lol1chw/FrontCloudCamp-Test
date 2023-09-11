import { InputMaster } from 'Features/inputMaster'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Divider } from 'Shared/ui'
import { UserInfo } from 'Widgets/index'

export function Home() {
   const navigate = useNavigate()

   function handleClick() {
      navigate('/create')
   }

   return (
      <Container className="container">
         <Container className="layout">
            <form>
               <UserInfo />
               <Divider />
               <InputMaster placeholder="+7 999 999-99-99" disabled>
                  Номер телефона
               </InputMaster>
               <InputMaster placeholder="tim.jennings@example.com" disabled>
                  Email
               </InputMaster>
               <Button className="primary" id="button-start" type="submit" onClick={handleClick}>
                  Начать
               </Button>
            </form>
         </Container>
      </Container>
   )
}
