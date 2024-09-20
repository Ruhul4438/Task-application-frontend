import React from 'react'
import Navbar from '../Navbar'
import BottomNavbar from '../BottomNavbar'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'

export default function TwitterTask() {
  return (
    <div>
         <Navbar title=" Task Home"/>
        <div className='h-[80vh]'>
           <Card1/> 
           <Card2/> 
           <Card3/> 
        </div>
        <BottomNavbar/>
    </div>
  )
}
