import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' use component={Home} />
        <Route exact path='/services' use component={Services} />
        <Route exact path='/blog' use component={Blog} />
        <Route exact path='/contact' use component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
