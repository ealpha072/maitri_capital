// import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//pages
import Header from './components/Header'
import Footer from './components/Footer'
// import Courassel from './components/Courassel'
import Research from './components/Research'
import About from './components/About'
import Sectors from './components/Sectors'
import Coreservices from './components/Coreservices'
import Team from './components/Team'
import Contact from './components/Contact'
import Knowledge from './components/Knowledge'
import Credentials from './components/Credentials'
import Casestudy from './components/Casestudy'


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
				<Route path='/contact' element={ <Contact /> } />
				<Route path='/knowledge' element={<Knowledge />} />
				<Route path='/credentials' element={<Credentials />} />
				<Route path='/knowledge/case_studies' element={<Casestudy />} />
          	</Routes>
          	<Footer />
        </Router>
    </div>
  )
}

export default Home