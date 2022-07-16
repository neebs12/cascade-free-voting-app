import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchAllIdeas } from '../../apis/ideas'

// {
//   id: 1,
//   title: '7 Minute Abs',
//   description: "7's the key number here. Think about it."
// },

// State and reducers:
export const ideasSlice = createSlice({
  name: 'ideas',
  initialState: [],
  reducers: {
    add (state, action) {
      console.log('add')
      return [...state,
        { hello: 'hello' }
      ]
    }
  },
  extraReducers (builder) {
    builder
      .addCase(fetchIdeas.pending, (state, action) => {
        console.log('pending')
      })
      .addCase(fetchIdeas.fulfilled, (state, action) => {
        console.log('fulfilled')
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

export const selectAllIdeas = (state) => state.ideas

export const getStatus = (state) => state.movies.status

// Exports:

export const { addIdea } = ideasSlice.actions

// thunk

export const fetchIdeas = createAsyncThunk('fetchIdeas', async () => {
  await setTimeout(3000)
  const response = await fetchAllIdeas()
  console.log('response', response)
  return response
})

// action creator

// function saveMovies (arr) {
//   return {
//     type: 'SAVE_ALL_MOVIES',
//     payload: arr
//   }
// }

// what is this thing? Are these both thunks?
// Am I calling a thunk with a thunk?
// export function getAllMovies() {
//   return (dispatch) => {
//     console.log("THUNK")
//     fetchIdeas()
//       .then(moviesArr => {
//         console.log("thunk then", moviesArr)
//         dispatch(receiveMovies(moviesArr))
//       }).catch(err => console.log(err))
//   }
// }

// Default export:

export const { add } = ideasSlice.actions

export default ideasSlice.reducer

// ways of writing the same thing:

// src/features/todos/todosSlice.js
// export function fetchTodos() {
//   return async function fetchTodosThunk(dispatch, getState) {
//     const response = await client.get('/fakeApi/todos')
//     dispatch(todosLoaded(response.todos))
//   }
// }

// // Same thing as the above example!
// export const fetchTodos = () => async dispatch => {
//   const response = await client.get('/fakeApi/todos')
//   dispatch(todosLoaded(response.todos))
// }

// Is a thunk a kind of action creator? But instead of creating an action, it creates a function that returns an action plus additional payload in some cases?

// createAsycThunk takes a string and a callback that returns either a promise or a rejected promise with an error.
