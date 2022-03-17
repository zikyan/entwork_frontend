import axios from "axios";

export const addPost = async (postData, token)=>{
    const config={
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    const response=await axios.post('/api/post/create/',postData,config)

    return response.data
}

// export const getAllPost = async ()=>{
//     const response=await axios.get('/api/post/getallpost/')
//     return response.data
// }