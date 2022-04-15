import axios from 'axios';

export const createPost = async (postData)=>{
    const response = await axios.post('/api/post/create/',postData)
    return response.data
}

export const createJob = async (jobData)=>{
    const response = await axios.post('/api/job/create/',jobData)
    return response.data
}

export const timelinePosts = async (user)=>{
    const response=await axios.get(`/api/post/timeline/${user}`)
    return response.data
}

export const getAllPost = async (params)=>{
    const response=await axios.get(`/api/post/getallpost/${params}`)
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

export const getAllJob = async ()=>{
    const response=await axios.get(`/api/job/getalljob/`)
    return response.data
}

export const followUser = async (personId, currentUserId)=>{
    const response=await axios.put(`/api/users/follow/${personId}`,currentUserId)
    return response.data
}

export const unfollowUser = async (personId, currentUserId)=>{
    const response=await axios.put(`/api/users/unfollow/${personId}`, currentUserId)
    return response.data
}

export const editProfile = async (username, data)=>{
    const response=await axios.put(`/api/users/editprofile/${username}`, data)
    return response.data
}

export const postComment = async (commentData)=>{
    const response=await axios.post(`/api/post/postcomment/`, commentData)
    return response.data
}

export const getComment = async (id)=>{
    const response=await axios.get(`/api/post/getcomment/${id}`)
    return response.data
}

export const getCommentByUsername = async (username)=>{
    const response=await axios.get(`/api/post/getcommentbyusername/${username}`)
    return response.data
}

export const getJobByUser = async (id)=>{
    const response=await axios.get(`/api/job/getjobbyuser/${id}`)
    return response.data
}

export const getConversation = async (id)=>{
    const response=await axios.get(`/api/chat/getconversation/${id}`)
    return response.data
}

export const getMessage = async (id)=>{
    const response=await axios.get(`/api/chat/getmessage/${id}`)
    return response.data
}

export const postMessage = async (messageData)=>{
    const response=await axios.post('/api/chat/postmessage',messageData)
    return response.data
}