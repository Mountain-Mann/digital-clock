import { useState, useEffect } from "react"

function DigitalClock() {

  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  })

  function formatTime(time) {
    return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  }

  useEffect(() => {
    document.title = `The time is ${formatTime(time)}`
  }, [time])

  return (
    <div className="clock-container">
      <div className="clock-display">
        <span>{ formatTime(time) }</span>
      </div>
    </div>
  )
}

export default DigitalClock