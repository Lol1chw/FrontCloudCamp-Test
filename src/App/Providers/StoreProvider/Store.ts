import { configureStore } from '@reduxjs/toolkit'
import { stepperReducer } from 'Widgets/form/index'
import { formReducer } from 'Widgets/index'

export const store = configureStore({
   reducer: {
      stepper: stepperReducer,
      form: formReducer
   }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
