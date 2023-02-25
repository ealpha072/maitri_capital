// import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//pages
import Header from './components/Header'
import Footer from './components/Footer'
import Courassel from './components/Courassel'
import Research from './components/Research'
import About from './components/About'
//import Abouttwo from './components/Abouttwo'
import Sectors from './components/Sectors'
import Coreservices from './components/Coreservices'
import Team from './components/Team'
import Careers from './components/Careers'
import Contact from './components/Contact'
import Knowledge from './components/Knowledge'
import Credentials from './components/Credentials'
import Banner from './components/Banner'
//https://shrouded-dusk-31492.herokuapp.com/

const Home = () => {
  return (
    <div>
        <Router >
          <Header />
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/sectors' element={ <Sectors /> } />
            <Route path='/coreservices' element={ <Coreservices /> } />
            <Route path='/research' element={ <Research /> } />
            <Route path='/team' element={ <Team /> } />
            <Route path='/careers' element={ <Careers /> } />
            <Route path='/contact' element={ <Contact /> } />
            <Route path='/knowledge' element={<Knowledge />} />
            <Route path='/credentials' element={<Credentials />} />
          </Routes>
          <Footer />
        </Router>
    </div>
  )
}

export default Home