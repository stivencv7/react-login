import React from 'react'
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

export const InfoComponent = () => {
  return (
    <div className='flex gap-5'>
        <p className={`flex gap-2 items-center text-[12px] text-[#14181F]`}><BsTelephone/> 959912""67</p>

        <p className={`flex gap-2 items-center text-[12px] text-[#14181F] `}><MdOutlineEmail/> Info &copy;mydiscountedlobs.in</p>

    </div>
  )
}
