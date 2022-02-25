import React from 'react';

export default function JobApps (props) {
    return (
        <React.Fragment>
            <h2>Applied to Jobs</h2>
            {props.jobs.map((job, i) => {
                return (
                    <div key={i}>
                    <p><span className='title'>Company Name</span>: {job.companyName} <br />
                    <span className='title'>Job Title</span>: {job.jobTitle} <br />
                    <span className='title'>Notes</span>: {job.notes}</p>
                    </div>
                )
            })}
        </React.Fragment>
    )
}