import React, { Component } from 'react';
import './App.css';
// import { BrowserRouter, Routes, Route} from 'react-router-dom';
// import Home from './Component/Router/Components/Home';
// import About from './Component/Router/Components/About';
// import Topic from './Component/Router/Components/Topic';
// import Layout from './Component/Router/Components/Layout';
import Shop from '../Content/shoping';

class App extends Component {
  render(){
  return (
    <Shop></Shop>
    // <>
    // <BrowserRouter>
    // <Layout/>
    //   <Routes>
    //      <Route exact path='/home' Component={Home}/>
    //     <Route path='/about' Component={About} />
    //     <Route path='/topic' Component={Topic} /> 
        
    //   </Routes>
    // </BrowserRouter>
    // </>
  );
}
}
export default App;




