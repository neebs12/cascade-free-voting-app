import { configureStore } from '@reduxjs/toolkit'
import ideasReducer from './features/ideas/ideasSlice'

const store = configureStore({
  reducer: {
    ideas: ideasReducer
  }
})

export default store
