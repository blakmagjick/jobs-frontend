import React from 'react';

export default function JobApps (props) {
    return (
        <React.Fragment>
            <h3>Jobs</h3>
            {props.jobs.map((job, i) => {
                return (
                    <p>{job.companyName}</p>
                )
            })}
        </React.Fragment>
    )
}