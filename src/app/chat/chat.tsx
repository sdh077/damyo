'use client'
import React, { useRef, useState } from 'react'

import { BsSend, BsImageAlt } from 'react-icons/bs'
import { InputIcon } from '@/components/ui/inputIcon';
import useChat from './useChat';
import Image from 'next/image';


export function Chat() {
  const [text, setText] = useState('')
  const chatBox = useRef<HTMLDivElement>(null)
  // const { chats, setChat } = useChat()

  const [chats, setChat] = useState([{
    userProfile: '/profile/profile-rec.png',
    userName: '김현주',
    chat: 'msg',
    time: '오후4:30',
  }])

  return (
    <div className='mx-4'>
      <div className='h-[calc(100vh-130px)] overflow-y-scroll flex flex-col justify-start gap-2 py-4'
        ref={chatBox}>
        <div className='flex items-center justify-center'>07/12/2024</div>
        {chats.map((chat, i) =>
          <div key={i} className='flex items-center justify-start gap-4'>
            <Image src={chat.userProfile} alt='profile' width={50} height={50} />
            <div>
              <div className='mb-1'>
                <span className='text-md mr-2'>{chat.userName}</span>
                <span className='text-gray text-xs'>{chat.time}</span>
              </div>
              <div>{chat.chat}</div>
            </div>
          </div>
        )}
      </div>
      <div className='mb-4 '>
        <form action={(e) => {
          if (text) {
            setChat([...chats, {
              userProfile: '/profile/profile-rec.png',
              userName: '김현주',
              chat: text,
              time: '오후4:30',
            }]);
            setText('');
            if (chatBox.current) chatBox.current.scrollTo(0, chatBox.current.scrollHeight + 100);
          }
        }}>
          <InputIcon Icon={BsSend} value={text} onChange={e => setText(e.target.value)} />
        </form>
        <div><BsImageAlt /></div>
      </div>
    </div>

  )
}