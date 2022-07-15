import React from 'react'

import './SMcard2.css'

function SMcard2(props) {
  return (
    <div className='SMcard2-container'>
        <div className='SMcard2-header blue'>
            <p>{props.head}</p>
        </div>
        <div className="SMcard2-body">
            <p>-</p>
            <p>0</p>
            <p>0</p>
        </div>
    </div>
  )
}

export default SMcard2;