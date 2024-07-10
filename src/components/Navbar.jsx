import { Link } from 'react-router-dom'
import styles from './styles/Navbar.module.css'

const Navbar = ({Logo}) => {
    
    const handleClick =  (e) => {
        const dropdown = document.getElementsByClassName('navbar-collapse')
        //e.preventDefault()
        console.log(dropdown)
        dropdown.style.display  = "none"
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light nav-small">
            <div className={styles.logoHolder}>
                <a className="navbar-brand logo-a" href="/#">
                    <img src={Logo} alt="Maitri Logo" />
                    MAITRI CAPITAL
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className=""><i className='fa fa-bars'></i></span>
                </button>
            </div>

            <div className={`collapse navbar-collapse ${styles.collapseSmall}`} id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to='/' onClick={handleClick}>About Us <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='team' onClick={handleClick}>Team</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='coreservices' onClick={handleClick}>Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='' onClick={handleClick}>Clients</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='coreservices' onClick={handleClick}>Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='sectors' onClick={handleClick}>Industry Coverage</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/credentials' onClick={handleClick}>Credentials</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/knowledge' onClick={handleClick}>Knowledge</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/contact' onClick={handleClick}>Contact us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='' onClick={handleClick}>Careers</Link>
                    </li>
                </ul>
            </div>
        </nav>
  )
}

export default Navbar