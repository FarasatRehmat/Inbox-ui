import React from 'react'
import "./Recent-Photos.css"

import { Button } from "@mui/material"
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

function RecentPhotos() {
  return (
    <div className='RP-container'>
        <div className="RP-left">
            <div className="Rp-header">
                <h2>Recent Photos</h2>
            </div>
            <div className="Rp-btn-grp">
                <Button className='RP-btn red'>Classroom Photo Journal</Button>
                <Button className="RP-btn blue">Refresh</Button>
            </div>
        </div>
        <div className="Rp-Right">
            <SentimentVeryDissatisfiedIcon className='Sad-Emoji'/>
            <h4>Oh no! No photos hav e been added for 001 recently.</h4>
            <span>Uploading photos is the #1 way to engage parents.</span> 
        </div>
    </div>
  )
}

export default RecentPhotos;