import React from 'react'

import './Resent-message.css'


import { Button } from "@mui/material"

function ResentMessage() {
  return (
    <div className='RM-container'>
        <div className="RM-header">
            <h2>Recent Message</h2>
        </div>
        <div className='RM-body'>
            <div className='blue Message-info'>
                <span>Date</span>
                <span>From</span>
                <span>Subject</span>
                <span>Child</span>
            </div>
            <div className='RM-text'>
                <p>No Messages in the last two weeks.</p>
            </div>
            <div className='RM-btn-grp'>
                <Button className='RM-btn red'>Message Center</Button>
                <Button className="RM-btn blue">Compose</Button>
            </div>
        </div>
    </div>
  )
}

export default ResentMessage;