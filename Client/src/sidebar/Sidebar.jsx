import React from 'react'
import Location from './Location'
import Salary from './Salary'
import JobPostingData from './JobPostingData'
import WorkExperienceLevel from './WorkExperienceLevel'
import EmploymentType from './EmploymentType'

const Sidebar = ({handleChange,handleClick}) => {
  return (
    <div className='space-y-5 ' >
        <h3 className='text-lg font-bold'>Filters</h3>
        <Location handleChange={handleChange} />
        <Salary handleChange={handleChange} handleClick={handleClick}/>
        <JobPostingData handleChange={handleChange}/>
        <WorkExperienceLevel handleChange={handleChange} />
        <EmploymentType handleChange={handleChange}/>
    </div>
  )
}

export default Sidebar  