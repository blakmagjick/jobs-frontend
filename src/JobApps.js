import React from 'react';
// import './App.css';

export default function JobApps (props) {
    return (
        <React.Fragment>
            <h3>Applied to Jobs</h3>
            {props.jobs.map((job, i) => {
                return (
                    <div key={i}>
                    <p>Company Name: {job.companyName} <br />
                    Job Title: {job.jobTitle} <br />
                    Notes: {job.notes}</p>
                    </div>
                )
            })}
        </React.Fragment>
    )
}