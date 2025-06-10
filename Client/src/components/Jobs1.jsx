import React from 'react'

const Jobs1 = ({result}) => {
  return (
    <>
     <div > <h3 className='text-lg font-bold mb-2'>{result.length} Jobs</h3>
     <section className='card-container'>{result}</section></div></>
   
  )
}

export default Jobs1