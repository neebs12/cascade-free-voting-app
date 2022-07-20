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
  reducers: {
    addUsers (state, action) {
    }
  },
  extraReducers (builder) {
    builder
      .addCase(fetchUsersStatus.pending, (state, action) => {
        console.log('pending')
      })
      .addCase(fetchUsersStatus.fulfilled, (state, action) => {
        // console.log(action)
        state.userStatus = action.payload
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload
      })
      .addCase(postUser.fulfilled, (state, action) => {
        console.log('postUser fulfilled')
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
  const votedObj = state.users.userStatus
  const votedArr = votedObj?.voted
  return votedArr?.length === 0
}

export const selectUserStatus = (state) => {
  return state.users?.userStatus
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
  return response
})

// Export Reducer:

export default usersSlice.reducer
