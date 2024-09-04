import React from 'react'
import bg from '@public/profile/bg.png'
import profile from '@public/profile/profile1.png'
import Image from 'next/image';
import IconWrapper from '@/components/IconWrapper';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/Container';
import Title from '@/components/Title';
import { BsFileEarmarkText, BsClipboard2Heart } from "react-icons/bs";

export default function page() {
  const profileInfo = [
    {
      key: '닉네임',
      value: '사장님',
      sub: ''
    }, {
      key: '근무지',
      value: '파브스',
      sub: '2녀 6개월'
    }, {
      key: '전화번호',
      value: '010-1234-5678',
      sub: ''
    }
  ]
  return (
    <div className='mx-4'>
      <div className='flex flex-row-reverse'>
        <Button variant={'ghost'} className='text-sm text-gray'>수정하기</Button>
      </div>
      <div className='flex items-center gap-4'>
        <Image src={profile} alt='프로필' width={55} height={55} />
        <div className='flex items-center gap-2'>
          <span className='font-semibold text-lg'>김현주</span>
          <span className='font-medium text-sm text-gray'>파브스</span>
        </div>
      </div>
      <div className='mt-2.5'>
        <Container className='p-5'>
          {profileInfo.map(profile =>
            <div className='flex items-center justify-between' key={profile.key}>
              <div className='font-semibold'>{profile.key}</div>
              <div>
                {profile.value}
                <span className='text-sm text-gray'>{profile.sub}</span>
              </div>
            </div>
          )}
          <div className='mt-6 flex gap-4'>
            <Button className='w-full'><BsFileEarmarkText /> 근로계약서</Button>
            <Button className='w-full'><BsClipboard2Heart /> 보건증</Button>
          </div>
        </Container>
        <div className='my-4'>
          <Title title={'근무이력상세'} />
        </div>
        <Container className='p-5'>
          <div className='font-semibold'><span className='text-primary'>#1</span> 스타벅스</div>
          <div>근무날짜 : 7/10/2021 ~ 10/10/2022 <span className='text-gray'>3개월</span></div>
          <div>담당업무 : 바리스타</div>
        </Container>
      </div>
    </div>
  )
}
