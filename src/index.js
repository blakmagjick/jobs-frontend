import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Conferences from './Conferences';
import Interviews from './Interviews';
import JobApps from './JobApps';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const rootElement = document.getElementById("root");
render(
<BrowserRouter>
  <Routes>
      <Route path="/" element={<App />} />
      <Route path="conferences" element={<Conferences />} />
      <Route path="interviews" element={<Interviews />} />
      <Route path="jobapps" element={<JobApps />} />
  </Routes>
  {/* <App /> */}
</BrowserRouter>, 
rootElement
);
