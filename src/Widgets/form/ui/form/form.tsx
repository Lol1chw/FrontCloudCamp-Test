import { yupResolver } from '@hookform/resolvers/yup'
import { AdvantagesList } from 'Features/advantagesList/index'
import { CheckboxGroup } from 'Features/checkboxGroup/index'
import { InputGroup } from 'Features/InputGroup/index'
import { RadioGroup } from 'Features/radioGroup/index'
import { TextAreaAbout } from 'Features/textareaAbout'
import { useState } from 'react'
import { Controller, FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Step3Schema, Step3Values, useAppDispatch } from 'Shared/lib'
import type { Step1Values, Step2Values } from 'Shared/lib/index'
import { Step1Schema, Step2Schema, Sex } from 'Shared/lib/index'
import { Button, Container, Select } from 'Shared/ui/index'
import { decrement, increment, pushData } from '../../model/index'
import styles from './form.module.css'

export function Form() {
   const [step, setStep] = useState(3)

   const methodsFirstStep = useForm<Step1Values>({
      mode: 'onBlur',
      resolver: yupResolver(Step1Schema)
   })

   const methods = useForm<Step2Values>({
      defaultValues: {
         Advantages: [{ advantage: '' }]
      },
      mode: 'onBlur',
      resolver: yupResolver(Step2Schema)
   })

   const methodsThirdStep = useForm<Step3Values>({
      mode: 'onBlur',
      resolver: yupResolver(Step3Schema)
   })

   const FirstStepErr = methodsFirstStep.formState.errors
   const SubmitFirst = methodsFirstStep.handleSubmit

   const state = useSelector((state: AppState) => state.form)

   const navigate = useNavigate()
   const dispatch = useAppDispatch()

   const onSubmit: SubmitHandler<Step1Values> = (data) => {
      for (const [key, value] of Object.entries(data)) {
         dispatch(pushData({ fieldName: key, value: value }))
      }
      setStep(2)
      dispatch(increment())
   }

   const onSubmitSecond = (data: Step2Values) => {
      console.log(data)
      setStep(3)
      dispatch(increment())
   }

   const onSubmitThird = (data: Step3Values) => {
      console.log(data)
   }

   const onBack = () => {
      setStep(step - 1)
      dispatch(decrement())
   }

   switch (step) {
      case 1:
         return (
            <FormProvider {...methodsFirstStep}>
               <form className={styles.form} onSubmit={SubmitFirst(onSubmit)}>
                  <InputGroup />
                  <Controller
                     name="Sex"
                     control={methodsFirstStep.control}
                     defaultValue={state.Sex}
                     render={({ field }) => (
                        <Select
                           helperText={FirstStepErr.Sex?.message}
                           label="Sex"
                           id="field-sex"
                           className="standard"
                           {...field}>
                           <option className="disabled" value={'none'}>
                              {Sex.none}
                           </option>
                           <option id="field-sex-option-man">{Sex.man}</option>
                           <option id="field-sex-option-woman">{Sex.woman}</option>
                        </Select>
                     )}
                  />
                  <Container className="buttonGroup">
                     <Button className="back" id="button-back" onClick={() => navigate(-1)}>
                        Назад
                     </Button>
                     <Button className="primary" id="button-next" type="submit">
                        Далее
                     </Button>
                  </Container>
               </form>
            </FormProvider>
         )
      case 2:
         return (
            <FormProvider {...methods}>
               <form className={styles.form} onSubmit={methods.handleSubmit(onSubmitSecond)}>
                  <AdvantagesList />
                  <CheckboxGroup />
                  <RadioGroup />
                  <Container className="buttonGroup">
                     <Button className="back" id="button-back" onClick={onBack}>
                        Back
                     </Button>
                     <Button className="primary" id="button-next">
                        Далее
                     </Button>
                  </Container>
               </form>
            </FormProvider>
         )
      case 3:
         return (
            <FormProvider {...methodsThirdStep}>
               <form className={styles.form} onSubmit={methodsThirdStep.handleSubmit(onSubmitThird)}>
                  <TextAreaAbout>About</TextAreaAbout>
                  <Container className="buttonGroup">
                     <Button className="back" onClick={onBack}>
                        Назад
                     </Button>
                     <Button className="primary">Отправить</Button>
                  </Container>
               </form>
            </FormProvider>
         )
   }
}
