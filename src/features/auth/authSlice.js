import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { register, logout, login } from "./authService";


const user = JSON.parse(localStorage.getItem('user'));

const initialState={
    user: user ? user : null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:''
}

export const registerUser=createAsyncThunk('auth/register',async (user, thunkAPI)=>{
    try {
        return await register(user)
    } catch (error) {
        const message=(error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const loginUser=createAsyncThunk('auth/login',async (user, thunkAPI)=>{
    try {
        return await login(user)
    } catch (error) {
        const message=(error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const logoutUser=createAsyncThunk('auth/logout',async()=>{
  await logout()  
})

export const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        reset:(state)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=false
            state.message=''
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(registerUser.pending, (state)=>{
            state.isLoading=true
        })
        builder.addCase(registerUser.fulfilled, (state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.user=action.payload
        })
        builder.addCase(registerUser.rejected, (state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            state.user=null
        })


        builder.addCase(loginUser.pending, (state)=>{
            state.isLoading=true
        })
        builder.addCase(loginUser.fulfilled, (state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.user=action.payload
        })
        builder.addCase(loginUser.rejected, (state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            state.user=null
        })


        builder.addCase(logoutUser.fulfilled, (state)=>{
            state.user=null
        })
    },
})
export const {reset}=authSlice.actions
export default authSlice.reducer