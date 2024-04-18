import { combineReducers } from "@reduxjs/toolkit";
import AuthSlice from "./Slices/AuthSlice";
import DashboardSlice from "./Slices/DashboardSlice";

const combinedReducers = combineReducers({
    auth: AuthSlice,
    dashboard : DashboardSlice
})

export const rootReducer = (state, action) => {
    return combinedReducers(state, action)
} 