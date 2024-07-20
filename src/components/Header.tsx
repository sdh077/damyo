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


export default function Header() {
    const pathname = usePathname()
    const titleObject: { [x: string]: string } = {
        '/': '',
        '/manual': '매뉴얼',
        '/schedule': '스케줄',
        '/work': '출퇴근',
        '/stock': '재고'
    }
    return (
        <div className="">
            {/* <div className="flex justify-between">
                <div className="w-[70px] h-[54px] grid place-items-center font-semibold text-md">9:41</div>
                <Image alt="" src={statusbar} width={140} height={54} />
            </div> */}
            <div className="flex justify-between pl-5 pr-[10px] py-2 w-full content-center">
                <div className="w-[106px] "><Link href='/' className="flex">
                    <Logo />
                    <div className="logo-font text-[32px] ml-2">담요</div>
                </Link></div>
                <div className="grid content-center font-bold text-lg">{titleObject[pathname] ?? ''}</div>
                <div className="w-[86px] grid grid-cols-3 gap-2 content-center">
                    <BiSearch className="w-[24px] h-[24px]" />
                    <BiBell className="w-[24px] h-[24px]" />
                    <DD />
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
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}