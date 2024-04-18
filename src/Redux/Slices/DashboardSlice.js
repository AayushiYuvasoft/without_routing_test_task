import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiClient from "../api/apiClient";
import { getTableListRecords } from '../api/apiRouterHelper';

const initialState = {
  isDashboardStatus : false,
  isDashboardData : "",
  isDashboardError : false, 
}

export const getTableLists = createAsyncThunk('dashboard/getTableLists', async(body,{ rejectWithValue, fulfillWithValue, dispatch }) => {
    try{
        const response = await apiClient({method: 'GET', endPoint: getTableListRecords()})
        return fulfillWithValue(response?.data)
    }
    catch(error){
        if(error?.response?.data){
            return rejectWithValue(error?.response?.data)
        }
        else {
            return rejectWithValue(error)
        }
    } 
  })
  

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    resetDashboardState: (state) => {
      state.isDashboardStatus = initialState.isDashboardStatus;
    },
  },
  extraReducers : (builder) => {
    builder.addCase(getTableLists.pending, (state) => { 
       state.isDashboardStatus = "loading"
    })
    .addCase(getTableLists.fulfilled, (state , action) => {
        state.isDashboardStatus = "succeeded"
        state.isDashboardData = action.payload  
    })
    .addCase(getTableLists.rejected, (state,action) => {
        state.isDashboardStatus = "failed"
        state.isDashboardError =  action.payload 
    })   
}  
})

export const { resetDashboardState } = dashboardSlice.actions;

export default dashboardSlice.reducer