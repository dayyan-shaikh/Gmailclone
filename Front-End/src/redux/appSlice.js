import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    open: false,
    user:null,
    emails:[],
    SelectedEmail:null,
    SearchText:"",
  },
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setAuthUser:(state,action) => {
      state.user = action.payload;
    },
    setEmails:(state,action) => {
      state.emails = action.payload;
    },
    setSelectedEmails:(state,action) => {
      state.SelectedEmail = action.payload;
    }, 
    setSearchText:(state,action) => {
      state.SearchText = action.payload;
    }
  },
});

export const { setOpen,setAuthUser,setEmails,setSelectedEmails,setSearchText } = appSlice.actions;
export default appSlice.reducer;
