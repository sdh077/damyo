import React from 'react'
import { BsArrowLeft } from 'react-icons/bs'

export default function HeaderBack({ title }: { title: string }) {
  return (
    <div className='flex justify-between items-center'>
      <BsArrowLeft className='my-4' />
      <div className='font-semibold text-lg'>{title}</div>
      <div />
    </div>
  )
}
