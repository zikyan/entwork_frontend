import { useState, useEffect } from "react"
import { getRecommendedJob } from "../../service/api"
import RecommendedJobsExtra from "./RecommendedJobsExtra"

export default function RecommendedJobs({darkMode}) {
    const [jobs, setJobs] = useState()
    useEffect(()=>{
        const fetchData = async ()=>{
            const allJobs = await getRecommendedJob()
                setJobs(allJobs)
        }
        fetchData()
    },[])
  return (
    <div>
        <div className={`${darkMode?"admin-panel-heading-dark":"admin-panel-heading"}`}>
            <p>Jobs With Less Reach</p>
        </div>
        {
            jobs?.map((job)=>(
                <RecommendedJobsExtra job={job} darkMode={darkMode}/>
            ))
        }
    </div>
  )
}
