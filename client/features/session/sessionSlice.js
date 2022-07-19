import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchCurrentSession, postCurrentSession } from '../../apis/session'

// State and reducers:
export const sessionSlice = createSlice({
  name: 'session',
  initialState: {},
  reducers: {
    newSession (state, action) {
      return action.payload
    }
  },
  extraReducers (builder) {
    builder
      .addCase(fetchSession.pending, (state, action) => {})
      .addCase(fetchSession.fulfilled, (state, action) => {
        return action.payload[0]
      })
      .addCase(populateSession.pending, (state, action) => {})
      .addCase(populateSession.fulfilled, (state, action) => {
        return action.payload // <--- this poopulates/replaces the state
      })
  }
})

// Selectors:
export const selectSession = (state) => state.session
export const selectNumVotes = (state) => state.session.numVotes

// THUNKS

export const fetchSession = createAsyncThunk('fetchSession', async () => {
  const response = await fetchCurrentSession()
  return response
})

export const populateSession = createAsyncThunk(
  'populateSession',
  async (data) => {
    // need an api sister function
    await postCurrentSession(data)
    return data
  }
)

// export const newSession = createAsyncThunk('newSession', async () => {
//   const response = await makeNewSession()
//   return response
// })

// Export Reducer:

export default sessionSlice.reducer

export const { newSession } = sessionSlice.actions
