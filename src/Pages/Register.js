import React from 'react'
import {FcAddImage} from 'react-icons/fc'
export default function Register() {
  return (
    <div className=' form-container bg-[#bbcdfd] h-screen flex justify-center items-center'>
        <div className=' form-wrapper  bg-white lg:pt-3 lg:pb-3 lg:pr-12 lg:pl-12 pt-3 pb-3 pr-4 pl-4 rounded-lg flex flex-col gap-2 items-center'>
            <span className='logo text-[#5d5b8d] font-bold text-2xl'>Chit-Chat</span>
            <span className='title text-[#5d5b8d] text-xl'>Register</span>
            <form className=' flex flex-col gap-4 p-5'>
                <input type='text' placeholder='Name' className=' p-2 border-b-2'/>
                <input type='email' placeholder='Email' className=' p-2 border-b-2'/>
                <input type='password' placeholder='Password' className=' p-2 border-b-2'/>
                <input type='file' id='file' className=' hidden'/>
                <label htmlFor='file' className=' flex gap-3'>
                    <FcAddImage className=' text-4xl'/>
                    <p className=' mt-2 text-[#5d5b8d] text-xl'>Add Image</p> 
                </label>
                <button className=' bg-[#67667e] hover:bg-[#504e8d] p-2 rounded-lg mt-1 lg:mt-2'>Sign Up</button>
            </form>
            <p className=' text-[#5d5b8d] text-xl'>You do have an account? Login</p>
        </div>
    </div>
  )
}
