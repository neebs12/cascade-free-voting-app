import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchAllIdeas } from '../../apis/ideas'

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

export const selectAllIdeas = (state) => state.ideas

export const selectVoteCount = (state) => {
  const ideas = state.ideas
  const totalVotes = ideas.reduce((runningTotal, idea) => idea.votes + runningTotal, 0)
  return totalVotes
}

export const selectVoteReady = (state) => state.ideas.length > 0

// thunk

export const fetchIdeas = createAsyncThunk('fetchIdeas', async () => {
  // await new Promise((resolve, reject) => {
  //   setTimeout(() => { resolve() }, 3000)
  // })
  const response = await fetchAllIdeas()
  return response
})

// Default export:

export const { addVote, subtractVote } = ideasSlice.actions

export default ideasSlice.reducer
