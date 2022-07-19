import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchAllIdeas, fetchWinningIdeasAPI, postIdeasAPI } from '../../apis/ideas'

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
      .addCase(fetchIdeas.pending, (state, action) => {})
      .addCase(fetchIdeas.fulfilled, (state, action) => {
        return action.payload
      })
      .addCase(fetchWinningIdeas.pending, (state, action) => {
        // pending information
      })
      .addCase(fetchWinningIdeas.fulfilled, (state, action) => {
        // this is where we add to the redux store
        return action.payload // <--- overwriting the state!
      })
      .addCase(populateIdeas.pending, (state, action) => {})
      .addCase(populateIdeas.fulfilled, (state, action) => {
        return action.payload // <--- overwriting state!
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

// a2-30 async thunk for placing ideas to the database
export const populateIdeas = createAsyncThunk('populateIdeas', async (data) => {
  debugger
  await postIdeasAPI(data)
  // do another await here for fetching all ideas, and this is the one stored in the redux state
  const response = await fetchAllIdeas()
  return response
})

// Default export:

export const { addVote, subtractVote } = ideasSlice.actions

export default ideasSlice.reducer
