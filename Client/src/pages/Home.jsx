import React from 'react'
import Banner from '../components/Banner'
import { useState, useEffect } from 'react'
import Card from '../components/Card';
import Jobs1 from '../components/Jobs1';
import { FiSidebar } from 'react-icons/fi';
import Sidebar from '../sidebar/Sidebar';
import Newsletter from '../components/Newsletter';
const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6
  useEffect(() => {
    setIsLoading(true);
    fetch("jobs.json").then(res => res.json()).then(data => {

      setJobs(data);
      setIsLoading(false);
    })

  }, [])
  //handle input change
  const [query, setQuery] = useState('');
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  }
  //filter jobs by title
  const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1)

  //radio based button filtering 
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  }
  //button based filtering 
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  }
  //calculate the index range 
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex }
  }
  //function for the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  }
  //function for the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  // main function
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;
    //filtering input items
    if (query) {
      filteredJobs = filteredItems;
    }
    //  category filtering 
    if (selected) {
      filteredJobs = filteredJobs.filter(({ jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate }) => (
        jobLocation.toLowerCase() === selected.toLowerCase() || parseInt(maxPrice) <= selected ||
        salaryType.toLowerCase() === selected.toLowerCase() ||
        experienceLevel.toLowerCase() === selected.toLowerCase() ||
        employmentType.toLowerCase() === selected.toLowerCase()||
        postingDate>=selected
      ))
      console.log(filteredJobs);
    }
    //slice the data based on currentPage
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);
    return filteredJobs.map((data) => <Card data={data} />)
  }
  const result = filteredData(jobs, selectedCategory, query)
  return (
    <div ><Banner query={query} handleInputChange={handleInputChange} />

      <div className='bg-[#FAFAFA] md:grid grid-cols-4  gap-8 lg:px-24 px-4 py-12'>
        <div className='bg-white p-4 rounded'><Sidebar handleChange={handleChange} handleClick={handleClick} /></div>
        <div className='col-span-2 bg-white p-4 rounded'>
          {isloading ? (<p className='font-medium'>Loading....</p>) : result.length > 0 ? (<Jobs1 result={result} />) : <>
            <h3 className='text-lg font-bold mb-2'>{result.length} Jobs</h3>
            <p>No data found!</p></>}
          {/* //pagination */}
          {
            result.length > 0 ? (
              <div className='flex justify-center mt-4 space-x-8'>
                <button onClick={prevPage} disabled={currentPage === 1} className='hover:underline'>Previous</button>
                <span className='mx-2'>Page {currentPage} of {Math.ceil(filteredItems.length / itemsPerPage)}</span>
                <button onClick={nextPage} disabled={currentPage === Math.ceil(filteredItems.length / itemsPerPage)} className='hover:underline'>Next</button>
              </div>) : ""
          }
        </div>
        <div className='bg-white p-4 rounded'>
          <Newsletter/>
        </div>



      </div>
    </div>
  )
}

export default Home