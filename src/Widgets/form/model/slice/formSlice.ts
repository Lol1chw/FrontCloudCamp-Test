import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { FormStateValues } from 'Shared/lib/index'
import { Sex } from 'Shared/lib/index'

type PushDataT = {
   fieldName: string
   value: string
}

const initialState: FormStateValues = {
   Nickname: '',
   Name: '',
   Surname: '',
   Sex: Sex.none,
   Advantages: [{ advantage: '' }],
   CheckBoxGroup: [false, false, false],
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
