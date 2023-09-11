import styled from './line.module.css'
import { lineProps, lineStylesProps } from './line.type'

export function Line({ children, width, ...otherProps }: lineProps) {
   const props = { ...otherProps }
   const lineStyles: lineStylesProps = {
      '--line-width': width + '%'
   }

   return (
      <div className={styled.line} style={lineStyles} {...props}>
         {children}
      </div>
   )
}
