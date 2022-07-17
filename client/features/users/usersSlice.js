import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchCurrentUsers } from '../../apis/users'

// State and reducers:
export const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    addUsers (state, action) {
      console.log('addUsers action called')
    }
    // users/addVote
    // addVote (state, action) {
    //   const idea = state.find((idea) => idea.id === action.payload)
    //   idea.votes++
    // },
    // subtractVote (state, action) {
    //   const idea = state.find((idea) => idea.id === action.payload)
    //   if (idea.votes > 0) idea.votes--
    // }
  },
  extraReducers (builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        console.log(action)
        return action.payload
      })

    // (fetchMovies.fulfilled, (state, action) => {
    //   console.log('succeeded')
    //   // state.status = 'succeeded'
    //   // Add any fetched posts to the array
    //   console.log('action', action)
    //   console.log('state', state)

    //   state = state.concat(action.payload)
    // })
    // .addCase(fetchMovies.rejected, (state, action) => {
    // state.status = 'failed'
    // state.error = action.error.message
    // })
  }
})

// Selectors:
export const selectUsers = (state) => state.users
// Actions:

// export const { } = usersSlice.actions

// Thunk

export const fetchUsers = createAsyncThunk('fetchUsers', async () => {
  const response = await fetchCurrentUsers()
  return response
})

// Export Reducer:

export default usersSlice.reducer
