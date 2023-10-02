type CheckboxGroupArr = {
   id: 'field-checkbox-group-option-1' | 'field-checkbox-group-option-2' | 'field-checkbox-group-option-3'
   key: 1 | 2 | 3
   label: number | string
   register: 'CheckBoxGroup.0' | 'CheckBoxGroup.1' | 'CheckBoxGroup.2'
}

export const checkBoxArr: CheckboxGroupArr[] = [
   {
      id: 'field-checkbox-group-option-1',
      key: 1,
      label: 1,
      register: 'CheckBoxGroup.0'
   },
   {
      id: 'field-checkbox-group-option-2',
      key: 2,
      label: 2,
      register: 'CheckBoxGroup.1'
   },
   {
      id: 'field-checkbox-group-option-3',
      key: 3,
      label: 3,
      register: 'CheckBoxGroup.2'
   }
]
