import axios from 'axios';

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