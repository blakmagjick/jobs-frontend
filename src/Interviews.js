import React from 'react';

export default function Interviews (props) {
    return (
        <React.Fragment>
            <h2>Interviews</h2>
            {props.interviews.map((interview, i) => {
                return (
                    <div key={i}>
                        <p><span className='title'>Company</span>: <span className='bolded'>{interview.companyName}</span><br />
                        <span className='title'>Interviewer</span>: {interview.interviewerName}<br />
                        <span className='title'>Job Title</span>: {interview.jobTitle}<br />
                        <span className='title'>Interview Date</span>: {interview.interviewDate}<br />
                        <span className='title'>Notes</span>: {interview.notes}</p>
                    </div>
                )
            })}
        </React.Fragment>
    )
}