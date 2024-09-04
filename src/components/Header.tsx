'use client'
import { BiSearch, BiBell } from "react-icons/bi";
import statusbar from '@public/statusbar.png'
import profile from '@public/profile.png'
import Image from "next/image";
import Logo from "./Logo";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import { useStore } from "@/zustand/store";
import { usePathname } from "next/navigation";
import IconWrapper from "./IconWrapper";


export default function Header() {
    const pathname = usePathname()
    const titleObject: { [x: string]: string } = {
        '/main': '',
        '/main/manual': '매뉴얼',
        '/main/schedule': '스케줄',
        '/main/work': '출퇴근',
        '/main/stock': '재고'
    }
    return (
        <div className="max-w-[500px] bg-[#fafafa]">
            {/* <div className="flex justify-between">
                <div className="w-[70px] h-[54px] grid place-items-center font-semibold text-md">9:41</div>
                <Image alt="" src={statusbar} width={140} height={54} />
            </div> */}
            <div className="flex justify-between pl-5 pr-[10px] py-2 w-full content-center">
                <div className="w-[106px] ">
                    <Link href='/main' className="flex gap-2">
                        <Logo />
                        {/* <div className="logo-font text-[32px] ml-2">{titleObject[pathname] ?? '담요'}</div> */}
                        <div className="grid content-center font-bold text-lg">{titleObject[pathname] || '담요'}</div>
                    </Link></div>
                <div className="grid grid-cols-3 content-center">
                    <Link href={"/search"} >
                        <IconWrapper><BiSearch className="w-6 h-6" /></IconWrapper >
                    </Link>
                    <IconWrapper>
                        <BiBell className="w-6 h-6" />
                        <div className="absolute top-1.5 left-5 rounded-full bg-primary text-white text-xs w-4 h-4 inline-block text-center align-middle">5</div>
                    </IconWrapper>
                    <IconWrapper>
                        <DD />
                    </IconWrapper>
                </div>
            </div>
        </div>
    )
}

function DD() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Image alt="" src={profile} width={30} height={30} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem><Link href={"/main/profile"}>Profile</Link></DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}