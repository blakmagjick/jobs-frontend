import React from 'react';

export default function NewJob () {
    return (
        <React.Fragment>
            <h2>New Job Application</h2>
            <div id='newjob'>
            <form id='newjobform' 
            // onSubmit={}
            >
                <label>Company:</label>
                <input 
                    type='text'
                    id='company'
                    name='companyName'
                /><br />
                <label>Job Title:</label>
                <input 
                    type='text'
                    id='jobtitle'
                    name='jobTitle'
                /><br />
                <label>Notes:</label>
                <textarea
                    type='text'
                    id='jobnotes'
                    name='notes'
                /><br />

            </form>
            </div>
        </React.Fragment>
    )
}