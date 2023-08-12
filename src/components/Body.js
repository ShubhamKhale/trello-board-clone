import React from 'react'
// import Filter from './Filter'
import List from './List'

const Body = () => {
  return (
    <div className='w-full p-3'>
        {/* <Filter /> */}
        <div className='flex flex-wrap'>
          <List /> 
        </div>
    </div>
  )
}

export default Body