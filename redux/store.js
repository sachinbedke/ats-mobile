import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "./userApi";
import userSlice from "./userSlice";


const reduxStore = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        user: userSlice
    },
    middleware: defaulMiddleware => [...defaulMiddleware(), userApi.middleware]
})

export default reduxStore