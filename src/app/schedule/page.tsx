'use client'
import { Container } from '@/components/Container'
import Title from '@/components/Title'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import timeline from '@public/timeline.png'
import Image from 'next/image'
export default function page() {
    return (
        <div className='mx-4'>
            <div>
                <div className='flex justify-between my-4'>
                    <Title title={'스케줄'} />
                    <div className='grid grid-cols-2 gap-2 '>
                        <Link href={''}><Button variant={'link'} color='primary' className='opacity-40' >변경 요청</Button></Link>
                        <Link href={''}><Button variant={'link'} color='primary' className='opacity-40'>교환 요청</Button></Link>
                    </div>
                </div>
                <Container className='p-4'>
                    <div className='grid grid-cols-8 gap-0 w-full place-items-center justify-between mt-6'>
                        <div>
                            <BiChevronLeft />
                        </div>
                        <div className=''>
                            <div>13</div>
                            <div>Mo</div>
                        </div>
                        <div className=''>
                            <div>14</div>
                            <div>Tu</div>
                        </div>
                        <div className=''>
                            <div>15</div>
                            <div>We</div>
                        </div>
                        <div className=''>
                            <div>16</div>
                            <div>Th</div>
                        </div>
                        <div className=''>
                            <div>17</div>
                            <div>Fr</div>
                        </div>
                        <div className=''>
                            <div>18</div>
                            <div>Sa</div>
                        </div>
                        <div>
                            <BiChevronRight />
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='flex flex-col w-[15%]'>
                            <div>09:00</div>
                            <div>10:00</div>
                            <div>11:00</div>
                            <div>12:00</div>
                            <div>13:00</div>
                            <div>14:00</div>
                            <div>15:00</div>
                            <div>16:00</div>
                            <div>17:00</div>
                            <div>18:00</div>
                        </div>
                        <div className='relative w-[85%] grid gap-1.5 pt-2 text-[8px] text-center text-primary-500'>
                            <hr />
                            <hr />
                            <hr />
                            <hr />
                            <hr />
                            <hr />
                            <hr />
                            <hr />
                            <hr />
                            <hr />
                            <div className='absolute border-2 border-primary-600 rounded-md w-12 h-[100px] bg-primary-200 top-0 left-0'><div>오픈</div>09:00~12:00</div>
                            <div className='absolute border-2 border-primary-600 rounded-md w-12 h-[100px] bg-primary-200 top-0 left-[52px]'><div>오픈</div>09:00~12:00</div>
                            <div className='absolute border-2 border-primary-600 rounded-md w-12 h-[100px] bg-primary-200 top-0 left-[104px]'><div>오픈</div>09:00~12:00</div>
                            <div className='absolute border-2 border-primary-600 rounded-md w-12 h-[100px] bg-primary-200 top-[100px] left-[156px]'><div>마감</div><div>13:00~15:00</div></div>
                            <div className='absolute border-2 border-primary-600 rounded-md w-12 h-[100px] bg-primary-200 top-[100px] left-[208px]'><div>마감</div><div>13:00~15:00</div></div>
                        </div>
                    </div>

                </Container>
                {/* <div className='mx-4'>
                    <div className='my-2 flex h-full'>
                        <div className='bg-primary text-white w-4 text-center align-middle h-max'>6</div>
                        <div>
                            <div>
                                07/14/오픈
                            </div>
                            <div>
                                10:00~15:00 to 10:00~14:00
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
