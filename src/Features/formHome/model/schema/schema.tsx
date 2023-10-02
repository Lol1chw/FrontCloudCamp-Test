import * as yup from 'yup'

export const homeSchema = yup.object({
   phone: yup
      .string()
      .min(18, 'Phone must be at least 18 characters')
      .max(18, 'Phone must be at most 18 characters')
      .required('Phone is required'),
   email: yup
      .string()
      .matches(/^[\w.]+@([\w-]+\.)+[\w-]{2,4}$/, {
         message: 'Email must match the following: tim.jennings@example.com',
         excludeEmptyString: true
      })
      .nonNullable()
      .email('Email format is not valid')
      .required('Email is required')
      .max(254)
})

export type HomeFormValues = yup.InferType<typeof homeSchema>
