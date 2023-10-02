import * as yup from 'yup'

export enum Sex {
   none = 'Не выбрано',
   man = 'man',
   woman = 'woman'
}

export const Step1Schema = yup
   .object()
   .shape({
      Nickname: yup
         .string()
         .required()
         .matches(/^[a-zA-Z0-9 ]*$/, {
            message: 'Nickname must contain contain letters and numbers only'
         })
         .max(30, 'Nickname must be at most 50 characters'),
      Name: yup
         .string()
         .required()
         .matches(/^(?=.*[^ ])[a-zA-Zа-яА-Я][a-zA-Zа-яА-Я ]*$/, {
            message: 'Name must contain letters only',
            excludeEmptyString: true
         })
         .max(50, 'Name must be at most 50 characters'),
      Surname: yup
         .string()
         .required()
         .matches(/^(?=.*[^ ])[a-zA-Zа-яА-Я][a-zA-Zа-яА-Я ]*$/, {
            message: 'Surname must contain letters only',
            excludeEmptyString: true
         })
         .max(50),
      Sex: yup.string().required().oneOf([Sex.man, Sex.woman])
   })
   .required()

export const Step2Schema = yup.object().shape({
   Advantages: yup
      .array()
      .of(
         yup.object().shape({
            advantage: yup
               .string()
               .required('Advantages is required')
               .matches(/^(?=.*[^ ])[a-zA-Zа-яА-Я][a-zA-Zа-яА-Я ]*$/, {
                  message: 'Advantage must contain letters only',
                  excludeEmptyString: true
               })
         })
      )
      .required()
      .min(1, 'At least 1 field must be filled in'),
   CheckBoxGroup: yup.tuple([yup.boolean(), yup.boolean(), yup.boolean()]),
   RadioGroup: yup.number().required('Radio group is required').oneOf([1, 2, 3])
})

export const Step3Schema = yup.object().shape({
   About: yup.string().required().max(200)
})

export type Step1Values = yup.InferType<typeof Step1Schema>
export type Step2Values = yup.InferType<typeof Step2Schema>
export type Step3Values = yup.InferType<typeof Step3Schema>

export type FormStateValues = Step1Values & Step2Values & Step3Values
