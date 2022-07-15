import React from 'react'
import './Attendence.css'

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Button } from "@mui/material"


import Card from '../Card/Card';
import AttendenceList from '../AttendenceList/AttendenceList';


function Attendence() {
  return (
    <div className='Attdence-container'>
        <Card 
            headTitle="Attendence"
            headIcon={<CalendarTodayIcon/>}
        />
        <div className="AttdenceBody">
            <AttendenceList />
            <div className="AttdenceCilcle-container">
                <div className='AttdenceCilcle'>
                  <h2>03</h2>
                  <h3>scheduled</h3>
                </div>
            </div>
            <div className="Attdencebtn">
                <Button className='add-btn red'>List</Button>
                <Button className="add-btn blue">
                  <SearchRoundedIcon />
                  Search
                </Button>
            </div>
        </div>
    </div>
  )
}

export default Attendence;