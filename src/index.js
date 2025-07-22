import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Portofolio from './Components/Portofolio';
import MainPortFolio from './Components/MainPortFolio';
// import Project2 from './Components/Project2';
// import Project3 from './Components/Project3';
// import Project4 from './Components/Project4';
// import Project5 from './Components/Project5';
// import Project6 from './Components/Project6';
// import Muiproject from './Components/Muiproject';
// import Web from './Components/Web';

// import Project from './Components/Project';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Project/> */}
    {/* <Project2/> */}
    {/* <Project3/> */}
    {/* <Project4/> */}
    {/* <Project5/> */}
    {/* <Project6/> */}
    {/* <Muiproject/> */}
    {/* <Web/> */}

    {/* <Portofolio/> */}
    <MainPortFolio/>
  
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
