import React from 'react'
import './SingleRow.css'

function SingleRow(props) {
  return (
    <div>
         <div className='Card-Body'>
            <div className='CardRowTitle-container'>
              <h5 className='cardRowTitle'>{props.cardRowTitle}</h5>
            </div>
            <div className={props.Class}>
              <span>{props.ActivityRowText}</span>
            </div>
          </div>
    </div>
  )
}

export default SingleRow