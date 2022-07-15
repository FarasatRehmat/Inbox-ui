import React from 'react'
import "./AttendenceRow.css"

function AttendenceRow(props) {
  return (
    <div>
        <div className='Card-Body'>
          <div className={props.Class}>
            <span>{props.AttendenceRowText}</span>
          </div>
          <div className='AttdentenceRowTitle-container'>
            <h5 className='AttendenceRowTitle'>{props.attdendenceRowTitle}</h5>
          </div>
        </div>
    </div>
  )
}

export default AttendenceRow