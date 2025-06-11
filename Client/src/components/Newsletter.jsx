import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6"
const Newsletter = () => {
  return (
    <div>
        <div>
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'><FaEnvelopeOpenText/> Email me for jobs </h3>
            <p className='text-primary/75 text-base mb-4 '>Email me to get the updates about job. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, fuga! </p>
        </div>
        <div className='w-full space-y-4'>
            <input type='email' name='email' placeholder='Enter your email' className='w-full block py-2 pl-3 border focus:outline-none'/>
            <input type='submit' value={"Subscribe"} className='w-full space-y-4 py-2 pl-3 bg-blue text-white  cursor-pointer '/>
        </div>
        {/* 2nd part  */}
           <div className='mt-24'>
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'><FaRocket/> Get noticed easier </h3>
            <p className='text-primary/75 text-base mb-4 '>Email me to get the updates about job. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, fuga! </p>
        </div>
        <div className='w-full space-y-4'>
           
            <input type='submit' value={"Upload your resume"} className='w-full space-y-4 py-2 pl-3 bg-blue text-white  cursor-pointer '/>
        </div>
    </div>
  )
}

export default Newsletter