/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { UsersApi } from '../../apis/UsersApi'

const initialState: UsersInitialState = {
  users: [],
  usersStatus: 'idle',
  usersError: '',
  user: {},
  userStatus: 'idle',
  userError: '',
}

// Generates pending, fulfilled and rejected action types

export const fetchUser = createAsyncThunk('users/fetchUser', async () => {
  try {
    const response = await UsersApi.get('0e936da242c68210')
    return response
  } catch (err: any) {
    if (!err.response) {
      throw err
    }

    return err
  }
})

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUser.pending, state => {
      state.userStatus = 'loading';
    })
    builder.addCase(
      fetchUser.fulfilled,
      (state, action: any) => {
        state.userStatus = 'succeeded';
        state.user = action.payload.data.results[0]
        state.userError = ''
      }
    )
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.userStatus = 'failed';
      state.user = []
      state.userError = action.error.message || 'Something went wrong'
    })
  }
})

export const selectAllUsers = (state: InitialState) => state.users.users;
export const getUsersStatus = (state: InitialState) => state.users.usersStatus;
export const getUsersError = (state: InitialState) => state.users.usersError;

export const getSelectedUser = (state: InitialState) => state.users.user;
export const getUserStatus = (state: any) => state.users.userStatus;
export const getUserError = (state: InitialState) => state.users.userError;


export default userSlice.reducer