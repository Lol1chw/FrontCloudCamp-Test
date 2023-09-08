import type { InputProps } from './input.type'

export function Input({ className, placeholder, children, ...otherProps }: InputProps) {
   const props = { ...otherProps }

   if (children && children !== '') {
      return (
         <>
            <input className={className} placeholder={placeholder} {...props}></input>
            <p>{children}</p>
         </>
      )
   } else {
      return <input className={className} placeholder={placeholder} {...props}></input>
   }
}
