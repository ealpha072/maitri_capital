// import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'

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
import Clients from './components/Clients'
import Careers from './components/Careers'
import AwiComponent from './components/awi'


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
					<Route 
						path="/static/media/Understanding_The_Kenyan_Startup_Ecosystem_Report_Final.3189e45751741ced2d0f.pdf" 
						element={ <Navigate to="/knowledge" /> } 
					/>

					<Route path='/credentials' element={<Credentials />} />
					<Route path='/clients' element={<Clients />} />
					<Route path='/careers' element={<Careers />} />
					<Route path='/knowledge/case_studies' element={<Casestudy />} />
					<Route 
						path='knowledge/Unlocking_Capital_for_Emerging_Female_Investment_Vehicle_Managers_in_Africa' 
						element={<AwiComponent />}
					/>
				</Routes>
				<Footer />
			</Router>
		</div>
  )
}

export default Home