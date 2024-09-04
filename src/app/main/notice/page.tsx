import React, { Fragment } from 'react'
import profile1 from '@public/profile/profile1.png'
import mainImage from '@public/notice.png'
import Image, { StaticImageData } from 'next/image'
import { BsThreeDots, BsDot } from "react-icons/bs";
import Title from '@/components/Title';
import { Button } from '@/components/ui/button';
import IconWrapper from '@/components/IconWrapper';

interface NoticeInfo {
  id: number
  profile: StaticImageData,
  name: string,
  mainImage?: StaticImageData
  title: string,
  date: string,
  content: string,
  readCount: number
}

export default function page() {
  const notices: NoticeInfo[] = [
    {
      id: 1,
      profile: profile1,
      name: '사장',
      mainImage: mainImage,
      title: '커피컵',
      date: '7월18일',
      content: '커피컵 배달 예정. 도착시간 12정도. 받으면 반정도는 홀에 반은 참고에 넣어두세요',
      readCount: 3,
    }, {
      id: 2,
      profile: profile1,
      name: '사장',
      title: '커피컵',
      date: '7월18일',
      content: '커피컵 배달 예정. 도착시간 12정도. 받으면 반정도는 홀에 반은 참고에 넣어두세요',
      readCount: 3,
    }
  ]
  return (
    <div className='flex flex-col	gap-4 '>
      {notices.map((notice, i) =>
        <Card key={notice.id} {...notice} />
      )}
    </div>
  )
}

function Card({ profile, name, mainImage, title, date, content, readCount }: NoticeInfo) {
  return (
    <div className='pb-4 bg-white'>
      <div className='mx-8 flex items-center justify-between my-4'>
        <div className='flex items-center gap-2 '>
          <Image src={profile} alt='' width={30} height={30} />
          <div className='font-semibold'>{name}</div>
        </div>
        <IconWrapper>
          <BsThreeDots />
        </IconWrapper>
      </div>
      {mainImage && <div className='w-full h-64'>
        <Image src={mainImage} height={256} alt='' />
      </div>}
      <div className='my-4 mx-8'>
        <div className='flex items-end '>
          <Title title={title} />
          <div className='text-gray'>{date}</div>
        </div>
        <div>
          {content}
        </div>
        <div className='mt-4 flex items-center justify-between'>
          <div className='text-[#777]'>읽은 사람 {readCount}</div>
          <Button variant={'outline'}><BsDot className='text-3xl' />확인해주세요</Button>
        </div>
      </div>
    </div>
  )
}
