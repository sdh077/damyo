'use client'
import React, { useEffect, useState } from 'react'

import { Socket, io } from "socket.io-client";
import { BsArrowLeft, BsList, BsSend, BsImageAlt } from 'react-icons/bs'
import { InputIcon } from '@/components/ui/inputIcon';
import { IChat } from '@/interface/chat';


export default function useChat() {
  const socket = io("http://localhost:4444/");
  const [chats, setChats] = useState<IChat[]>([])

  useEffect(() => {
    socket.on("chat message", (arg) => {
      setChats([...chats, arg])
    });
  }, [chats]);
  const setChat = (chat: string) => {
    socket.emit('chat message', chat);
  }
  return { chats, setChat }
}
