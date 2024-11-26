import React from 'react'
import { useState } from 'react'
import { FaMapMarker } from 'react-icons/fa';



const JobList = ({job}) => {
  const [showFullText, setShowFullText] = useState(false);
  let description = job.description; 
  if(!showFullText){
    description= description.substring(0,90) + " ...";
  }
  const changeText =(prevState)=>{
    setShowFullText((prevState)=>(!prevState))
  }

  
  return (
    <div>
        <div className="bg-white rounded-xl shadow-md relative">
       <div className="p-4">
         <div className="mb-6">
           <div className="text-gray-600 my-2">{job.type}</div>
           <h3 className="text-xl font-bold">{job.title}</h3>
         </div>

         <div className="mb-5">
           {description}
           <button onClick={changeText} className='text-indigo-600 hover:text-indigo-800'>{showFullText ? 'Less': 'More'}</button>
         </div>

         <h3 className="text-indigo-500 mb-2">{job.salary}</h3>
         <div className="border border-gray-100 mb-5"></div>
         <div className="flex flex-col lg:flex-row justify-between mb-4">
           <div className="text-orange-700 mb-3">
          <FaMapMarker className="text-lg mb-2 mr-1 inline" />
            
             {job.location}
           </div>
           <a
             href={job}
             className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
           >
             Read More
           </a>
         </div>
       </div>
     </div>
    </div>
  )
}

export default JobList