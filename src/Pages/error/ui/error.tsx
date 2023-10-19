import { useNavigate } from 'react-router-dom'
import monster from 'Shared/assets/icons/monster404.svg'
import { useDocumentTitle } from 'Shared/lib'
import { Button, Container } from 'Shared/ui'
import styles from './error.module.css'

export function Error() {
   const navigate = useNavigate()
   useDocumentTitle('Page not found')
   
   return (
      <div className={styles.layout}>
         <Container className="error">
            <img src={monster} className={styles.monster} alt="monster illustration error 404" />
            <p>THE PAGE YOU REQUESTED COULD NOT FOUND</p>
            <Button className="primary" onClick={() => navigate('/')}>
               Back to main page
            </Button>
         </Container>
         <footer className={styles.footer}>
            <a className={styles.link} href="https://storyset.com/internet">
               Internet illustrations by Storyset
            </a>
         </footer>
      </div>
   )
}
