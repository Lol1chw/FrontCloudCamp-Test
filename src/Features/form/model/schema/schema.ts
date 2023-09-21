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
         .matches(/^[a-zA-Z0-9 ]*$/, { message: 'Nickname can only contain letters and numbers' })
         .max(30, 'Nickname must be at most 50 characters'),
      Name: yup
         .string()
         .required()
         .matches(/^(?=.*[^ ])[a-zA-Zа-яА-Я][a-zA-Zа-яА-Я ]*$/, {
            message: 'Name can only contain letters',
            excludeEmptyString: true
         })
         .max(50, 'Name must be at most 50 characters'),
      Surname: yup
         .string()
         .required()
         .matches(/^(?=.*[^ ])[a-zA-Zа-яА-Я][a-zA-Zа-яА-Я ]*$/, {
            message: 'Surname can only contain letters',
            excludeEmptyString: true
         })
         .max(50),
      Sex: yup.string().required().oneOf([Sex.man, Sex.woman])
   })
   .required()

export const Step2Schema = yup.object().shape({
   Advantages: yup.array().of(yup.string()).required(),
   CheckBoxGroup: yup.number().required().oneOf([1, 2, 3]),
   RadioGroup: yup.number().required().oneOf([1, 2, 3])
})

export const Step3Schema = yup.object().shape({
   About: yup.string().required().max(200)
})

export type Step1Values = yup.InferType<typeof Step1Schema>
export type Step2Values = yup.InferType<typeof Step2Schema>
export type Step3Values = yup.InferType<typeof Step3Schema>

export type FormStateValues = Step1Values & Step2Values & Step3Values