import { configureStore } from '@reduxjs/toolkit'
import { apliccantsSlice } from './slices/apliccants.slices'

export const store = configureStore({
reducer:{
  apliccants: apliccantsSlice.reducer
}
})

export type RootState = ReturnType<typeof store.getState>
