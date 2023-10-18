import { createSlice } from '@reduxjs/toolkit'

export interface StepperState {
   active: number
}

const initialState: StepperState = {
   active: 0
}

export const stepperSlice = createSlice({
   name: 'stepper',
   initialState,
   reducers: {
      increment: (state) => {
         state.active++
      },
      decrement: (state) => {
         state.active--
      }
   }
})

export const { increment, decrement } = stepperSlice.actions
export const stepperReducer = stepperSlice.reducer
