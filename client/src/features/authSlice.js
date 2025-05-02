//const {createSlice} = require("@reduxjs/toolkit");
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:null,
    isAuthenticated:false
}

// userLoggedIn({name:"patel"})

const authSlice = createSlice({
    name:"authSlice",
    initialState,
    reducers:{
        userLoggedIn:(state,action) => {
            state.user = action.payload.user;
            state.isAuthenticated = true;
        },
        userLoggedOut:(state,action) => {
            state.user = null;
            state.isAuthenticated = false;
        }
    },
});

export const {userLoggedIn, userLoggedOut} = authSlice.actions;

//You need to export the actual reducer function from the slice
export default authSlice.reducer;