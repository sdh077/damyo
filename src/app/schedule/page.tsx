'use client'
import { Container } from '@/components/Container'
import Title from '@/components/Title'
import Link from 'next/link'
import React from 'react'

export default function page() {
    return (
        <div className='mx-4'>
            <div>
                <div className='flex justify-between my-4'>
                    <Title title={'스케줄'} />
                    <div>
                        <Link href={''}>변경 요청</Link>
                        <Link href={''}>교환 요청</Link>
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
