import { useFormContext } from 'react-hook-form'
import { useSelector } from 'react-redux'
import type { Step1Values } from 'Shared/lib/index'

export function useData() {
   const {
      formState: { errors }
   } = useFormContext<Step1Values>()

   const state = useSelector((state: AppState) => state.form)

   type Register = 'Nickname' | 'Name' | 'Surname'
   type IdKey = 1 | 2 | 3

   type ArrT = {
      register: Register
      id: string
      label: string
      helperText: string | undefined
      defaultValue: string
      key: IdKey
      placeholder: string
   }

   const arr: ArrT[] = [
      {
         register: 'Nickname',
         id: 'field-nickname',
         label: 'Nickname',
         helperText: errors.Nickname?.message,
         defaultValue: state.Nickname,
         key: 1,
         placeholder: 'Enter nickname'
      },
      {
         register: 'Name',
         id: 'field-name',
         label: 'Name',
         helperText: errors.Name?.message,
         defaultValue: state.Name,
         key: 2,
         placeholder: 'Enter name'
      },
      {
         register: 'Surname',
         id: 'field-surname',
         label: 'Surname',
         helperText: errors.Surname?.message,
         defaultValue: state.Surname,
         key: 3,
         placeholder: 'Enter surname'
      }
   ]

   return { arr }
}
