import React from 'react'

export default function Search() {
  return (
    <div className=' search'>
        <div className='SearchForm border-b-2 p-3'>
            <input type='text' className=' bg-transparent border-none text-white outline-none placeholder:text-gray-200' placeholder=' find a User'/>
        </div>
        <div className=' UserChat flex items-center gap-3 p-3 hover:bg-gray-600'>
            <img src='https://images.unsplash.com/photo-1612311375355-c269c3338b8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZHB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='' className=' h-12 w-12 rounded-[50%] object-cover' />
        <div className=' UserChatInfo flex flex-col'>
            <span className=' text-white text-xl font-bold'>Name</span>
            <span className=' text-white text-md'>Test</span>

        </div>    
        </div>
    </div>
  )
}
