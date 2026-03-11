import { useState } from 'react'
import Nav from './components/Nav'
import Header from './components/Header'
import Introduction from './components/Introduction'
import Rules from "./components/Rules"
import Criteria from './components/Criteria'
import FAQ from './components/FAQ'
import Timeline from './components/Timeline'
import Price from './components/Price'
import Sponsors from './components/Sponsors'
import Privacy from './components/Privacy'
import Footer from './components/Footer'

function App() {

  return (
   <div className="wrapper">
    <Nav/>
    <Header/>
    <Introduction/>
    <Rules/>
    <Criteria/>
    <FAQ/>
    <Timeline/>
    <Price/>
    <Sponsors/>
    <Privacy/>
    <Footer/>
   </div>
  )
}

export default App
