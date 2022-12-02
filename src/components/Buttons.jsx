import React from 'react'

const Button = ({text, handleClick, active}) => {
  return (
    <div className={`default-btn ${active&& 'active-bg'}`} onClick={handleClick}>{text}</div>
  ) 
}

export default Button