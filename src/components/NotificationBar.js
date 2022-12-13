import React, {useState} from 'react'
import '../index.css'

const NotificationBar = ({message, alertType, title}) => {
  const [display, setDisplay] = useState('block')
  const [animate, setAnimate] = useState('scale-down')

  const handleClose = () => {
    setAnimate('notification-close')
    setInterval(()=> setDisplay('none'), 400)
  }
  return (
    <div className={`notification-container col-4 ${animate}`} style={{ display }}>
      <div class="alert alert-success rounded-1 d-flex align-items-center" role="alert">
          <div role='button' onClick={handleClose}>
            <i class="fa-solid fa-circle-xmark fa-2sm notification-close-icon"/>
          </div>
          <div className="ms-3">
            <p class="alert-heading mb-0 sm-text fw-bold">Well done!</p>
            <p className="m-0 sm-text">Are you using these top 5 alert bar tactics? — Your competitors are!</p>
          </div>
      </div>
    </div>
  )
}

export default NotificationBar
