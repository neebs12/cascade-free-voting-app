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
  },
  extraReducers (builder) {
    builder
      .addCase(fetchSession.pending, (state, action) => {
      })
      .addCase(fetchSession.fulfilled, (state, action) => {
        return action.payload[0]
      })
  }
})

// Selectors:
export const selectSession = state => state.session
export const selectNumVotes = state => state.session.numVotes

// THUNKS

export const fetchSession = createAsyncThunk('fetchSession', async () => {
  const response = await fetchCurrentSession()
  return response
})



// Export Reducer:

export default sessionSlice.reducer
