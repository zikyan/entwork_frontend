import { useEffect, useState } from 'react';

import { getWeeklyWinner } from '../../service/api';
import EachWinner from './EachWinner';

export default function WeeklyWinner(props) {
    const [allPosts, setAllPosts] = useState()
    useEffect(()=>{
        const fetchData = async () =>{
            const allPosts = await getWeeklyWinner()
            setAllPosts(allPosts)
        }
        fetchData()
    },[])
  return (

    <div>
        <div style={{marginBottom:'20px'}} className={`${props.darkMode?"admin-panel-heading-dark":"admin-panel-heading"}`}>
                <p>Top Popular Posts</p>
            </div>
        {
            allPosts?.map((posts)=>(
                posts?.map((post)=>(
                    <EachWinner key={post?._id} post={post} props={props} />
                ))
            ))
        }
    </div>
  )
      }