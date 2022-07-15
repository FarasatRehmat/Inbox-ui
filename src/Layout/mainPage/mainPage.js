import React from 'react'

import Card from "../../Components/Main-page/Card/Card"
import Active from "../../Components/Main-page/Active/Active"
import Overview from "../../Components/Main-page/Overview/Overview"
import Attendence from '../../Components/Main-page/Attendence/Attendence'
import SMcard1 from '../../Components/Main-page/staff-management-card1'
import SMcard2 from '../../Components/Main-page/staff-management-card2'
import ResentMessage from '../../Components/Main-page/Recent-message/Resent-message'
import RecentComments from '../../Components/Main-page/RecentComments/RecentComments'
import RecentPhotos from '../../Components/Main-page/Recent-Photos/Recent-Photos'

import { Button } from "@mui/material"

import "./mainPage.css"

import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

function MainPage() {
  return (
    <>
      <div className='card-container'>
        <Card 
            headTitle="Activity"
            headIcon={<CircleOutlinedIcon className='circleIcon'/>}
            cardbody={<Active />}
            className="Card"
        />
         <Card 
            headTitle="Overview"
            headIcon={
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.892857 25H25V23.2143H1.78571V0H0V24.1071L0.892857 25ZM3.57143 20.5357V6.25L4.46429 5.35714H8.03571L8.92857 6.25V20.5357L8.03571 21.4286H4.46429L3.57143 20.5357ZM7.14286 19.6429V7.14286H5.35714V19.6429H7.14286ZM17.8571 2.67857V20.5357L18.75 21.4286H22.3214L23.2143 20.5357V2.67857L22.3214 1.78571H18.75L17.8571 2.67857ZM21.4286 3.57143V19.6429H19.6429V3.57143H21.4286ZM10.7143 20.5357V9.82143L11.6071 8.92857H15.1786L16.0714 9.82143V20.5357L15.1786 21.4286H11.6071L10.7143 20.5357ZM14.2857 19.6429V10.7143H12.5V19.6429H14.2857Z" fill="black"/>
            </svg>
            }
            cardbody={<Overview />}
            className="Card"
        />
        <Attendence  className="Attdence"/>
      </div>
      <div className='Staff-management'>
          <div className='Staff-management-left'>
            <div className='staff-management-header'>
              <h2>Staff Management & Ratios</h2>
              <a href="http://" >
                Weekly Ratios
              </a>
            </div>
            <div className='staff-management-body'>
              <SMcard1 />
              <SMcard2 
                head="001"
              />
              <SMcard2 
                head="002"
              />
              <SMcard2 
                head="003"
              />
              <div className="staff-management-btn">
                <div className="Attdencebtn">
                    <Button className='add-btn red'>View Staff</Button>
                    <Button className="add-btn blue">Refresh</Button>
                </div>
              </div>
            </div>
          </div>
          <div className='Staff-management-right'>
              <ResentMessage />
          </div>
      </div>
      <div className="Recent-comments">
        <RecentComments />
      </div>
      <div className="Recent-Photos">
        <RecentPhotos />
      </div>
    </>
  )
}

export default MainPage