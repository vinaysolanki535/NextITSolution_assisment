import React, { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const [timeLeft, setTimeLeft] = useState(getRandomInt(30, 60))

  useEffect(() => {
    if (!timeLeft) return

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [timeLeft])

  return (
    <div className='header'>
      <h4>Time Left: {timeLeft} seconds</h4>
      <h1 className='header_Text'>Claim Your Free Trial Class</h1>
    </div>
  )
}

export default Header
