import React from 'react'
import './sideBarOptions.css';
export default function sideBarOption({option,isActive}) {
    const classList=isActive?"sidebar-option active":"sidebar-option"
  return (
    <div className='sideBarOptions-container'>
    <div className='sideBarOption-icon'>{option.icon}</div>
    {option.name&&<label className='sideBarOption-label'>{option.name}</label>}
    </div>
  )
}
