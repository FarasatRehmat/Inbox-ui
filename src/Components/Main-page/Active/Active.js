import React from 'react'
import './Active.css'

import SingleRow from '../CardSinglerRow/SingleRow';

function Active(props) {
  return (
    <div className="Row-container margin-top">
       <SingleRow 
          cardRowTitle="Send/Total Reports"
          Class="red cardbox"
          ActivityRowText="0/0"
       />
       <SingleRow 
          cardRowTitle="Photos and Videos"
          Class="blue cardbox"
          ActivityRowText="0"
       />
       <SingleRow 
          cardRowTitle="Development Skills"
          Class="dark cardbox"
          ActivityRowText="0"
       />
       <SingleRow 
          cardRowTitle="Parents Messages"
          Class="blue cardbox"
          ActivityRowText="0"
       />
    </div>
  )
}

export default Active;