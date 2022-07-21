import React from 'react'
import './leftFoldOption.css'
export default function LeftFoldOption({option,isActive}) {
    const classList=isActive?"leftFold-option active":"leftFold-option"
  return (
    <div className='leftFoldOptions-container'>
    <div className='leftFoldOption-icon'>{option.icon}</div>
    {option.name&&<label className='leftFoldOption-label'>{option.name}</label>}
    </div>
  )
}
