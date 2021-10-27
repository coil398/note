import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface SideBarState {
  open: boolean
}

const initialState: SideBarState = {
  open: false
}

export const sideBarSlice = createSlice({
  name: 'sideBar',
  initialState,
  reducers: {
    toggleSideBar: (state, action: PayloadAction<boolean>) => {
      console.log('toggleSideBar')
      state.open = action.payload
    }
  }
})

export const {toggleSideBar} = sideBarSlice.actions

export default sideBarSlice.reducer
