import React from 'react'

export default function Title({ title }: { title: string }) {
    return (
        <div className='font-semibold text-lg'>{title}</div>
    )
}
