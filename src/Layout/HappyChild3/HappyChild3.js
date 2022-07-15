import React from 'react'
import "./HappyChild3.css"


import { Button } from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function HappyChild3() {
  return (
    <div className='HappyChild2-container'>
        <div className="HappyChild2-header">
          <h2>Happy Children Daycare Allergies / Medical Notes Report</h2>
          <Button className="HC-btn2"><span>Report Actions</span> <ArrowBackIosIcon  className="Arrow-Down"/></Button>
        </div>
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date Of Birth</th>
            <th>Classroom</th>
            <th>Enroll Date</th>
            <th>Grade Date</th>
            <th>Rotation</th>
            <th>Schedule</th>
          </tr>
          <tr className='Grey'>
            <td>Jan</td>
            <td>Deo</td>
            <td>2018-02-17</td>
            <td>001</td>
            <td>2022-02-17</td>
            <td></td>
            <td></td>
            <td>MTWRE</td>
          </tr>
          <tr>
            <td>Jan</td>
            <td>Deo</td>
            <td>2018-02-17</td>
            <td>001</td>
            <td>2022-02-17</td>
            <td></td>
            <td></td>
            <td>MTWRE</td>
          </tr>
          <tr>
            <td>Jan</td>
            <td>Deo</td>
            <td>2018-02-17</td>
            <td>001</td>
            <td>2022-02-17</td>
            <td></td>
            <td></td>
            <td>MTWRE</td>
          </tr>
          <tr>
            <td>Jan</td>
            <td>Deo</td>
            <td>2018-02-17</td>
            <td>001</td>
            <td>2022-02-17</td>
            <td></td>
            <td></td>
            <td>MTWRE</td>
          </tr>
          <tr>
            <td>Jan</td>
            <td>Deo</td>
            <td>2018-02-17</td>
            <td>001</td>
            <td>2022-02-17</td>
            <td></td>
            <td></td>
            <td>MTWRE</td>
          </tr>
          <tr>
            <td>Jan</td>
            <td>Deo</td>
            <td>2018-02-17</td>
            <td>001</td>
            <td>2022-02-17</td>
            <td></td>
            <td></td>
            <td>MTWRE</td>
          </tr>
        </table>
    </div>
  )
}

export default HappyChild3;