import React from 'react'
import "./HappyChild4.css"


import { Button } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function HappyChild4() {
  return (
    <div className='HappyChild4-container'>
        <div className="HappyChild4-header">
          <h2>Happy Children Daycare Immunization Records Report</h2>
          <Button className="HC-btn4"><span>Report Actions</span> <ArrowBackIosIcon  className="Arrow-Down"/></Button>
        </div>
        <div className="HappyChild4-body">
            <div className="blue HC-List4">
              <span>First Name</span>
              <span>Last Name</span>
              <span>Classroom</span>
              <span>Date</span>
              <span>label</span>
            </div>
        </div>
    </div>
  )
}

export default HappyChild4;