import React from 'react';

export default function Conferences (props) {
    return (
        <React.Fragment>
            <h2>Conferences</h2>
            {props.conferences.map((conference, i) => {
                return (
                    <div key={i}>
                        <p><span className='title'>Name</span>: {conference.conferenceName} <br />
                        <span className='title'>Date</span>: {conference.conferenceBeginningDate} <br />
                        <span className='title'>Website</span>: {conference.conferenceLink}</p>
                    </div>
                )
            })}
        </React.Fragment>
    )
}