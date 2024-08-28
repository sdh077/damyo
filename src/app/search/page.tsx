import HeaderBack from '@/components/HeaderBack';
import { Input } from '@/components/ui/input';
import React from 'react'
import { BsArrowLeft } from "react-icons/bs";

export default function page() {
  return (
    <div className='mx-4'>
      <HeaderBack title='검색' />
      <Input color='#F4F6FE' placeholder='검색어를 입력해주세요' className='bg-[#F4F6FE] px-5' />
    </div>
  )
}
