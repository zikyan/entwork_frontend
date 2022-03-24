import { useState, useEffect } from 'react';
import './work.css';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EachJob from '../../Components/EachJob/EachJob';
import { getAllJob } from '../../service/api';
import { Link } from 'react-router-dom';

export default function Work({darkMode}) {
    const [jobs, setJobs] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await getAllJob()
            setJobs(res)
        }
        fetchData()
    },[])


  return (
    <div className="work-parent">
        <div className={`work-box-design ${darkMode?"changeModeRec":""}`}>
        {/* <div className="work-upper1">
            <ul className='work-ul'>
                <li className='work-li-selected'>Fun</li>
                <li>Work</li>
                <li>Twitter Virals</li>
                <li>weekly winner</li>
                <li>Recommended</li>
            </ul>
        </div> */}
        <div className="work-upper2 ">
            <ul className={`work-ul2 ${darkMode?"darkwork-ul2":""}`} >
                <li>#mern</li>
                <li>#ror</li>
                <li>#django</li>
                <li>#laravel</li>
                <li>#python</li>
                <li>#angular</li>
                <li>#php</li>
                <li>#flask</li>
                <li>#react native</li>
                <li>#android</li>
                <li>#unity3d</li>
                <li>#javascript</li>
                <li>#SEO</li>
                <li>#marketing</li>
                <li>#flutter</li>
                <li>#wordpress</li>
                <li>#swift</li>
                <li>#c++</li>
                <li>#nest.js</li>
                <li>#machine learning</li>
                <li>#C</li>
            </ul>
        </div>
        </div>

        <div className="work-belowtags-parent">
            <div className={`work-filter-center ${darkMode?"changeModeRec":""}`}>
                <div className="work-filter">
                    <select>
                    <option value="All">All</option>
                        <option value="Web Development">Web Development</option>
                        <option value="App Development">App Development</option>
                        <option value="Ux/Ui">Ux/Ui</option>
                        <option value="Logo Designing">Logo Designing</option>
                        <option value="Content Writing">Content Writing</option>
                    </select>
                </div>
                <p style={{fontWeight:"600",color:'#192252'}}>OR</p>
                <div className="work-postjob-button">
                    <Link to='/addjob'><button className='work-postjob-button'><WorkOutlineIcon style={{fontSize:'18px', marginRight:'5px'}} />Post a Job</button></Link>
                </div>
            </div>
        </div>

        {
            jobs.map((job)=>(
                <EachJob key={job._id} job={job} darkMode={darkMode} />
            ))
        }


    </div>
  )
}
