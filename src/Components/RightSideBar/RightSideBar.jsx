import { useState, useEffect } from 'react';
import './rightsidebar.css';
import WorkIcon from '@mui/icons-material/Work';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

import { Link } from 'react-router-dom';
import { getThreeJob } from '../../service/api';
import RightRecentJobs from './RightRecentJobs';


export default function RightSideBar({darkMode}) {
  const [jobs, setJobs] = useState()
  useEffect(()=>{
    const fetchData = async ()=>{
      const allJobs = await getThreeJob()
      setJobs(allJobs)
    }
    fetchData()
  },[])
  return (
    <div className='rightsidebar-parent'>
      <div className={` rightsidebar-upper ${darkMode?"changeModeside2":""}`}>
        <p className={`rightsidebar-text ${darkMode?"changeModeside2":""}`}>EntWork Workplace</p>
        <p className='rightsidebar-upper-text'>Click the below button to find work</p>
        <div className="rightsidebar-find-post-button">
          <Link style={{textDecoration:'none'}} to='/work'><button className='rightsidebar-work-button'><WorkIcon style={{fontSize:'18px'}} className='rightsidebar-work-button-icon' />Find Job</button></Link>
          <Link style={{textDecoration:'none'}} to='/addjob'><button style={{marginLeft:'10px'}} className='rightsidebar-work-button'><WorkOutlineIcon style={{fontSize:'18px'}} className='rightsidebar-work-button-icon' />Post Job</button></Link>
        </div>
      </div>
      <div className={`rightsidebar-upper2 ${darkMode?"changeModeside2":""}`}>
      <p className={`rightsidebar-work-text ${darkMode?"changeModeside2":""}`}>Trending Work Tags</p>
          <ul className={`${darkMode?"rightsidebar-ul2-dark":"rightsidebar-ul2"}`}>
          <Link to='/work/?tag=mern' className='leftsidebar-ul-link'><li>#mern</li></Link>
          <Link to='/work/?tag=ror' className='leftsidebar-ul-link'><li>#ror</li></Link>
          <Link to='/work/?tag=python' className='leftsidebar-ul-link'><li>#python</li></Link>
          <Link to='/work/?tag=amazon' className='leftsidebar-ul-link'><li>#amazon</li></Link>
          <Link to='/work/?tag=flask' className='leftsidebar-ul-link'><li>#flask</li></Link>
          <Link to='/work/?tag=swift' className='leftsidebar-ul-link'><li>#swift</li></Link>
          <Link to='/work/?tag=janascript' className='leftsidebar-ul-link'><li>#javascript</li></Link>
          <Link to='/work/?tag=blockchain' className='leftsidebar-ul-link'><li>#blockchain</li></Link>
          <Link to='/work/?tag=next' className='leftsidebar-ul-link'><li>#next</li></Link>
          <Link to='/work/?tag=android' className='leftsidebar-ul-link'><li>#android</li></Link>
          <Link to='/work/?tag=java' className='leftsidebar-ul-link'><li>#java</li></Link>
          <Link to='/work/?tag=nest' className='leftsidebar-ul-link'><li>#nest</li></Link>
          <Link to='/work/?tag=unity' className='leftsidebar-ul-link'><li>#unity</li></Link>
          <Link to='/work/?tag=express' className='leftsidebar-ul-link'><li>#express</li></Link>
              </ul>
      </div>
      <p className={`rightsidebar-work-text ${darkMode?"changeModeside2":""}`}>Recent Jobs</p>
        {
          jobs?.map((job)=>(
            <RightRecentJobs darkMode={darkMode} job={job} />
          ))
          
        }
        
      
    </div>
  )
}