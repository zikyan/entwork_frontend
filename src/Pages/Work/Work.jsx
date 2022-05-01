import { useState, useEffect } from 'react';
import './work.css';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EachJob from '../../Components/EachJob/EachJob';
import { getAllJob } from '../../service/api';
import { Link, useLocation } from 'react-router-dom';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useNavigate } from 'react-router-dom';

export default function Work({darkMode}) {
    const [jobs, setJobs] = useState([])
    const { search } = useLocation()
    const [categoryVar, setCategoryVar] = useState('Web Development')
    const navigate=useNavigate()

    useEffect(()=>{
        // const fetchData = async ()=>{
        //     const res = await getAllJob()
        //     setJobs(res)
        // }
        // fetchData()

        const fetchData = async ()=>{
            const res = await getAllJob(search);
            setJobs(res);
        }
    fetchData()

    },[search])

    const handleFilter = async ()=>{
        if(categoryVar==='All'){
            navigate('/work')
        }else{
            navigate(`/work/?category=${categoryVar}`)
            const res = await getAllJob(categoryVar);
            setJobs(res);
        }
    }

  return (
    <div className="work-parent">
        <div className={`work-box-design ${darkMode?"changeModeRec":""}`}>
        <div className="work-upper2 ">
            <ul className={`work-ul2 ${darkMode?"darkwork-ul2":""}`} >
            <Link to='/work' className='leftsidebar-ul-link'><li>#All</li></Link>
            <Link to='/work/?tag=mern' className='leftsidebar-ul-link'><li>#mern</li></Link>
            <Link to='/work/?tag=amazon' className='leftsidebar-ul-link'><li>#amazon</li></Link>
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
                <Link to='/work/?tag=ror' className='leftsidebar-ul-link'><li>#ror</li></Link>
                <li>#marketing</li>
                <li>#flutter</li>
                <li>#wordpress</li>
                <li>#swift</li>
                <li>#c++</li>
                <li>#nest.js</li>
                {/* <li>#machine learning</li> */}
                <li>#C</li>
            </ul>
        </div>
        </div>

        <div className="work-belowtags-parent">
            <div className={`work-filter-center ${darkMode?"changeModeRec":""}`}>
                <div className="work-filter">
                    <select onChange={(e)=>{
                        const selectCategory=e.target.value;
                        setCategoryVar(selectCategory)
                    }}>
                    <option value="All">All</option>
                        <option value="Web Development">Web Development</option>
                        <option value="App Development">App Development</option>
                        <option value="Ux/Ui">Ux/Ui</option>
                        <option value="Logo Designing">Logo Designing</option>
                        <option value="Content Writing">Content Writing</option>
                    </select>
                </div>
                {/* <p style={{fontWeight:"600",color:'#192252'}}>OR</p> */}
                <div className="work-postjob-button">
                    {/* <Link to='/addjob'><button className='work-postjob-button'><WorkOutlineIcon style={{fontSize:'18px', marginRight:'5px'}} />Post a Job</button></Link> */}
                    <button onClick={handleFilter} className='work-start-chat-button work-filter-button'><FilterListIcon /><p style={{marginLeft:'10px'}}>Filter</p></button>
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
