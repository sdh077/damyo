'use client'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { InputIcon } from "@/components/ui/inputIcon"
import { Container } from '@/components/Container'
import { fontSmall, fontTitle } from '@/components/Font'
import Link from 'next/link'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import menu1 from '@public/menu/menu1.png'
import Image from 'next/image'
import { BsSearch } from 'react-icons/bs'

export default function page() {
    const recipe = [
        {}
    ]
    return (
        <div className='flex mx-4'>
            <Tabs defaultValue="manual" className="w-full">
                <TabsList className="w-full">
                    <TabsTrigger className="w-[50%] rounded-xl" value="manual">매뉴얼</TabsTrigger>
                    <TabsTrigger className="w-[50%] rounded-xl" value="password">레시피</TabsTrigger>
                </TabsList>
                <TabsContent value="manual">
                    <ManualContent />
                </TabsContent>
                <TabsContent value="password">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <div className='flex'>
                                    <Image src={menu1} alt='' width={55} height={55} className='rounded-md' />
                                    <div className='ml-4'>
                                        <div className={cn(fontTitle)}>#1 아이스아메리카노</div>
                                        <div className={cn(fontSmall, 'text-left')}>샷2, 물 355ml</div>
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div>1. 아이스컵 13OZ에 얼음 2/3를 채운다.</div>
                                <div>2. 물 355ml를 채운다.</div>
                                <div>3. 2샷을 내린다.</div>
                                <div>빨대 포장 위에를 신경써서 드린다.</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </TabsContent>
            </Tabs>
        </div>
    )
}
function ManualContent() {
    const manuals = [
        {
            title: '손님 입장시 응대 방법',
            content: '손님이 들어오면 인사법\n손님 입장시 “어서오세요, 반갑습니다.”라고 합니다.',
            writer: '김현주',
            date: '2024-07-24'
        },
        {
            title: '오픈 타임때 할 todo list',
            content: '환기를 한다....',
            writer: '김현주',
            date: '2024-07-21'
        },
        {
            title: '마감때 할 일 리스트',
            content: '머신을 청소한다./n...',
            writer: '김현주',
            date: '2024-07-21'
        }
    ]
    return (
        <>
            <ManualCategory />
            <div className='my-4'>
                <InputIcon placeholder="무엇을 찾으시나요?" Icon={BsSearch} />
            </div>
            {manuals.map(manual =>
                <Link key={manual.title} href='/main/manual/1'>
                    <Container className='mt-4' >
                        <ManualCard title={manual.title} content={manual.content} writer={manual.writer} date={manual.date} />
                    </Container>
                </Link>
            )}
        </>
    )
}
function ManualCard({ title, content, writer, date }: { title: string, content: string, writer: string, date: string }) {
    return (
        <div className='p-4 py-2.5'>
            <div className={cn(fontTitle, 'my-2')}>{title}</div>
            <div className={''}>{content}</div>
            <div className={cn(fontSmall, 'flex text-gray-500')}>
                <div className='mr-2'>{writer}</div>
                <div>{date}</div>
            </div>
        </div>
    )
}
function ManualCategory() {
    const active = 'bg-secondary text-white'
    const def = 'bg-white text-black'

    return (
        <div className="mx-4">
            <div className="flex gap-6 overflow-x-auto py-4">
                <Button variant={'secondaryActive'} className={cn("shadow")}>고객응대</Button>
                <Button variant={'secondary'} className={cn("shadow")}>음료제조</Button>
                <Button variant={'secondary'} className={cn("shadow")}> 스케줄관리</Button >
                <Button variant={'secondary'} className={cn("shadow")}>카테고리</Button>
                <Button variant={'secondary'} className={cn("shadow")}>신규응대</Button>
                <Button variant={'secondary'} className={cn("shadow")}>재고</Button>
            </div >
        </div >
    )
}
