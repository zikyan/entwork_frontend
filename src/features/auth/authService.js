import axios from 'axios';

// const API_URL='/api/users/'

export const register=async(userData)=>{
    const response = await axios.post('/api/users/register/',userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

export const login=async(userData)=>{
    const response = await axios.post('/api/users/login/',userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

export const logout=()=>{
    localStorage.removeItem('user')
}

