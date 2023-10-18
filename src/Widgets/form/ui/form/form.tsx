import { AdvantagesList } from 'Features/advantagesList/index'
import { CheckboxGroup } from 'Features/checkboxGroup/index'
import { ControlledSelect } from 'Features/controlledSelect'
import { InputGroup } from 'Features/InputGroup/index'
import { Modal } from 'Features/modal'
import { RadioGroup } from 'Features/radioGroup/index'
import { TextAreaAbout } from 'Features/textareaAbout'
import { useState } from 'react'
import { FormProvider, SubmitHandler } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CancelSvg, SuccessSvg } from 'Shared/assets/icons'
import { Step3Schema, Step3Values, useAppDispatch } from 'Shared/lib'
import type { Step1Values, Step2Values } from 'Shared/lib/index'
import { Step1Schema, Step2Schema, FormData } from 'Shared/lib/index'
import { useFormMethods } from 'Shared/lib/index'
import { Button, Container } from 'Shared/ui/index'
import { decrement, increment, pushData, reset, useFetch } from '../../model/index'
import styles from './form.module.css'

export function Form() {
   const [step, setStep] = useState(1)
   const [isModalActive, setModalActive] = useState(false)
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState(false)

   const methodsFirstStep = useFormMethods<Step1Values>({
      schema: Step1Schema
   })

   const methodsSecondStep = useFormMethods<Step2Values>({
      schema: Step2Schema,
      values: { Advantages: [{ advantage: '' }] }
   })

   const methodsThirdStep = useFormMethods<Step3Values>({
      schema: Step3Schema
   })

   const state = useSelector((state: AppState) => state.form)
   const navigate = useNavigate()
   const dispatch = useAppDispatch()

   const onSubmit: SubmitHandler<FormData> = async (data) => {
      const modifiedData: FormData = JSON.parse(JSON.stringify(data))
      for (const [key, value] of Object.entries(modifiedData)) {
         dispatch(pushData({ fieldName: key, value: value }))
      }

      if (step < 3) {
         dispatch(increment())
         setStep(step + 1)
      }

      if (step === 3) {
         const updatedState = { ...state, ...modifiedData }
         setLoading(true)
         useFetch({ updatedState, setLoading, setError })
         handleModalOpen()
      }
   }

   const onBack = () => {
      if (step === 1 || isModalActive) {
         navigate(-1)
         dispatch(reset())
         if (isModalActive) dispatch(decrement())
      }
      if (step > 1) dispatch(decrement()) && setStep(step - 1)
   }

   const handleModalOpen = () => {
      setModalActive(true)
   }

   const handleModalClose = () => {
      setModalActive(false)
   }

   switch (step) {
      case 1:
         return (
            <FormProvider {...methodsFirstStep}>
               <form className={styles.form} onSubmit={methodsFirstStep.handleSubmit(onSubmit)}>
                  <InputGroup />
                  <ControlledSelect />
                  <Container className="buttonGroup">
                     <Button className="back" id="button-back" type="button" onClick={onBack}>
                        Back
                     </Button>
                     <Button className="primary" id="button-next" type="submit">
                        Next
                     </Button>
                  </Container>
               </form>
            </FormProvider>
         )
      case 2:
         return (
            <FormProvider {...methodsSecondStep}>
               <form className={styles.form} onSubmit={methodsSecondStep.handleSubmit(onSubmit)}>
                  <AdvantagesList />
                  <CheckboxGroup />
                  <RadioGroup />
                  <Container className="buttonGroup">
                     <Button className="back" id="button-back" type="button" onClick={onBack}>
                        Back
                     </Button>
                     <Button className="primary" id="button-next" type="submit">
                        Next
                     </Button>
                  </Container>
               </form>
            </FormProvider>
         )
      case 3:
         return (
            <FormProvider {...methodsThirdStep}>
               <form className={styles.form} onSubmit={methodsThirdStep.handleSubmit(onSubmit)}>
                  <TextAreaAbout>About</TextAreaAbout>
                  <Container className="buttonGroup">
                     <Button className="back" type="button" onClick={onBack}>
                        Back
                     </Button>
                     <Button className="primary" type="submit">
                        Send
                     </Button>
                     <>
                        {isModalActive && (
                           <Modal
                              title="The form has been submitted"
                              loading={loading}
                              error={error}
                              onClose={handleModalClose}>
                              <div className={error ? `${styles.circle} ${styles.error}` : styles.circle}>
                                 {error ? <CancelSvg /> : <SuccessSvg />}
                              </div>
                              {error ? null : (
                                 <Button id="button-to-main" className="primary" onClick={onBack}>
                                    Home
                                 </Button>
                              )}
                           </Modal>
                        )}
                     </>
                  </Container>
               </form>
            </FormProvider>
         )
   }
}
