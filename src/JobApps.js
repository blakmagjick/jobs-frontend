import React from 'react';
import NewJob from './NewJob';

export default function JobApps (props) {
    return (
        <React.Fragment>
            <h2>Applied to Jobs</h2>
            {props.jobs.map((job, i) => {
                return (
                    <div key={i}>
                    <p><span className='title'>Company</span>: <span className='bolded'>{job.companyName}</span> <br />
                    <span className='title'>Job Title</span>: {job.jobTitle} <br />
                    <span className='title'>Notes</span>: {job.notes}</p>
                    </div>
                )
            })}
            <NewJob />
        </React.Fragment>
    )
}