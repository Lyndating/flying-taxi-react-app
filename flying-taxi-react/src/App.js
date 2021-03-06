import React from 'react';
import Signup from './components/Signup';

import SignUpForm from './components/SignUpForm';
import RedirectingPage from './components/RedirectingPage';
import CheckBox from './components/CheckBox';



import './App.css';
import {HashRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './components/Home'
import Service from './components/Service';
import Contact from './components/Contact';
import Header from './components/Header';

const routes = (
  <Router>
    <Header/>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route path='/service' element={<Service/>}/>
    <Route path='/contact' element={<Contact/>}/>
    </Routes>
  </Router>
)

function App() {
  return (
    <div className="App">
      {routes}
      <Signup />

      <CheckBox />

      <Service/> */
      {/* <SignUpForm /> */}
      <RedirectingPage />


  

    </div>
  );
}

export default App;
