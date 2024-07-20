import Link from "next/link";
import { BiBookAlt, BiTimeFive, BiCalendar, BiCube } from "react-icons/bi";

export default function Footer() {
    return (
        <div className="h-full flex justify-between mx-4 mb-8 ">
            <div className="mx-auto"><Link href={"/manual"} ><div className="flex justify-center"><BiBookAlt /></div>매뉴얼</Link></div>
            <div className="mx-auto"><Link href={"/schedule"} ><div className="flex justify-center"><BiTimeFive /></div>스케줄</Link></div>
            <div className="mx-auto"><Link href={"/work"} ><div className="flex justify-center"><BiCalendar /></div>출퇴근</Link></div>
            <div className="mx-auto"><Link href={"/stock"} ><div className="flex justify-center"><BiCube /></div>재고</Link></div>
        </div>
    )
}