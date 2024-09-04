import Link from 'next/link'
import React from 'react'
import { BsChevronLeft } from 'react-icons/bs'

export default function HeaderBack({ title }: { title: string }) {
  return (
    <div className='flex justify-between items-center'>
      <Link href={'/'}><BsChevronLeft className='my-4' /></Link>
      <div className='font-semibold text-lg'>{title}</div>
      <div />
    </div>
  )
}
