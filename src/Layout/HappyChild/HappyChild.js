import React from 'react'
import "./HappyChild.css"


import { Button } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function HappyChild() {
  return (
    <div className='HappyChil-container'>
        <div className="HappyChild-header">
          <h2>Happy Children Daycare Allergies / Medical Notes Report</h2>
          <Button className="HC-btn"><span>Report Actions</span> <ArrowBackIosIcon  className="Arrow-Down"/></Button>
        </div>
        <div className="HappyChild-body">
            <div className="blue HC-List">
              <span>First Name</span>
              <span>Last Name</span>
              <span>Classroom</span>
              <span>Allergies</span>
              <span>Severity</span>
            </div>
        </div>
    </div>
  )
}

export default HappyChild