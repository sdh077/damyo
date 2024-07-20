'use client'
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiBookAlt, BiTimeFive, BiCalendar, BiCube } from "react-icons/bi";

export default function Footer() {
    const pathname = usePathname()
    const active = 'text-primary'
    return (
        <div className="h-full flex justify-between mx-4 mb-8 ">
            <div className={cn("mx-auto", pathname.includes('manual') ? active : '')}><Link href={"/manual"} ><div className="flex justify-center"><BiBookAlt /></div>매뉴얼</Link></div>
            <div className={cn("mx-auto", pathname.includes('schedule') ? active : '')}><Link href={"/schedule"} ><div className="flex justify-center"><BiTimeFive /></div>스케줄</Link></div>
            <div className={cn("mx-auto", pathname.includes('work') ? active : '')}><Link href={"/work"} ><div className="flex justify-center"><BiCalendar /></div>출퇴근</Link></div>
            <div className={cn("mx-auto", pathname.includes('stock') ? active : '')}><Link href={"/stock"} ><div className="flex justify-center"><BiCube /></div>재고</Link></div>
        </div>
    )
}