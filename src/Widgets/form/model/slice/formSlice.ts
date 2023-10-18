import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import type { FormStateValues } from 'Shared/lib/index'
import { Sex } from 'Shared/lib/index'

type PushDataT<K extends keyof FormStateValues> = {
   fieldName: string
   value: FormStateValues[K]
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
      pushData: <K extends keyof FormStateValues>(
         state: FormStateValues,
         action: PayloadAction<PushDataT<K>>
      ) => {
         const { fieldName, value } = action.payload
         return { ...state, [fieldName]: value }
      },
      reset: () => initialState
   }
})

export const { pushData, reset } = formSlice.actions
export const formReducer = formSlice.reducer
