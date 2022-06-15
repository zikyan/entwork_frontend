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

export const getAllJob = async (params)=>{
    const response=await axios.get(`/api/job/getalljob/${params}`)
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

export const postConversation = async (conversationData)=>{
    const response=await axios.post('/api/chat/postconversation',conversationData)
    return response.data
}

export const getAllUser = async ()=>{
    const response=await axios.get('/api/users/getalluser')
    return response.data
}

export const getAllPostAdmin = async ()=>{
    const response=await axios.get('/api/post/getallpostadmin')
    return response.data
}

export const getAllComment = async ()=>{
    const response=await axios.get('/api/post/getallcomment')
    return response.data
}

export const deletePost = async (postId)=>{
    const response=await axios.delete(`/api/post/deletepost/${postId}`)
    return response.data
}

export const editPost = async (id, data)=>{
    const response=await axios.put(`/api/post/editpost/${id}`, data)
    return response.data
}
export const sharePost = async (postData)=>{
    const response = await axios.post('/api/post/sharepost/',postData)
    return response.data
}
export const getSharePost = async (id)=>{
    const response = await axios.get(`/api/post/getsharepost/${id}`)
    return response.data
}
export const savePost = async (postData)=>{
    const response = await axios.post('/api/post/savepost/',postData)
    return response.data
}
export const getSavePost = async (id)=>{
    const response = await axios.get(`/api/post/getsavepost/${id}`)
    return response.data
}
export const deleteSavedPost = async (postId)=>{
    const response=await axios.delete(`/api/post/deletesavedpost/${postId}`)
    return response.data
}
export const saveJob = async (jobData)=>{
    const response = await axios.post('/api/job/savejob/',jobData)
    return response.data
}
export const getSaveJob = async (id)=>{
    const response = await axios.get(`/api/job/getsavejob/${id}`)
    return response.data
}
export const deleteSavedJob = async (jobId)=>{
    const response=await axios.delete(`/api/job/deletesavedjob/${jobId}`)
    return response.data
}
export const deleteJob = async (jobId)=>{
    const response=await axios.delete(`/api/job/deletejob/${jobId}`)
    return response.data
}
export const getJobById = async (id)=>{
    const response=await axios.get(`/api/job/getjobbyid/${id}`)
    return response.data
}
export const editJob = async (id, data)=>{
    const response=await axios.put(`/api/job/editjob/${id}`, data)
    return response.data
}
export const deleteUser = async (id)=>{
    const response=await axios.delete(`/api/admin/deleteuser/${id}`)
    return response.data
}
export const deleteComment = async (id)=>{
    const response=await axios.delete(`/api/post/deletecomment/${id}`)
    return response.data
}
export const getAllJobAdmin = async (id)=>{
    const response=await axios.get(`/api/job/getalljobadmin`)
    return response.data
}
export const reportPost = async (id, data)=>{
    const response = await axios.put(`/api/post/reportpost/${id}`, data)
    return response.data
}
export const getReportPost = async (id)=>{
    const response = await axios.get(`/api/post/getreportpost/${id}`)
    return response.data
}
export const userWarning = async (id)=>{
    const response = await axios.put(`/api/user/userwarning/${id}`)
    return response.data
}
export const reportComment = async (id, data)=>{
    const response = await axios.put(`/api/post/reportcomment/${id}`, data)
    return response.data
}
export const reportJob = async (id, data)=>{
    const response = await axios.put(`/api/job/reportjob/${id}`, data)
    return response.data
}
export const getCommentByPostId = async (id)=>{
    const response=await axios.get(`/api/post/getcommentbypostid/${id}`)
    return response.data
}
export const addPostLike = async (id, userId)=>{
    const response = await axios.put(`/api/post/addpostlike/${id}`, userId)
    return response.data
}
export const getPostByCount = async (count)=>{
    const response=await axios.get(`/api/post/getpostbycount/${count}`)
    return response.data
}
export const getTopPost = async ()=>{
    const response=await axios.get('/api/post/gettoppost')
    return response.data
}
export const addJobLike = async (id, userId)=>{
    const response = await axios.put(`/api/job/addjoblike/${id}`, userId)
    return response.data
}
export const addCommentLike = async (id, userId)=>{
    const response = await axios.put(`/api/post/addcommentlike/${id}`, userId)
    return response.data
}
export const getTopComment = async ()=>{
    const response=await axios.get('/api/post/gettopcomment')
    return response.data
}