import { configureStore } from '@reduxjs/toolkit'
import { formReducer } from 'Features/form'
import { stepperReducer } from 'Shared/ui/stepper'

export const store = configureStore({
   reducer: {
      stepper: stepperReducer,
      form: formReducer
   }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
