import React from 'react';
import './navbar.css';
import nav1 from '../../images/nav1.png';
import nav2 from '../../images/nav2.png';
import nav3 from '../../images/nav3.png';
import nav4 from '../../images/nav4.png';
import nav5 from '../../images/nav5.png';
import nav6 from '../../images/nav6.png';
import hamburger from '../../images/hamburger.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='navbar-parent'>
            <div className="navbar-left">
                <img className='navbar-hamburger' src={hamburger} alt="" />
                <Link to='/' className='navbar-logo'><p>onlyMemes</p></Link>
            </div>
            <div className="navbar-middle">
                <ul className='navbar-ul'>
                    <li> <img width='13px' height='13px' src={nav1} alt="" /> Shuffle</li>
                    <li> <img width='13px' height='13px' src={nav2} alt="" /> Get App</li>
                    <li> <img width='13px' height='13px' src={nav3} alt="" /> Donate</li>
                    <li> <img width='13px' height='13px' src={nav4} alt="" /> Crypto</li>
                    <li> <img width='13px' height='13px' src={nav5} alt="" /> Shower Thought</li>
                    <li> <img width='13px' height='13px' src={nav6} alt="" /> Android</li>
                </ul>
            </div>
            <div className="navbar-right">
                <p>Faizan n Abdullah</p>
            </div>
        </div>
    )
}
