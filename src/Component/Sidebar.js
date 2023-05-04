import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

export default function Sidebar() {
  return (
    <div className=' flex-1  bg-gray-400'>
        <Navbar/>
        <Search/>
       <div className='bg-gray-400 overflow-y-scroll max-h-96'>
       <Chats/>
        <Chats/>
        <Chats/>
        <Chats/>
        <Chats/>
        <Chats/>
        <Chats/>
        <Chats/>
        <Chats/>
        <Chats/>
        
       </div>
    </div>
  )
}
