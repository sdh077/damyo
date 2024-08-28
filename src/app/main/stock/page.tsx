'use client'
import Title from '@/components/Title'
import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Container } from '@/components/Container'
import { fontSmall, fontTitle } from '@/components/Font'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

type IStatus = '정상' | '요청' | '주문';
interface IStock { title: string, category: string, status: IStatus }

export default function page() {
    const stocks: IStock[] = [
        {
            title: 'SL28 EM',
            category: '커피 원두',
            status: '정상'
        },
        {
            title: '콜롬비아 수프리모',
            category: '커피 원두',
            status: '요청'
        }, {
            title: 'SL28 EM1',
            category: '커피 원두',
            status: '정상'
        },
        {
            title: '콜롬비아 수프리모2',
            category: '커피 원두',
            status: '요청'
        }, {
            title: 'SL28 EM3',
            category: '커피 원두',
            status: '정상'
        },
        {
            title: '콜롬비아 수프리모4',
            category: '커피 원두',
            status: '주문'
        }, {
            title: 'SL28 EM5',
            category: '커피 원두',
            status: '정상'
        },
        {
            title: '콜롬비아 수프리모6',
            category: '커피 원두',
            status: '요청'
        }
    ]
    return (
        <div className='mx-4'>
            <div className='flex justify-between'>
                <Title title={'재고 요청'} />
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="정렬" defaultValue={'name'} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="name">이름순</SelectItem>
                        <SelectItem value="category">카테고리순</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <Container className='px-4 py-4 mt-4'>
                {stocks.map(stock =>
                    <div className='flex justify-between my-2' key={stock.title}>
                        <div>
                            <div className='text-lg'>{stock.title}</div>
                            <div className={fontSmall}>{stock.category}</div>
                        </div>
                        <StockStatus init={stock.status} />
                    </div>
                )}
            </Container>
        </div>
    )
}

function StockStatus({ init }: { init: IStatus }) {
    const [status, setStatus] = useState<IStatus>(init)
    const statusBtn: { [x: string]: string } = {
        '정상': 'bg-transparent text-black',
        '요청': 'bg-primary text-white',
        '주문': 'bg-secondary text-white'
    }
    return (
        <div>
            <Button variant={'outline'} className={cn(statusBtn[status])}
                onClick={() => setStatus(status === '정상' ? '요청' : status === '요청' ? '주문' : '정상')}
            >{status}</Button>
        </div>
    )
}