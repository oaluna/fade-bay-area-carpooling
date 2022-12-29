import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    username: null,
    name: null,
    email: null,
}

const userSlice = createSlice({

    name: "user",
    initialState,
    reducers: {
        setUserName: (state, action) => {
            state.username = action.payload
        },
        setName: (state, action) => {
            state.name = action.payload
        },
        setEmail: (state, action) => {
            state.email = action.payload
        }
    }
})

export const { setUser, setUserName, setEmail } = userSlice.actions;

export const selectUser = state => state.user.username;
export const selectName = state => state.user.name;
export const selectEmail = state => state.user.email;

export default userSlice.reducer;
