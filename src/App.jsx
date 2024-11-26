import React from 'react'
import {Route, createBrowserRouter, 
  createRoutesFromElements,
   RouterProvider,
   } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import HomeCards from './Components/HomeCards'
import JobsListings from './Components/JobsListings'
import ViewAllJobs from './Components/ViewAllJobs'

const App = () => {
  const router = createBrowserRouter(
createRoutesFromElements(<Route index element={<h1>he</h1>} />)
  );
  return (
    <div>
      {/* <RouterProvider router={router} /> */}
      <Navbar />
      <Hero />
      <HomeCards />
      <JobsListings />
      <ViewAllJobs />
 
    </div>
  )
}

export default App