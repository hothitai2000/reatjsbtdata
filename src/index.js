import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Header from './Component/Header/Header';
// import { Data } from './Component/Body/Data';
// import Content from './Component/Body/Content';
// import ShowCard from './Component/Body/Showcard/ShowCard';
// import Footer from './Component/Footer/Footer';
import App from './Component/App/App';
// import JustAnotherCounter from './Component/Hooks/JustAnotherCounter'
// import mau from './Component/Hooks/FavoriteColor';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header></Header> */}
   {/* < Data></Data> */}
   {/* <Content></Content>
    <Footer></Footer> */}
    {/* <Car></Car> */}
    {/* <mau></mau> */}
    <App/>
    {/* <JustAnotherCounter></JustAnotherCounter> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
