import { ReactNode } from 'react'
import { useFormContext } from 'react-hook-form'
import { Step3Values } from 'Shared/lib'
import { Container, TextArea } from 'Shared/ui'
import styles from './textAreaAbout.module.css'
import { Watched } from './watched'

export function TextAreaAbout({ children }: { children: ReactNode }) {
   const {
      register,
      control,
      formState: { errors }
   } = useFormContext<Step3Values>()

   return (
      <label className={styles.label}>
         {children}
         <TextArea
            className={errors.About ? 'textarea invalid' : 'textarea'}
            placeholder="Enter about yourself"
            id="field-about"
            {...register('About')}
         />
         <Container className="aboutGroup">
            {errors.About ? <p className={styles.error}>{errors.About.message}</p> : <p></p>}
            <Watched control={control}></Watched>
         </Container>
      </label>
   )
}
