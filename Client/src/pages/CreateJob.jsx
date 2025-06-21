import React from 'react'
import { useForm } from "react-hook-form"
import CreatableSelect from "react-select/creatable"
import { useState } from 'react'
const CreateJob = () => {
  const [selectedOption, setSelectedOption] = useState(null);
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const options=[
    {value:"Javascript" ,label:"Javascript"},
    {value:"Python" ,label:"Python"},
    {value:"Java" ,label:"Java"},
    {value:"C++" ,label:"C++"},
    {value:"C#" ,label:"C#"},
    {value:"PHP" ,label:"PHP"},
    {value:"Ruby" ,label:"Ruby"},
    {value:"HTML" ,label:"HTML"},
    {value:"CSS" ,label:"CSS"},
    {value:"SQL" ,label:"SQL"},
    {value:"React" ,label:"React"},
    {value:"Angular" ,label:"Angular"},
    {value:"Vue" ,label:"Vue"},
    {value:"Node.js" ,label:"Node.js"},
    {value:"Express.js" ,label:"Express.js"},
    {value:"Django" ,label:"Django"},
    {value:"Flask" ,label:"Flask"},
    {value:"Spring" ,label:"Spring"},
    {value:"Laravel" ,label:"Laravel"},
    {value:"Ruby on Rails" ,label:"Ruby on Rails"},
    {value:"ASP.NET" ,label:"ASP.NET"},
    {value:"PHP Laravel" ,label:"PHP Laravel"},

  ]
  const onSubmit = (data) => console.log(data)

  console.log(watch("example"))
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 '>
      <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16 ' >
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
     
      <div className='create-job-flex'>
        <div className="lg:w-1/2 w-full">
        <label className='block mb-2 text-lg'>Job Title</label>
        <input type="text" defaultValue={"Web Developer"} {...register("jobTitle")} className='create-job-input'/>
        </div>
          <div className="lg:w-1/2 w-full">
        <label className='block mb-2 text-lg'>Company Name</label>
        <input type="text" placeholder='Ex: Microsoft' {...register("companyName")} className='create-job-input'/>
        </div>
      </div>
      <div className='create-job-flex'>
        <div className="lg:w-1/2 w-full">
        <label className='block mb-2 text-lg'>Minimum Salary</label>
        <input type="text" placeholder='$20k' {...register("minPrice")} className='create-job-input'/>
        </div>
          <div className="lg:w-1/2 w-full">
        <label className='block mb-2 text-lg'>Maximum Salary</label>
        <input type="text" placeholder='$120k' {...register("maxPrice")} className='create-job-input'/>
        </div>
      </div>
      <div className='create-job-flex'>
        <div className="lg:w-1/2 w-full">
        <label className='block mb-2 text-lg'>Salary Type</label>
      <select {...register("salaryType", { required: true })} className='create-job-input'>
        <option value="">Choose your salary</option>
        <option value="Hourly">Hourly</option>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select>
        </div>
          <div className="lg:w-1/2 w-full">
        <label className='block mb-2 text-lg'>Job Location</label>
        <input type="text" placeholder='Seattle' {...register("jobLocation")} className='create-job-input'/>
        </div>
      </div>

       <div className='create-job-flex'>
           <div className="lg:w-1/2 w-full">
        <label className='block mb-2 text-lg'>Job Posting Date</label>
        <input type="date"  {...register("postingDate")} className='create-job-input'/>
        </div>
        <div className="lg:w-1/2 w-full">
        <label className='block mb-2 text-lg'>Experience Level</label>
      <select {...register("experienceLevel", { required: true })} className='create-job-input'>
        <option value="">Choose your experience</option>
        <option value="No experience">No experience</option>
        <option value="Any Experience">Any Experience</option>
        <option value="Internship">Internship</option>
         <option value="Work remotely">Work remotely</option>
      </select>
        </div>
       
      </div>
      <div>
          <label className='block mb-2 text-lg'>Required Skill Sets:</label>
          <CreatableSelect  defaultValue={selectedOption} onChange={setSelectedOption} options={options} isMulti
          className='create-job-input py-4 '/>

      </div>
       <div className='create-job-flex'>
           <div className="lg:w-1/2 w-full">
        <label className='block mb-2 text-lg'>Company Logo</label>
        <input type="url" placeholder='Paste your Company Logo url: https://example.com/img1' {...register("companyLogo")} className='create-job-input'/>
        </div>
        <div className="lg:w-1/2 w-full">
        <label className='block mb-2 text-lg'>Employment Type</label>
      <select {...register("employmentType", { required: true })} className='create-job-input'>
        <option value="">Choose your experience</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Temporary">Temporary</option>
     
      </select>
        </div>
       
      </div>
<div className='w-full'>
     <label className='block mb-2 text-lg'>Job Description:</label>
     <textarea className='w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700' row={6} placeholder='Job Description' {...register("description")}/>
</div>
<div className='w-full'>
    <label className='block mb-2 text-lg'>Job Posted By</label>
     <input type="email" placeholder='your email' {...register("postedBy")} className='create-job-input'/>
</div>
      <input type="submit"  className='my-5 mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer'/>
    </form>
      </div>

    </div>
  )
}
export default CreateJob