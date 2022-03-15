import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addPost, getAllPost, getUserById } from "./postService";

const initialState={
    posts:[],
    isLoading:false,
    isError:false,
    isSuccess:false,
    message:''
}


export const addPostVar=createAsyncThunk('post/create',async (postData,thunkAPI)=>{
    try {
        const token=thunkAPI.getState().auth.user.token
        return await addPost(postData,token)
    } catch (error) {
        const message=(error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getAllPostVar=createAsyncThunk('post/getall',async (thunkAPI)=>{
    try {
        return await getAllPost()
    } catch (error) {
        const message=(error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getUserByIdVar=createAsyncThunk('post/getallpostbyid',async (thunkAPI)=>{
    try {
        return await getUserById()
    } catch (error) {
        const message=(error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

const postSlice=createSlice({
    name:'post',
    initialState,
    reducers:{
        reset:(state)=>initialState
    },
    extraReducers:(builder)=>{
        builder.addCase(addPostVar.pending, (state)=>{
            state.isLoading=true
        })
        builder.addCase(addPostVar.fulfilled,(state, action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.posts.push(action.payload)
        })
        builder.addCase(addPostVar.rejected,(state, action)=>{
            state.isLoading=false
            state.isError=true
            state.message(action.payload)
        })


        builder.addCase(getAllPostVar.pending, (state)=>{
            state.isLoading=true
        })
        builder.addCase(getAllPostVar.fulfilled,(state, action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.posts=action.payload
        })
        builder.addCase(getAllPostVar.rejected,(state, action)=>{
            state.isLoading=false
            state.isError=true
            state.message(action.payload)
        })
    }
})


export const { reset }=postSlice.actions
export default postSlice.reducer