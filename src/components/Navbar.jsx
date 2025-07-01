import React from 'react'

import Logo from "../movielogo.png"
import WatchList from './WatchList'

import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='flex border space-x-4  items-center pl-5 py-1'>
        <img className='w-[50px]' src={Logo}  alt=""/>

        <Link to='/' className='text-blue-400 text-3xl font-bold '>Movies</Link>
        <Link to='/WatchList' className='text-blue-400 text-3xl font-bold '>WatchList</Link>
    </div>
  )
}
