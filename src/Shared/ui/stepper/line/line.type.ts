import { HTMLAttributes, ReactNode } from 'react'

export type lineProps = HTMLAttributes<HTMLDivElement> & {
   children: ReactNode
   width: number
}

export type lineStylesProps = HTMLAttributes<HTMLDivElement> & {
   '--line-width': string
}
