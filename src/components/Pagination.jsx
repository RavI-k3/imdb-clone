import React from 'react'

function Pagination({handelPREV, handleNEXT, pageNo}) {
  return (
    <div className='bg-gray-400 mt-8 p-4 mb-6 flex justify-center'>
            <div onClick={handelPREV} className='px-8   hover:scale-200 duration-300 hover:cursor-pointer'><i className="fa-solid fa-arrow-left bg-white rounded-xl"></i></div>
            <div className='font-bold'>{pageNo}</div>

            <div onClick={handleNEXT} className='px-8 hover:scale-200 duration-300 hover:cursor-pointer'><i className="fa-solid fa-arrow-right  bg-white rounded-xl"></i></div>


    </div>
  )
}

export default Pagination