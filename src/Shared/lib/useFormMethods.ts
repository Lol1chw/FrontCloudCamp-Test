import { yupResolver } from '@hookform/resolvers/yup'
import { FieldValues, useForm, DefaultValues, UseFormProps } from 'react-hook-form'
import * as yup from 'yup'

// type from RHF
type AsyncDefaultValues<TFieldValues> = (payload?: unknown) => Promise<TFieldValues>

type EditedUseFormProps = Omit<UseFormProps, 'defaultValues' | 'mode' | 'resolver'>

type useFormMethodsProps<T> = EditedUseFormProps & {
   values?: DefaultValues<T> | AsyncDefaultValues<T>
   schema: yup.AnyObjectSchema
}

export function useFormMethods<T extends FieldValues>({
   values,
   schema,
   ...otherProps
}: useFormMethodsProps<T>) {
   return useForm<T>({
      ...otherProps,
      defaultValues: values,
      mode: 'onBlur',
      resolver: yupResolver(schema)
   })
}
