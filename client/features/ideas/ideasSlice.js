import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  fetchAllIdeas,
  fetchWinningIdeasAPI,
  postIdeasAPI,
  postVotesAPI
} from '../../apis/ideas'

// State and reducers:
export const ideasSlice = createSlice({
  name: 'ideas',
  initialState: [],
  reducers: {
    // ideas/addVote
    addVote (state, action) {
      const idea = state.find((idea) => idea.id === action.payload)
      if (idea.myvotes < 5) idea.myvotes++
    },
    // ideas/subtractVote
    subtractVote (state, action) {
      const idea = state.find((idea) => idea.id === action.payload)
      if (idea.myvotes > 0) idea.myvotes--
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
      .addCase(postVotes.fulfilled, (state, action) => {})
      .addCase(fetchIdeasMyVotes.fulfilled, (state, action) => {
        console.log('payload', action.payload)
        const ideasArr = action.payload.map((idea) => {
          // therefore at this location, state is an array [{id, ...}]
          // we need to find the existing state which matches the receveived idea
          const currId = idea.id
          let oldmyvotes = 0
          const oldIdeaFromCurrId = (state || []).find(s => s.id === currId)
          // note the non-cased variable
          if (oldIdeaFromCurrId) {
            oldmyvotes = oldIdeaFromCurrId.myvotes || 0
          }

          const value = +oldmyvotes || 0
          return {
            ...idea,
            myvotes: value
          }
        })
        return ideasArr
      })
  }
})

// Selectors:

export const selectAllIdeas = (state) => state.ideas

export const selectVoteCount = (state) => {
  const ideas = state.ideas
  const totalVotes = ideas.reduce(
    (runningTotal, idea) => idea.myvotes + runningTotal,
    0
  )
  return totalVotes
}

export const selectVoteReady = (state) => state.ideas.length > 0

export const selectVoteArr = (state) => {
  const ideasWithVotes = state.ideas.filter((idea) => idea.myvotes > 0)
  const currentUserVotes = ideasWithVotes?.map((idea) => {
    const preppedIdea = {
      userId: state.users.id,
      ideaId: idea.id,
      freq: idea.myvotes
    }
    delete preppedIdea.myvotes
    return preppedIdea
  })

  return currentUserVotes
}

// THUNKS:

export const fetchIdeas = createAsyncThunk('fetchIdeas', async () => {
  const response = await fetchAllIdeas()
  return response
})

export const fetchIdeasMyVotes = createAsyncThunk(
  'fetchIdeasMyVotes',
  async () => {
    const response = await fetchAllIdeas()
    return response
  }
)

// a4-37 async thunk to be placed, fetching winning ideas
export const fetchWinningIdeas = createAsyncThunk(
  'fetchWinningIdeas',
  async () => {
    const response = await fetchWinningIdeasAPI()
    return response // action object --> {payload: response}
  }
)

export const postVotes = createAsyncThunk('postVotes', async (data) => {
  console.log('post Votes Thunk data:', data)
  await postVotesAPI(data)
  return data
})

// a2-30 async thunk for placing ideas to the database
export const populateIdeas = createAsyncThunk('populateIdeas', async (data) => {
  await postIdeasAPI(data)
  // do another await here for fetching all ideas, and this is the one stored in the redux state
  const response = await fetchAllIdeas()
  return response
})
// Default export:

export const { addVote, subtractVote } = ideasSlice.actions

export default ideasSlice.reducer
