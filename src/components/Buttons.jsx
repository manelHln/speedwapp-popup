import React from 'react'

const Button = ({text, handleClick, gray}) => {
  return (
    <div className={`default-btn ${gray&& 'active-bg'}`} onClick={handleClick}>{text}</div>
  )
}

export default Button