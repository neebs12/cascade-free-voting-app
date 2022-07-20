import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  fetchAllUsersStatus,
  fetchAllUsers,
  postOneUser
} from '../../apis/users'

// State and reducers:
export const usersSlice = createSlice({
  name: 'users',
  initialState: {}, // <--- note! KEEP as {}, JA
  reducers: {},
  extraReducers (builder) {
    builder
      .addCase(fetchUsersStatus.pending, (state, action) => {})
      .addCase(fetchUsersStatus.fulfilled, (state, action) => {
        // console.log(action)
        /*
        Shape: input <----- (from action.payload)
        {
          voted: [...],
          notVoted: [...]
        }
        Shape: output ---->
          {
            users : {
              id: n (local id)
              userStatus: {
                voted: [...],
                notVoted: [...]
              }
            }
          }
        */
        state.userStatus = action.payload
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload
      })
      .addCase(postUser.fulfilled, (state, action) => {
        console.log('postUser fulfilled')

        state.name = action.payload.name
        state.id = action.payload.id
      })
      .addCase(postUser.rejected, (state, action) => {
        console.log('postUser rejected: ', action)
      })
  }
})

// Selectors:
// Selector below is probably broken and should possibly be state.users.users
export const selectAllUsers = (state) => {
  // debugger
  if (state.users.users) {
    return state.users.users
  } else {
    return {} // <--- empty object if this does not exists yet
  }
}

export const selectResultsReady = (state) => {
  if (!state.users.userStatus) {
    // ie: state is not prepared to the proper shape yet
    return false
  }

  // here .userStatus exists.
  // This will only exists and therefore .voted and .notVoted will also exist!
  // therefore shape is @ proper shape
  const votedArr = state.users.userStatus.voted
  const notVotedArr = state.users.userStatus.notVoted
  const isVotedEmpty = votedArr.length === 0
  const isNotVotedEmpty = notVotedArr.length === 0

  if (isNotVotedEmpty && isVotedEmpty) {
    // no users exists
    return false
  } else if (!isNotVotedEmpty) {
    // there are still users that need to vote
    return false
  } else {
    // here, users exists and the non-voted array is empty
    // therefore true
    return true
  }
}

export const selectUserStatus = (state) => {
  return state.users?.userStatus
}

export const selectIsUserPath = (state) => {
  console.log('selector', state.users.id)
  return Boolean(state.users.id)
}

// Thunk

export const fetchUsersStatus = createAsyncThunk(
  'fetchUsersStatus',
  async () => {
    const response = await fetchAllUsersStatus()
    return response
  }
)

export const fetchUsers = createAsyncThunk('fetchUsers', async () => {
  // this one gets all the relevant users
  const response = await fetchAllUsers()
  // debugger
  return response
})

export const postUser = createAsyncThunk('postUser', async (name) => {
  const response = await postOneUser(name)
  // addition of a name
  response.name = name
  return response
})

// Export Reducer:

export default usersSlice.reducer
