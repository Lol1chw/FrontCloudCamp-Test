import styles from './list.module.css'
type ListProps = {
   arr: {
      id: number
      url: string
      name: string
   }[]
   icon: React.ReactNode
}

export function List({ arr, icon }: ListProps) {
   const listItems = arr.map((element) => (
      <li className={styles.styledLi} key={element.id}>
         {icon}
         <a href={element.url}>{element.name}</a>
      </li>
   ))

   return <ul className={styles.styledUl}>{listItems}</ul>
}
