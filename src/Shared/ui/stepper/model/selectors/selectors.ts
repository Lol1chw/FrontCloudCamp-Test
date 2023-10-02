import { createSelector } from '@reduxjs/toolkit'

export const selectStepper = (state: AppState) => state.stepper
export const selectStepperCircle = (state: AppState) => state.stepper.circle
export const selectStepperActive = (state: AppState) => state.stepper.active

export const selectCalcWidth = createSelector(
   [selectStepperCircle, selectStepperActive],
   (circle, active) => {
      let width = 0
      width = (100 / (circle - 1)) * active
      return width
   }
)
