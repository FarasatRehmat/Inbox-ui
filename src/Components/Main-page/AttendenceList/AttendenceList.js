import React from 'react'
import './AttendenceList.css'
import AttendenceRow from '../AttendenceRow/AttendenceRow'

function AttendenceList() {
  return (
    <div className='margin-top'>
        <AttendenceRow 
            attdendenceRowTitle="Checked In"
            Class="green cardbox attendencebox"
            AttendenceRowText="0"
        />
        <AttendenceRow 
            attdendenceRowTitle="Checked Out"
            Class="red cardbox attendencebox"
            AttendenceRowText="0"
        />
        <AttendenceRow 
            attdendenceRowTitle="Absent"
            Class="grey cardbox attendencebox"
            AttendenceRowText="0"
        />
        <AttendenceRow 
            attdendenceRowTitle="No Present"
            Class="blue cardbox attendencebox"
            AttendenceRowText="3"
        />
    </div>
  )
}

export default AttendenceList