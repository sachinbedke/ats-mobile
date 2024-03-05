import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "./userApi";

const userSlice = createSlice({
    name: "userSlice",
    initialState: {},
    reducers: {

    },
    extraReducers: builder => builder
        .addMatcher(userApi.endpoints.login.matchFulfilled, (state, { payload }) => {
            state.user = payload
        })


})

export const { invalidate } = userSlice.actions
export default userSlice.reducer