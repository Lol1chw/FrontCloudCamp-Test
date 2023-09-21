import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { FormStateValues } from '../schema/schema'
import { Sex } from '../schema/schema'

type PushDataT = {
   fieldName: string
   value: string | number | string[] | number[] | boolean
}

const initialState: FormStateValues = {
   Nickname: '',
   Name: '',
   Surname: '',
   Sex: Sex.none,
   Advantages: [''],
   CheckBoxGroup: 1,
   RadioGroup: 1,
   About: ''
}

export const formSlice = createSlice({
   name: 'form',
   initialState,
   reducers: {
      pushData: (state, action: PayloadAction<PushDataT>) => {
         const { fieldName, value } = action.payload
         return { ...state, [fieldName]: value }
      }
   }
})

export const { pushData } = formSlice.actions
export const formReducer = formSlice.reducer
