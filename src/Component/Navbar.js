import React from 'react'

export default function Navbar() {
  return (
    <div className=' navbar flex items-center bg-blue-300 h-12 p-3 justify-between'>
        <span className=' logo font-bold'>Chit-Chat</span>
        <div className=' user flex gap-5'>
            <img src='https://images.unsplash.com/photo-1612311375355-c269c3338b8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZHB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt='' className=' bg-slate-600 h-6 w-6 rounded-[50%] object-cover'/>
            <span >Name</span>
            <button className=' bg-blue-500 hover:bg-blue-700 p-1 text-sm rounded-sm'>Logout</button>
        </div>
    </div>
  )
}
