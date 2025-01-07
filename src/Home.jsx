import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
      <div>
          <div className=' h-screen w-screen flex flex-col justify-center items-center mx-auto'>

              <Link to='/quiz' className=' bg-zinc-600 text-white p-2 rounded-lg m-2'>Quiz App</Link>
              <Link to='/form' className=' bg-zinc-600 text-white p-2 rounded-lg m-2'>Quiz Form App</Link>
          </div>
      </div>
  )
}

export default Home