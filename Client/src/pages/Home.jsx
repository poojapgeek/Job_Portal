import React from 'react'
import Banner from '../components/Banner'
import { useState ,useEffect} from 'react'
import Card from '../components/Card';
import Jobs1 from '../components/Jobs1';
const Home = () => {
  const [selectedCategory,setSelectedCategory]=useState(null);
  const [jobs,setJobs]=useState([]);
  useEffect(()=>{
    fetch("jobs.json").then(res=>res.json()).then(data=>{
     
      setJobs(data);
    })

  },[])
  //handle input change
   const [query,setQuery]=useState('');
      const handleInputChange=(e)=>{
          setQuery(e.target.value);
      }
      //filter jobs by title
     const filteredItems=jobs.filter((job)=>job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  
     //radio based button filtering 
     const handleChange=(e)=>{
      setSelectedCategory(e.target.value);
     }
     //button based filtering 
     const handleClick=(e)=>{
      setSelectedCategory(e.target.value);
     }
    // main function
     const filteredData=(jobs,selected,query)=>{
      let filteredJobs=jobs;
      //filtering input items
      if(query){
        filteredJobs=filteredItems;
      }
      //  category filtering 
      if(selected){
        filteredJobs=filteredJobs.filter(({jobLocation,maxPrice,experienceLevel,salaryType,employmentType,postingDate})=>(
          jobLocation.toLowerCase() === selected.toLowerCase()|| parseInt(maxPrice)<=selected||
          salaryType.toLowerCase() === selected.toLowerCase()||
          experienceLevel.toLowerCase() === selected.toLowerCase()||
          employmentType.toLowerCase() === selected.toLowerCase()
        ))
        console.log(filteredJobs);
      }
      return filteredJobs.map((data)=><Card data={data}/>)
     }
     const result=filteredData(jobs,selectedCategory,query)
  return (
    <div ><Banner query={query} handleInputChange={handleInputChange}/>
    <div>
   <Jobs1 result={Array.isArray(result) ? result : []} />

    </div>
    </div>
  )
}

export default Home