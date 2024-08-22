import { createSlice } from "@reduxjs/toolkit";
// to initialized the file as slice we use a method createSlice() 
export const countreSlice = createSlice({
// name has no importanc 
name:'counterApp',
// initial state creation 
initialState:{
    value:0
},
reducers:{
    // logic to update the value 
    // acion are created insied tge reducers 
    increment:(state,data)=>{
        if (!data.payload) {
            state.value =state.value+1
        }else{
            state.value=state.value+ data.payload
        }
    },
    decrement:(state,data)=>{
        state.value-=data.payload//statte avlue =state.value-1
        if (!data.payload) {
            state.value =state.value-1
        }else{
            state.value=state.value - data.payload
        }
    },
    reset:(state)=>{
        state.value=0;
    }
}
})
export const {increment,decrement,reset}=countreSlice.actions;
export default countreSlice.reducer;