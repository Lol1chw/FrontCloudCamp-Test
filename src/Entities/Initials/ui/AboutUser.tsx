import { List } from 'Shared/ui'
import { social } from '../model'
import styled from './AboutUser.module.css'

export function AboutUser({ Name }: { Name: string }) {
   return (
      <div className={styled.AboutUserFrame}>
         <h3>{Name}</h3>
         <List arr={social} />
      </div>
   )
}
