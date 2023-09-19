import type { AppDispatch } from 'App/Providers/StoreProvider/Store'
import { useDispatch } from 'react-redux'

export const useAppDispatch: () => AppDispatch = useDispatch
