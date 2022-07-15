import React from 'react'
import "./Messages.css"

import { Button } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


function Messages() {
  return (
    <div className='Message-container'>
        <div className="Message-head">
            <div className='Message-title'>
                <h2>Messaging</h2>
            </div>  
            <div className='Message-list'>
                <span><a href="#">Inbox</a></span>
                <span>Archived</span>
                <span>Scheduled</span>
                <span>Send</span>
            </div>          
        </div>
        <div className="Message-body">
            <div className="message-btns">
                <div className="message-left-btn">
                    <Button className='blue'>Messages <span className='btn-box'>0</span></Button>
                    <Button className="transparent">Comments <span className='btn-box'>0</span></Button>
                </div>
                <div className="message-right-btn">
                    <Button className="transparent"><span>Report Actions</span> <ArrowBackIosIcon  className="Arrow-Down"/></Button>
                    <Button className='red'>Compose</Button>
                </div>
            </div>
            <div className="blue Message-sub-list">
              <span>Time</span>
              <span>Form</span>
              <span>Subject</span>
              <span>Child</span>
            </div>
            <div className="data-available">
                <p>No data available in table</p>
            </div>
            <div className='Message-btns2'>
                <Button className="transparent">Staff Messages</Button>
                <Button className="transparent">Parents Messages</Button>
                <Button className="transparent">Teachers Have Access</Button>
            </div>
            <div className='Entries'>
                <p>Showing 0 to 0 of 0 entries</p>
            </div>
            <div className="Messages-btn-3">
                <Button className="blue">Previous</Button>
                <Button className="grey">Next</Button>
            </div>
        </div>
    </div>
  )
}

export default Messages