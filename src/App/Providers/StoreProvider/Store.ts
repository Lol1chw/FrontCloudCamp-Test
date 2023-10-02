import { configureStore } from '@reduxjs/toolkit'
import { stepperReducer } from 'Shared/ui/stepper'
import { formReducer } from 'Widgets/index'

export const store = configureStore({
   reducer: {
      stepper: stepperReducer,
      form: formReducer
   }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
