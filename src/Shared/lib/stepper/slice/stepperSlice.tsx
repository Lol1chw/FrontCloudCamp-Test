import { createSlice } from '@reduxjs/toolkit'

export interface StepperState {
   value: number
}

const initialState: StepperState = {
   value: 3
}

export const stepperSlice = createSlice({
   name: 'stepper',
   initialState,
   reducers: {
      increment: (state) => {
         state.value++
      }
   }
})

export const { increment } = stepperSlice.actions

export const stepperReducer = stepperSlice.reducer
