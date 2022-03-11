import './App.css';
import Conferences from './Conferences.js'
import JobApps from './JobApps.js';
import Interviews from './Interviews.js';
import React, { Component } from 'react';
import { Outlet, Link } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      baseURL: 'http://localhost:3003',
      conferences: [],
      jobs: [],
      interviews: []
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

  getInterviews = () => {
    fetch(this.state.baseURL + '/interviews')
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
        interviews: body
      })
    })
  }

  componentDidMount() {
    this.getJobs()
    this.getConferences()
    this.getInterviews()
  }

  render() {
    return (
      <div>
        <h1> Job Tracker v.2 with Nav </h1>
        <nav
          style ={{
            borderBottom: 'solid 1px',
            paddingBottom: '1rem',
          }}
        >
          <Link to='/conferences'>Conferences</Link> | {" "}
          <Link to='/interviews'>Interviews</Link> | {" "}
          <Link to='/jobs'>Jobs</Link>
        </nav>
        <Outlet />
        <header className="App-header">
          <h1>Job Tracker</h1>
        </header>
        <JobApps jobs={this.state.jobs} />
        <Conferences conferences={this.state.conferences}/>
        <Interviews interviews={this.state.interviews}/>
      </div>
    )
  }
}
