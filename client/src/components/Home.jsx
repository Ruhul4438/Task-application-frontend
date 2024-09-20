import React from 'react'
import Navbar from './Navbar'
import SocialmediaTask from './SocialmediaTask'
import BottomNavbar from './BottomNavbar'

export default function Home() {
  return (
    <div>
        <Navbar title="Home"/>
        <div className='h-[80vh]'>
            <SocialmediaTask/>
        </div>
        <BottomNavbar/>
    </div>
  )
}
