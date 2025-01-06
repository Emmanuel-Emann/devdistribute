import React from 'react'
import { FaLocationDot } from 'react-icons/fa6'

const TimeBox = ({name, text,icon}) => {
  return (
  <div className='hour-list'>
    {icon}
    <h1>{name}</h1>
    <p>{text}</p>
  </div>
  )
}

export default TimeBox