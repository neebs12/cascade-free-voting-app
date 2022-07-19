import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchCurrentSession, postCurrentSession, makeNewSession } from '../../apis/session'

// State and reducers:
export const sessionSlice = createSlice({
  name: 'session',
  initialState: {},
  reducers: {
    addSession(state, action) {
      console.log('addSession action called')
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSession.pending, (state, action) => {})
      .addCase(fetchSession.fulfilled, (state, action) => {
        return action.payload[0]
      })
      .addCase(populateSession.pending, (state, action) => {})
      .addCase(populateSession.fulfilled, (state, action) => {
        return action.payload // <--- this poopulates/replaces the state
      })
      .addCase(newSession.fulfilled, (state, action) => {
        console.log('new session called')
        return action.payload
      })
  },
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

export const newSession = createAsyncThunk('newSession', async () => {
  const response = await makeNewSession()
  return response
})

// Export Reducer:

export default sessionSlice.reducer
