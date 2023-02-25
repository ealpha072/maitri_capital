import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import Logo from '../assets/images/logo_small.jpg'

import styles from './styles/Header.module.css'

const Header = () => {
  return (
    <div>
        <header className={styles.header}>
            <nav className={`navbar navbar-expand-lg navbar-light nav-top ${styles.topNavBar}`}>
                <div className='d-flex nav-top-div'>
                    <div className="navtop-link">
                        <Link to='/contact'>Contacts</Link>
                        <Link to='/careers'>Careers</Link>
                    </div>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Search"
                    />
                </div>
            </nav>

            <div className={styles.phoneNav}>
                <Navbar Logo={Logo}/>
            </div>

            <nav className={`navabar navbar-light bg-white d-flex ${styles.bottomNavBar}`}>
                <div className={styles.logoDiv}>
                    <a href="/#" className='d-flex'>
                        <img src={Logo} alt="Maitri Logo" />
                        MAITRI CAPITAL
                    </a>
                </div>
                <div className={styles.navigationDetails}>
                    <div className="dropdown">
                        <a href="/#" className='dropdown-toggle' id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">About Us </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link className="dropdown-item" to='/'>Our Story</Link>
                            <Link className="dropdown-item" to='/'>What differentiates us</Link>
                            <Link className="dropdown-item" to='/'>Our Values</Link>
                            <Link className="dropdown-item" to='/'>Our Projects</Link>
                            <Link className="dropdown-item" to='/'>Careers</Link>
                        </div>
                    </div>
                    <a href="/team">Team </a>
                    <div className="dropdown">
                        <a href="/#" className='dropdown-toggle' id="dropdownMenuButtonServices" data-toggle="dropdown" aria-expanded="false">Services </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButtonServices">
                            <Link className="dropdown-item" to='coreservices'>Investment Advisory</Link>
                            <Link className="dropdown-item" to='coreservices'>Corporate Advisory</Link>
                            <Link className="dropdown-item" to='coreservices'>Research</Link>
                        </div>
                    </div>
                    <div className="dropdown">
                        <a href="/#" className='dropdown-toggle' id="dropdownMenuButtonClients" data-toggle="dropdown" aria-expanded="false">Clients </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButtonClients">
                            <a className="dropdown-item" href="/#">Investors</a>
                            <a className="dropdown-item" href="/#">Companies & Entrepreneurs</a>
                            <a className="dropdown-item" href="/#">Institutional</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <a href="/#" className='dropdown-toggle' id="dropdownMenuButtonIndustry" data-toggle="dropdown" aria-expanded="false">Industry Coverage </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButtonIndustry">
                            <Link className="dropdown-item" to='/sectors'>Agriculture</Link>
                            <Link className="dropdown-item" to='/sectors'>Education</Link>
                            <Link className="dropdown-item" to='/sectors'>Financial Services</Link>
                            <Link className="dropdown-item" to='/sectors'>Health</Link>
                            <Link className="dropdown-item" to='/sectors'>Hospitality</Link>
                            <Link className="dropdown-item" to='/sectors'>ICT</Link>
                            <Link className="dropdown-item" to='/sectors'>Manufacturing</Link>
                            <Link className="dropdown-item" to='/sectors'>Power & Clean Energy</Link>
                            <Link className="dropdown-item" to='/sectors'>Real Estate</Link>
                            <Link className="dropdown-item" to='/sectors'>Services</Link>
                        </div>
                    </div>
                    <a href="/#">Transactions </a>
                    <Link to="/knowledge">Knowledge</Link>
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Header