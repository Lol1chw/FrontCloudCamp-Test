import React, { useCallback, useEffect, useRef, useState } from 'react'
import type { MouseEventHandler } from 'react'
import { CloseSvg } from 'Shared/assets/icons'
import { createContainer } from 'Shared/lib/index'
import { Button, Portal } from 'Shared/ui/index'
import Styles from './modal.module.css'

const MODAL_CONTAINER_ID = 'modal-container-id'

type Props = {
   title: string
   onClose?: () => void
   children: React.ReactNode | React.ReactNode[]
   error: boolean
   loading: boolean
}

export function Modal(props: Props) {
   const { title, onClose, children, error, loading } = props

   const rootRef = useRef<HTMLDivElement>(null)
   const [isMounted, setMounted] = useState(false)

   useEffect(() => {
      createContainer({ id: MODAL_CONTAINER_ID })
      setMounted(true)
   }, [])

   useEffect(() => {
      const handleWrapperClick = (event: MouseEvent) => {
         const { target } = event

         if (target instanceof Node && rootRef.current === target) {
            onClose?.()
         }
      }
      const handleEscapePress = (event: KeyboardEvent) => {
         if (event.key === 'Escape') {
            onClose?.()
         }
      }
      if (error) {
         window.addEventListener('click', handleWrapperClick)
         window.addEventListener('keydown', handleEscapePress)
      }

      return () => {
         window.removeEventListener('click', handleWrapperClick)
         window.removeEventListener('keydown', handleEscapePress)
      }
   }, [onClose, error])

   const handleClose: MouseEventHandler<HTMLDivElement | HTMLButtonElement> = useCallback(() => {
      onClose?.()
   }, [onClose])

   if (isMounted && loading) {
      return (
         <Portal id={MODAL_CONTAINER_ID}>
            <div className={Styles.wrap} ref={rootRef} data-testid="wrap">
               <div className={Styles.content}>Loading...</div>
            </div>
         </Portal>
      )
   }

   if (isMounted && error) {
      return (
         <Portal id={MODAL_CONTAINER_ID}>
            <div className={Styles.wrap} ref={rootRef} data-testid="wrap">
               <div className={Styles.content}>
                  <div className={Styles.group}>
                     <p className={`${Styles.title} ${Styles.error}`}>Error</p>
                     <Button className={'closeIcon'} onClick={handleClose}>
                        <CloseSvg />
                     </Button>
                  </div>
                  {children}
                  <Button className="primary close" onClick={handleClose}>
                     Закрыть
                  </Button>
               </div>
            </div>
         </Portal>
      )
   }

   if (isMounted) {
      return (
         <Portal id={MODAL_CONTAINER_ID}>
            <div className={Styles.wrap} ref={rootRef} data-testid="wrap">
               <div className={Styles.content}>
                  <p className={Styles.title}>{title}</p>
                  {children}
               </div>
            </div>
         </Portal>
      )
   }
}
