import styles from './list.module.css'
export function List({ arr }: { arr: { id: number; urlImg: string; url: string; name: string }[] }) {
   const listItems = arr.map((element) => (
      <li className={styles.styledLi} key={element.id}>
         <img src={element.urlImg} alt={element.name} />
         <a href={element.url}>{element.name}</a>
      </li>
   ))

   return <ul className={styles.styledUl}>{listItems}</ul>
}
