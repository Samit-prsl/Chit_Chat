import React from 'react'
import Chat from '../Component/Chat'
import Sidebar from '../Component/Sidebar'
export default function Home() {
  return (
        <>
        <div className=' bg-[#bbcdfd]  lg:flex'>
            <Sidebar/>
            <Chat/>
        </div>
        </>
  )
}
