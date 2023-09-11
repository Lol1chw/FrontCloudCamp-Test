import { createSelector } from '@reduxjs/toolkit'
// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { RootState } from 'App/Providers/StoreProvider/Store'

export const selectStepper = (state: RootState) => state.stepper
export const selectStepperCircle = (state: RootState) => state.stepper.circle
export const selectStepperActive = (state: RootState) => state.stepper.active

export const selectCalcWidth = createSelector(
   [selectStepperCircle, selectStepperActive],
   (circle, active) => {
      let width = 0
      width = (100 / (circle - 1)) * active
      return width
   }
)
