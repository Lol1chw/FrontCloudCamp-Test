export function useData() {
   type ArrRadioGroup = {
      id: 'field-radio-group-option-1' | 'field-radio-group-option-2' | 'field-radio-group-option-3'
      key: 1 | 2 | 3
      label: number | string
      value: 1 | 2 | 3
   }

   const radioArr: ArrRadioGroup[] = [
      { id: 'field-radio-group-option-1', key: 1, label: 1, value: 1 },
      { id: 'field-radio-group-option-2', key: 2, label: 2, value: 2 },
      { id: 'field-radio-group-option-3', key: 3, label: 3, value: 3 }
   ]

   return { radioArr }
}
