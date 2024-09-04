import { Container } from '@/components/Container'
import { fontSmall, fontTitle } from '@/components/Font'
import { cn } from '@/lib/utils'
import React from 'react'
import Image from "next/image";
import profile from '@public/profile/profile1.png'

export default function page() {
    return (
        <div className=''>
            <div className='bg-white px-5 py-4 h-[calc(100vh-320px)]'>
                <div className='flex justify-between'>
                    <div className={cn(fontTitle, 'text-3xl mb-1')}>손님 입장시 응대 방법</div>
                    <div className='flex flex-col justify-end'>
                        <Image src={profile} width={32} height={32} alt="" />
                        <div className={cn(fontSmall, 'mb-4 text-gray-500')}>
                            <div>
                                김현주
                            </div>
                            <div className='text-xs'>
                                24.07.01
                            </div>
                        </div>

                    </div>
                </div>
                <div className={cn(fontSmall, 'mb-4 text-gray-500')}>고객응대</div>
                <div className="tracking-wide mb-4">메뉴얼 내용 industry. Lorem Ipsum has been the industry&aposs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised </div>
                <div className={cn(fontSmall, 'mb-4 text-gray-500')}>읽은 사람 4</div>
            </div>
            <div className={cn('bg-white px-5 py-4 mt-4', fontSmall)}>
                <div className='flex'>
                    <div>
                        이전글
                    </div>
                    <div className='mx-4 text-[#999]'>|</div>
                    <div>
                        고객응대에 대한 메뉴얼
                    </div>
                </div>
                <hr className='my-2 border-t-[1px] bg-[#999]' />
                <div className='flex'>
                    <div>
                        다음글
                    </div>
                    <div className='mx-4 text-[#999]'>|</div>
                    <div>
                        음료제조에 대한 메뉴얼
                    </div>
                </div>
            </div>
        </div>
    )
}
