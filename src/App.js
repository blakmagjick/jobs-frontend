import './App.css';
import JobApps from './JobApps.js';
import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Job Tracker</h1>
        </header>
        <JobApps />
      </div>
    )
  }

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Job Tracker</h1>
//       </header>
//       <JobApps />
//     </div>
//   );
// }

// export default App;
