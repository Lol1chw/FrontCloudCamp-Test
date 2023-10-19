import { FormStateValues } from 'Shared/lib'

type UseFetchProps = {
   updatedState: FormStateValues
   setLoading: React.Dispatch<React.SetStateAction<boolean>>
   setError: React.Dispatch<React.SetStateAction<boolean>>
}

export function useFetch({ updatedState, setLoading, setError }: UseFetchProps) {
   const response = fetch('https://1295417-ch24274.tw1.ru/forms', {
      headers: {
         'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(updatedState)
   })
      .then((value) => {
         setLoading(false)
         if (value.ok) {
            setError(false)
         } else {
            setError(true)
         }
      })
      .catch((error) => {
         setLoading(false)
         setError(true)
         console.error(error)
      })

   return response
}
