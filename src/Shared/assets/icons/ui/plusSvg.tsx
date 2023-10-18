export function PlusSvg({ fieldsLenght }: { fieldsLenght: number }) {
   return (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
         <path
            fill={fieldsLenght === 5 ? '#0000000a' : '#5558FA'}
            d="M11 5a1 1 0 1 0-2 0v4H5a1 1 0 1 0 0 2h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2h-4V5Z"
         />
      </svg>
   )
}
