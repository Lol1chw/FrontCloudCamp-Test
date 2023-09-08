import { ReactNode } from 'react'
import styled from './line.module.css'

export function Line({ children }: { children: ReactNode }) {
   return <div className={styled.line}>{children}</div>
}
