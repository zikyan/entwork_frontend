import { useState, useEffect } from 'react';
import EachTopPost from './EachTopPost';
import { getAllPostAdmin, getPostByCount, getTopPost } from '../../service/api';

export default function TopPost(props) {
    const [posts, setPosts] = useState()
    const [first, setFirst] = useState([])
    useEffect(()=>{
        const fetchData = async ()=>{
            // const allPosts = await getAllPostAdmin()
            // setPost(allPosts)
            // let max = post?.reduce((voteCount, singlePost) => voteCount = voteCount > singlePost?.count ? voteCount : singlePost?.count, 0);
            // const firstPost = await getPostByCount(max)
            // setFirst(firstPost)
            // var first = post?.filter(function(voteCount, singlePost)
            // {
            //     return ((voteCount, singlePost) => voteCount = voteCount > singlePost?.count ? voteCount : singlePost?.count, 0)
            // });
            const allPosts =  await getTopPost()
            setPosts(allPosts)
        }
        fetchData()
    },[])
    
    console.log(posts)
    // console.log(newArray)
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
