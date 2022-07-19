import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchAllIdeas, fetchWinningIdeasAPI } from '../../apis/ideas'

// State and reducers:
export const ideasSlice = createSlice({
  name: 'ideas',
  initialState: [],
  reducers: {
    // ideas/addVote
    addVote (state, action) {
      const idea = state.find((idea) => idea.id === action.payload)
      idea.votes++
    },
    // ideas/subtractVote
    subtractVote (state, action) {
      const idea = state.find((idea) => idea.id === action.payload)
      if (idea.votes > 0) idea.votes--
    }
  },
  extraReducers (builder) {
    builder
      .addCase(fetchIdeas.pending, (state, action) => {
        // this is for the pending side of the async fetchIdeas thunk
      })
      .addCase(fetchIdeas.fulfilled, (state, action) => {
        return action.payload
      })
      .addCase(fetchWinningIdeas.pending, (state, action) => {
        // pending information
      })
      .addCase(fetchWinningIdeas.fulfilled, (state, action) => {
        // this is where we add to the redux store
        return action.payload // <--- overwriting the state
      })
  }
})

// Selectors:

export const selectAllIdeas = (state) => state.ideas

export const selectVoteCount = (state) => {
  const ideas = state.ideas
  const totalVotes = ideas.reduce((runningTotal, idea) => idea.votes + runningTotal, 0)
  return totalVotes
}

export const selectVoteReady = (state) => state.ideas.length > 0

// THUNKS:

export const fetchIdeas = createAsyncThunk('fetchIdeas', async () => {
  const response = await fetchAllIdeas()
  return response
})

// a4-37 async thunk to be placed, fetching winning ideas
export const fetchWinningIdeas = createAsyncThunk('fetchWinningIdeas', async () => {
  const response = await fetchWinningIdeasAPI()
  return response // action object --> {payload: response}
})
// Default export:
export const { addVote, subtractVote } = ideasSlice.actions

export default ideasSlice.reducer
