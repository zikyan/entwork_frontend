import { useState, useEffect } from 'react';
import EachTopPost from './EachTopPost';
import { getTopPost } from '../../service/api';

export default function TopPost(props) {
    const [posts, setPosts] = useState()
    useEffect(()=>{
        const fetchData = async ()=>{
            const allPosts =  await getTopPost()
            setPosts(allPosts)
        }
        fetchData()
    },[])
  return (
    <div>
        {
            posts?.map((post)=>(
                <EachTopPost props={props} post={post} />
            ))
        }
    </div>
  )
}
