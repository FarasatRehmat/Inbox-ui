import React from 'react'
import "./HappyChild2.css"


import { Button } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function HappyChild2() {
  return (
    <div className='HappyChild2-container'>
        <div className="HappyChild2-header">
          <h2>Happy Children Daycare Allergies / Medical Notes Report</h2>
          <Button className="HC-btn2"><span>Report Actions</span> <ArrowBackIosIcon  className="Arrow-Down"/></Button>
        </div>
        <div className="HappyChild2-body">
            <div className="blue HC-List2">
              <span>First Name</span>
              <span>Last Name</span>
              <span>Classroom</span>
              <span>Guardian Name</span>
              <span>Email</span>
              <span>Mobile Phone</span>
              <span>Home Phone</span>
              <span>Work Phone</span>
            </div>
        </div>
    </div>
  )
}

export default HappyChild2;