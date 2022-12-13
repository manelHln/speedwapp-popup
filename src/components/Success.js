import React from 'react'
import '../index.css'


const Success = ({display, handleClose}) =>{
	return (
		<div className={`d-${display} justify-content-center align-items-center scale-up-center`}>
		<div class="card col-4">
		<i class="fa-solid fa-xmark fa-lg close-icon" onClick={handleClose}></i>
  <div class="card-body d-flex flex-column align-items-center">
    <i class="fa-solid fa-check-double fa-5x text-success"></i>
    <p className='mt-4 h3'>Thank you!</p>
    <p className='text-center'>Your feedback has been sent successfully</p>
  </div>
</div>
</div>
		)
}


export const SomethingWrong = ({display, handleClose}) =>{
	return (
		<div className={`d-${display} justify-content-center align-items-center scale-up-center`}>
		<div class="card col-4">
		<i class="fa-solid fa-xmark fa-lg close-icon" onClick={handleClose}></i>
  <div class="card-body d-flex flex-column align-items-center">
    <i class="fa-solid fa-circle-exclamation fa-5x text-danger"></i>
    <p className='mt-4 h3'>Oops!</p>
    <p className='text-center'>There was an error processing your request</p>
  </div>
</div>
</div>
		)
}


export default Success
