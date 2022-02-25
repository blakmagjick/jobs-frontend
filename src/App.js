import './App.css';
import Conferences from './Conferences.js'
import JobApps from './JobApps.js';
import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      baseURL: 'http://localhost:3003',
      conferences: [],
      jobs: []
    }
  }

  getJobs = () => {
    fetch(this.state.baseURL + '/jobs/')
    .then (response => {
      // console.log(response)
      if (response.status === 200) {
        return response.json() 
      } else {
        return []
      }
    })
    .then(body => {
      console.log(body)
      this.setState({
        jobs: body
      })
    })
  }

  getConferences = () => {
    fetch(this.state.baseURL + '/conferences/')
    .then (response => {
      // console.log(response)
      if (response.status === 200) {
        return response.json() 
      } else {
        return []
      }
    })
    .then(body => {
      console.log(body)
      this.setState({
        conferences: body
      })
    })
  }

  componentDidMount() {
    this.getJobs()
    this.getConferences()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Job Tracker</h1>
        </header>
        <JobApps jobs={this.state.jobs} />
        <Conferences conferences={this.state.conferences}/>
      </div>
    )
  }
}
