import React from 'react'
import { BsXLg, BsChatDots, BsFileEarmark, BsGear } from "react-icons/bs";
import bg from '@public/profile/bg.png'
import profile2 from '@public/profile/profile2.png'
import Image from 'next/image';
import IconWrapper from '@/components/IconWrapper';

export default function page() {
  return (
    <div className='fixed w-full top-16 right-0'>
      <div className="relative w-full h-[calc(100vh-150px)]">
        <Image
          src={bg}
          alt="메인 배경 이미지"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <div className='absolute top-8 right-8'><BsXLg /></div>
        <div className='absolute right-0 top-24 w-full flex flex-row-reverse'>
          <div className='w-[80%] flex items-center justify-center py-4 gap-8 bg-white rounded-l-2xl'>
            <Image alt='' src={profile2} width={60} height={60} />
            <div className='text-xl text-semibold'>임준우</div>
          </div>
        </div>
        <div className='absolute right-0 top-52 w-full flex flex-row-reverse'>
          <div className='w-[60%] flex items-center justify-center py-4 gap-8 bg-[#18181B] rounded-l-2xl'>
            <div className='text-white'>보건증</div>
          </div>
        </div>
        <div className='absolute right-0 top-72 w-full flex flex-row-reverse'>
          <div className='w-[60%] flex items-center justify-center py-4 gap-8 bg-[#18181B] rounded-l-2xl'>
            <div className='text-white'>근로계약서</div>
          </div>
        </div>

        <div className='absolute bottom-12 left-0 w-full'>
          <div className='flex items-center justify-between mx-8'>
            <IconWrapper className='bg-white rounded-xl'><BsChatDots /></IconWrapper>
            <IconWrapper className='bg-white rounded-xl'><BsFileEarmark /></IconWrapper>
            <IconWrapper className='bg-white rounded-xl'><BsGear /></IconWrapper>
          </div>
        </div>
      </div>
    </div>
  )
}
