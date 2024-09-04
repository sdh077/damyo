import React, { } from 'react'

import { BsChevronLeft } from 'react-icons/bs'
import { Chat } from './chat';
import { SideDrawer } from './side';
import Link from 'next/link';


export default function page() {
  return (
    <div className='h-screen flex flex-col justify-between overflow-hidden'>
      <div className='flex items-center justify-between px-5 py-4'>
        <div className='flex items-center justify-between gap-2'>
          <Link href={'/main'}><BsChevronLeft /></Link>신대호
        </div>
        <SideDrawer />
      </div>
      <Chat />
    </div>
  )
}
