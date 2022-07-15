import React from 'react'
import './SMcard.css'

function SMcard1() {
  return (
    <div className='SM-card-container'>
        <div className="card-head">
            <div className='dark blank'></div>
            <div className='blue All'>
                <h3>All</h3>
            </div>
        </div>
        <div className="card-body">
            <div className='grey card-list'>
                <p className='card-list-item'>Ratio</p>
                <p className='card-list-item'>Students</p>
                <p className='card-list-item'>Teachers</p>
            </div>
            <div className='card-list-value'>
                <p className='mt'>0</p>
                <p>0</p>
            </div>
        </div>

    </div>
  )
}

export default SMcard1;