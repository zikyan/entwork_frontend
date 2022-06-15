import { useState, useEffect } from 'react';
import './topcomment.css';
import { getTopComment } from '../../service/api';
import EachTopComment from './EachTopComment';


export default function TopComment(props) {
    const [comments, setComments] = useState()
    useEffect(()=>{
        const fetchData = async ()=>{
            const allComments =  await getTopComment()
            setComments(allComments)
        }
        fetchData()
    },[])
  return (
    <div>
        {
            comments?.map((comment)=>(
                <EachTopComment key={comment?._id} comment={comment} props={props} />
            ))
        }
    </div>
  )
}
