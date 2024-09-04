'use client'

import HeaderBack from '@/components/HeaderBack';
import IconWrapper from '@/components/IconWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs";

export default function page() {
  return (
    <div className='mx-4'>
      <HeaderBack title='검색' />
      <div className='h-14 w-full bg-[#F4F6FE] px-5 flex items-center justify-between'>
        <input placeholder='검색어를 입력해주세요' className='b-0 outline-none w-full bg-[#F4F6FE] ' />
        <IconWrapper>
          <BsSearch />
        </IconWrapper>
      </div>
      <LatestSearch />
    </div>
  )
}

function LatestSearch() {
  const [choice, setChoice] = useState(0)
  const keywords = [
    { text: '메뉴얼', count: 3 },
    { text: '재고', count: 3 },
    { text: '근태', count: 3 }
  ]
  return (
    <>
      <div className='my-6 px-5 flex items-center justify-between pb-2.5 border-b-[1px] font-medium'>
        <div>최근검색</div>
        <div className='flex text-gray text-sm gap-2.5'>
          <div className='cursor-pointer'>전체삭제</div>
          <div className='cursor-pointer'>자동저장 끄기</div>
        </div>
      </div>
      <div className='flex gap-2.5'>
        <Button onClick={() => setChoice(0)} variant={choice === 0 ? 'secondaryActive' : 'secondary'} className="shadow px-4 py-2.5">통합</Button>
        {keywords.map((keyword, i) =>
          <Button key={keyword.text} onClick={() => setChoice(i + 1)} variant={choice === i + 1 ? 'secondaryActive' : 'secondary'} className="shadow px-4 py-2.5">{keyword.text} {keyword.count}</Button>
        )}
      </div>
    </>
  )
}