import React from 'react'
import { Link } from 'react-router-dom'

export const LinkResuable = ({to,text}) => {
  return (
    <Link to={to} className='hover:bg-[#5a515173] py-[2px] px-[2px] hover:rounded-[4px]'>{text}</Link>
  )
}
