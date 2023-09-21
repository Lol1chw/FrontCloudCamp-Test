import { yupResolver } from '@hookform/resolvers/yup'
import { InputMaster } from 'Entities/inputMaster'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button, Container, Select, increment } from 'Shared/ui'
import type { Step1Values } from '../model'
import { Step1Schema, pushData, selectForm, Sex } from '../model'
import styles from './form.module.css'

export function Step1() {
   const {
      register,
      handleSubmit,
      control,
      formState: { errors }
   } = useForm<Step1Values>({
      resolver: yupResolver(Step1Schema),
      mode: 'onBlur'
   })

   const onSubmit: SubmitHandler<Step1Values> = (data) => {
      for (const [key, value] of Object.entries(data)) {
         dispatch(pushData({ fieldName: key, value: value }))
      }
      dispatch(increment())
   }

   const dispatch = useDispatch()
   const navigate = useNavigate()
   const state = useSelector(selectForm)

   return (
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
         <InputMaster
            {...register('Nickname')}
            helperText={errors.Nickname?.message}
            id="field-nickname"
            placeholder="Enter nickname"
            defaultValue={state.Nickname}>
            Nickname
         </InputMaster>
         <InputMaster
            {...register('Name')}
            helperText={errors.Name?.message}
            id="field-name"
            placeholder="Enter name"
            defaultValue={state.Name}>
            Name
         </InputMaster>
         <InputMaster
            {...register('Surname')}
            helperText={errors.Surname?.message}
            id="field-surname"
            placeholder="Enter surname"
            defaultValue={state.Surname}>
            Surname
         </InputMaster>
         <Controller
            name="Sex"
            control={control}
            defaultValue={state.Sex}
            render={({ field }) => (
               <Select
                  helperText={errors.Sex?.message}
                  label="sex"
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
   )
}
