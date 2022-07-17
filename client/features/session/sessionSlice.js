import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchCurrentSession } from '../../apis/session'

// State and reducers:
export const sessionSlice = createSlice({
  name: 'session',
  initialState: {},
  reducers: {
    addSession (state, action) {
      console.log('addSession action called')
    }
    // session/addVote
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
      .addCase(fetchSession.pending, (state, action) => {
      })
      .addCase(fetchSession.fulfilled, (state, action) => {
        return action.payload[0]
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
export const selectSession = state => state.session
export const selectNumVotes = state => state.session.numVotes
// Actions:


// Thunk

export const fetchSession = createAsyncThunk('fetchSession', async () => {
  const response = await fetchCurrentSession()
  return response
})

// Export Reducer:

export default sessionSlice.reducer
