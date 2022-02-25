import './App.css';
import JobApps from './JobApps.js';
import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      baseURL: 'http://localhost:3003',
      jobs: []
    }
  }

  getJobs = () => {
    fetch(this.state.baseURL + '/jobs/')
    .then (response => {
      console.log(response)
      if (response.status === 200) {
        return response.json() 
      } else {
        return []
      }
    })
    .then(body => {
      console.log(body)
      this.setState({
        // jobs: body
      })
    })
  }

  componentDidMount() {
    this.getJobs()
  }

  render() {
    // console.log(this.state.jobs)
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
