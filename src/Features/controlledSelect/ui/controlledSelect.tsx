import { Controller, useFormContext } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { Sex, Step1Values } from 'Shared/lib'
import { Select } from 'Shared/ui'

export function ControlledSelect() {
   const {
      formState: { errors },
      control
   } = useFormContext<Step1Values>()

   const state = useSelector((state: AppState) => state.form)

   return (
      <Controller
         name="Sex"
         control={control}
         defaultValue={state.Sex}
         render={({ field }) => (
            <Select
               helperText={errors.Sex?.message}
               label="Sex"
               id="field-sex"
               className="standard"
               {...field}>
               <option className="disabled" value={'none'}>
                  {Sex.none}
               </option>
               <option id="field-sex-option-man">{Sex.man}</option>
               <option id="field-sex-option-woman">{Sex.woman}</option>
            </Select>
         )}
      />
   )
}
