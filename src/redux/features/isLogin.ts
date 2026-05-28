
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  isLogin:boolean
}

const initialState: CounterState = {
  isLogin:false
}

export const login = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setIsLogin: (state,action) => {
      state.isLogin=action.payload
    
  },
}})

// Action creators are generated for each case reducer function
export const { setIsLogin } = login.actions

export default login.reducer