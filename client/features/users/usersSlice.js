import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchCurrentUsers } from '../../apis/users'

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
      .addCase(fetchUsers.pending, (state, action) => {
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        console.log(action)
        return action.payload
      })
  }
})

// Selectors:
export const selectUsers = (state) => state.users

// Thunk

export const fetchUsers = createAsyncThunk('fetchUsers', async () => {
  const response = await fetchCurrentUsers()
  return response
})

// Export Reducer:

export default usersSlice.reducer
