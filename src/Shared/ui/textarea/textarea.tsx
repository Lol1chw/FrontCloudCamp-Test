import { TextareaHTMLAttributes, forwardRef } from 'react'
import styles from './textarea.module.css'

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
   className: string
   id: string
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(function TextArea(
   { className, id, ...otherProps },
   ref
) {
   const classNames = className
      .split(' ')
      .map((name) => styles[name])
      .join(' ')

   return <textarea className={classNames} id={id} ref={ref} {...otherProps}></textarea>
})
