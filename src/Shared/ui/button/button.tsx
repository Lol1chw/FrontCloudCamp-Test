import { ReactNode } from 'react'

export function Button({ className, children, id}: { className: string; children: ReactNode, id?: string }) {
   return <button className={className} id={id}>{children}</button>
}
