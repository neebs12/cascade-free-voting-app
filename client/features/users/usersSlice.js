import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchUsersStatus } from '../../apis/users'

// State and reducers:
export const usersSlice = createSlice({
  name: 'users',
  initialState: [],
  reducers: {
    addUsers (state, action) {
      console.log('addUsers action called')
    }
  },
  extraReducers (builder) {
    builder
      .addCase(fetchUsersStatusThunk.pending, (state, action) => {
      })
      .addCase(fetchUsersStatusThunk.fulfilled, (state, action) => {
        console.log(action)
        return action.payload
      })
  }
})

// Selectors:
export const selectUsers = (state) => state.users

// Thunk

export const fetchUsersStatusThunk = createAsyncThunk('fetchUsersStatus', async () => {
  const response = await fetchUsersStatus()
  return response
})

// Export Reducer:

export default usersSlice.reducer
