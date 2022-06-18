import React from 'react'
import RecommendedExtra from './RecommendedExtra'
import { useState, useEffect } from 'react';
import { getRecommendedPostOne } from '../../service/api';
export default function Recommended({darkMode}) {
    const [posts, setPosts] = useState()
    useEffect(()=>{
        const fetchData = async ()=>{
            const posts = await getRecommendedPostOne()
            setPosts(posts)
        }
        fetchData()
    },[])
    
  return (
      <>
    <div className={`${darkMode?"admin-panel-heading-dark":"admin-panel-heading"}`}>
        <p>Recommended Posts</p>
    </div>
    {
        posts?.map((post)=>(
            <RecommendedExtra darkMode={darkMode} post={post} />
        ))
    }
    
    
    </>
  )
}
