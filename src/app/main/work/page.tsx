'use client'
import { Container } from '@/components/Container'
import { fontSmall, fontTitle } from '@/components/Font'
import Title from '@/components/Title'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import calendar from '@public/caldendar.png'
import { cn } from '@/lib/utils'
import { BiChevronRight } from "react-icons/bi";
import Link from 'next/link'

export default function page() {
    const days = [1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    const box = 'p-4 w-14 h-14 text-sm flex items-center justify-center border-[0.5px]'
    const boxColor: { [x: number]: string } = {
        0: '',
        1: 'bg-primary text-white',
        2: 'bg-primary-500 text-white',
    }
    return (
        <div className='mx-4'>
            <Container className='text-center w-full py-8 mb-16'>
                <div className='text-gray-500'>7/10 수요일</div>
                <div className='text-4xl font-semibold'>11:18:48</div>
                <Button className='font-bold rounded-full my-2' size={'lg'} variant='outline'>출근하기</Button>
                <div className={fontSmall + 'mt-8 h-16 flex items-center justify-center'}>
                    내 근무 시간
                    <div className='shadow inline px-4 py-1 ml-1 rounded-md'>09:00~18:00</div>
                </div>
            </Container>
            <div className='flex justify-between mb-2'>
                <Title title={'출석현황 '} />
                <Link href={'work/statistics'}><div className='flex'>통계 보기 <BiChevronRight size={'24px'} /></div></Link>
            </div>
            <Container className='px-4 py-6'>
                <div className='font-bold text-2xl'>May 2023</div>
                <div className='grid grid-cols-7 gap-0 w-fit place-items-center justify-center mx-auto mt-6'>
                    <div className={box}>Mo</div>
                    <div className={box}>Tu</div>
                    <div className={box}>We</div>
                    <div className={box}>Th</div>
                    <div className={box}>Fr</div>
                    <div className={box}>Sa</div>
                    <div className={box}>Su</div>
                    {days.map((day, i) =>
                        <div key={i} className={cn(box, boxColor[day])}>{i + 1}</div>
                    )}
                </div>
            </Container>
        </div>
    )
}
