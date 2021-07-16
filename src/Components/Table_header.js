import React, { useState } from 'react'
import { useGlobalContext } from '../GlobalState/Context'
import './Table_header.css'

function Table_header() {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const [seatLeft, setseatLeft] = useState(getRandomInt(10, 15))
  const { seatCount, setSeatCount } = useGlobalContext()

  return (
    <div className='table_header'>
      <div>
        <h2 className='table_header_text'>Class Schedule</h2>
      </div>
      <div className='seats_left'>
        <h2 className='seats_left_text'>
          Free Seats Left: {seatLeft - seatCount}
        </h2>
      </div>
    </div>
  )
}

export default Table_header
