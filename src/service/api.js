import axios from 'axios';

export const createPost = async (postData)=>{
    const response = await axios.post('/api/post/create/',postData)
    return response.data
}

export const timelinePosts = async (user)=>{
    const response=await axios.get(`/api/post/timeline/${user}`)
    return response.data
}

export const getAllPost = async ()=>{
    const response=await axios.get('/api/post/getallpost/')
    return response.data
}

export const getUserById = async (id)=>{
    const response=await axios.get(`/api/post/getuserbyid/${id}`)
    return response.data
}

export const getUserByUsername = async (username)=>{
    const response=await axios.get(`/api/users/getuserbyusername/${username}`)
    return response.data
}

export const getPostById = async (id)=>{
    const response=await axios.get(`/api/post/getpostbyid/${id}`)
    return response.data
}

export const getPostByIdOne = async (id)=>{
    const response=await axios.get(`/api/post/getpostbyidone/${id}`)
    return response.data
}