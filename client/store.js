import { configureStore } from '@reduxjs/toolkit'
import ideasReducer from './features/ideas/ideasSlice'
import sessionReducer from './features/session/sessionSlice'
import usersReducer from './features/users/usersSlice'

const store = configureStore({
  reducer: {
    ideas: ideasReducer,
    session: sessionReducer,
    users: usersReducer
  }
})

export default store
