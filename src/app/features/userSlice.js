import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setUser: (state, action)=>{
            state.user = action.payload;

            // set user to localStorage

            localStorage.setItem("user", JSON.stringify(state.user))
        },
        logOut: (state, action)=>{
            state.user = [];

            localStorage.setItem("user", state.user)
        }
    }
})

export const {setUser, logOut} = userSlice.actions;

export default userSlice.reducer;