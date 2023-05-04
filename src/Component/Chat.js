import React from 'react'
import Messages from './Messages'
import Input from './Input'

export default function Chat() {
  return (
    <>
    <div className=' flex-[2]  bg-[#bbcdfd] h-[100vh]'>
      <div className=' chatinfo h-12 bg-[#708ddf] p-3'>Jane</div>
      <Messages/>
      <Input/>
    </div>
    </>
  )
}
