'use client'
import { Container } from '@/components/Container'
import Title from '@/components/Title'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div className='mx-4'>
            <div>
                <div className='flex justify-between my-4'>
                    <Title title={'스케줄'} />
                    <div className='grid grid-cols-2 gap-2 '>
                        <Link href={''}><Button variant={'link'} color='primary'>변경 요청</Button></Link>
                        <Link href={''}><Button variant={'link'} color='primary'>교환 요청</Button></Link>
                    </div>
                </div>
                <Container>
                    <div className='grid grid-cols-7 gap-0 w-fit place-items-center justify-center mx-auto mt-6'>
                        <div className=''>Mo</div>
                        <div className=''>Tu</div>
                        <div className=''>We</div>
                        <div className=''>Th</div>
                        <div className=''>Fr</div>
                        <div className=''>Sa</div>
                        <div className=''>Su</div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
