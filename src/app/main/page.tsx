'use client'
import Image from "next/image";
import { BiPlus } from "react-icons/bi";
import { Button } from "@/components/ui/button"
import { Container } from "@/components/Container";
import profile1 from '@public/profile/profile1.png'
import profile2 from '@public/profile/profile2.png'
import profile3 from '@public/profile/profile3.png'
import profile4 from '@public/profile/profile4.png'
import profile5 from '@public/profile/profile5.png'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel"
import Title from "@/components/Title";
import { StaticImageData } from "next/image";
import { fontTitle } from "@/components/Font";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="">
      {/* <div onClick={() => document.location.href = '/work'}>test</div> */}
      <Notice />
      <FavoriteBtn />
      <ChatList />
    </div>
  );
}

function ChatProfile({ src, name, talked, count }: { src: StaticImageData, name: string, talked: string, count: number }) {
  return (
    <div className="mx-4 my-2 flex justify-between">
      <div className="flex gap-3">
        <Image src={src} width={56} height={56} alt="" />
        <div className="pt-1">
          <div className="text-md ">{name}</div>
          <div className="text-sm text-gray-500">{talked}</div>
        </div>
      </div>
      {count !== 0 &&
        <div>
          <div className="rounded-full bg-primary m-2 px-2 min-w-8 py-1 text-white">
            <div className="w-full text-center">
              {count}
            </div>
          </div>
        </div>}
    </div>
  )
}

function ChatList() {
  const users = [
    {
      src: profile1,
      name: '카페 전체방',
      talked: '사장님 급해요!!',
      count: 10
    }, {
      src: profile2,
      name: '임준우',
      talked: '감사합니다',
      count: 0
    }, {
      src: profile3,
      name: '임재성',
      talked: '혹시..',
      count: 1
    }, {
      src: profile4,
      name: '오픈방',
      talked: '재고 확인하신분~',
      count: 5
    }, {
      src: profile5,
      name: '신대호',
      talked: '111111',
      count: 0
    }
  ]
  return (
    <div className="mx-4">
      <Title title={'채팅 리스트'} />

      <Container>
        <div className="grid gap-3 my-4">
          {users.map(user => <ChatProfile key={user.name} src={user.src} name={user.name} talked={user.talked} count={user.count} />)}
        </div>
      </Container>

    </div>
  )
}

function FavoriteBtn() {
  return (
    <div className="mx-4">
      <Title title={'공지사항'} />
      <div className="flex gap-6 overflow-x-auto py-4">
        <Button className="w-12 h-12 bg-gray-300 shadow text-black"><BiPlus /></Button>
        <Button className="w-12 h-12 bg-white shadow text-black">재고</Button>
        <Button className="w-12 h-12 bg-white shadow text-black">재고</Button>
        <Button className="w-12 h-12 bg-white shadow text-black">재고</Button>
        <Button className="w-12 h-12 bg-white shadow text-black">재고</Button>
        <Button className="w-12 h-12 bg-white shadow text-black">재고</Button>
        <Button className="w-12 h-12 bg-white shadow text-black">재고</Button>
      </div>
    </div>
  )
}

function Notice() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  if (!api) {
    return
  }
  return (
    <div className="mx-4">
      <Title title={'공지사항'} />
      <Container className="px-6 py-4">
        <Carousel setApi={setApi}>
          <CarouselContent>
            <CarouselItem><div className="line-clamp-3">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&aposs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</div></CarouselItem>
            <CarouselItem><div className="line-clamp-3">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&aposs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</div></CarouselItem>
            <CarouselItem><div className="line-clamp-3">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&aposs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</div></CarouselItem>
            <CarouselItem><div className="line-clamp-3">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&aposs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</div></CarouselItem>
            <CarouselItem><div className="line-clamp-3">is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&aposs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</div></CarouselItem>
          </CarouselContent>
        </Carousel>
      </Container>
      <Pagination>
        <PaginationContent>
          {[0, 1, 2, 3, 4].map(i =>
            <PaginationItem key={i}>
              <PaginationLink onClick={() => api.scrollTo(i)}><div className={cn("rounded-full w-1 h-1 p-2", current === i + 1 ? 'bg-primary' : 'bg-[#D9D9D9]')}></div></PaginationLink>
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
}
