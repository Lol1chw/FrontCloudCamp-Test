import { FormHome } from 'Features/formHome'
import { Container, Divider } from 'Shared/ui'
import { UserInfo } from 'Widgets/index'

export function Home() {
   return (
      <Container className="container">
         <Container className="layout">
            <UserInfo />
            <Divider />
            <FormHome />
         </Container>
      </Container>
   )
}
