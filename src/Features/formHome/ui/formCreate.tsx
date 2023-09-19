import { useMaskito } from '@maskito/react'
import { InputMaster } from 'Entities/inputMaster'
import { FormEvent, useState } from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'Shared/ui'
import { ValidationError } from 'yup'
import { HomeFormValues, homeSchema, options, PLACEHOLDER, removePlaceholder } from '../model'

export function FormHome() {
   const [errors, setErrors] = useState({
      phone: null,
      email: null
   })
   const maskedInputRef = useMaskito({ options })
   const navigate = useNavigate()

   const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const target = e.target as typeof e.target & {
         phone: { value: string }
         email: { value: string }
      }

      const formData: HomeFormValues = {
         phone: target.phone.value,
         email: target.email.value
      }

      return new Promise((resolve, reject) => {
         homeSchema
            .validate(formData, { abortEarly: false })
            .then((value) => {
               setErrors({ phone: null, email: null })
               resolve(value)
               navigate('/create')
            })
            .catch((err: ValidationError) => {
               reject(err)
               const validationErrors: Record<string, string> = {}
               err.inner.forEach((error) => {
                  if (error.path !== undefined) {
                     validationErrors[error.path] = error.errors[0]
                  }
               })
               setErrors({ ...errors, ...validationErrors })
            })
      })
   }

   const onBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
      const value = e.currentTarget.value
      const cleanValue = removePlaceholder(value)

      e.currentTarget.value = cleanValue === '+7' ? '' : cleanValue
   }

   const onFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
      const value = e.currentTarget.value
      const initialValue = value || '+7'

      e.currentTarget.value = initialValue + PLACEHOLDER.slice(initialValue.length)
   }

   const phoneProps = {
      onFocus: onFocus,
      onBlur: onBlur,
      ref: maskedInputRef,
      className: 'filled',
      id: 'phoneInput',
      placeholder: '+7 999 999-99-99',
      defaultValue: '+7 999 999-99-99',
      name: 'phone',
      helperText: errors.phone,
      disabled: true
   }

   const emailProps = {
      className: 'filled',
      name: 'email',
      placeholder: 'tim.jennings@example.com',
      defaultValue: 'tim.jennings@example.com',
      helperText: errors.email,
      maxLength: 254,
      disabled: true
   }

   return (
      <form onSubmit={onSubmit}>
         <InputMaster {...phoneProps}>Номер телефона</InputMaster>
         <InputMaster {...emailProps}>Email</InputMaster>
         <Button className="primary" id="button-start" type="submit">
            Начать
         </Button>
      </form>
   )
}
