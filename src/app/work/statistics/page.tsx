"use client"

import React from 'react'
import { Container } from '@/components/Container'
import { fontTitle } from '@/components/Font'
import { cn } from '@/lib/utils'
import Title from '@/components/Title'

import { Bar, BarChart, PieChart, Pie, Cell } from "recharts"

import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#2563eb",
    },
    mobile: {
        label: "Mobile",
        color: "#60a5fa",
    },
} satisfies ChartConfig

export function Component() {
    return (
        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            <BarChart accessibilityLayer data={chartData}>
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
            </BarChart>
        </ChartContainer>
    )
}


export default function page() {
    return (
        <div>
            <WorkBox />
            <WorkGraph />
        </div>
    )
}

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

function WorkGraph() {
    const data = [
        {
            "name": "Group A",
            "value": 400,
        },
        {
            "name": "Group B",
            "value": 300
        },
        {
            "name": "Group C",
            "value": 300
        },
        {
            "name": "Group D",
            "value": 200
        },
    ];
    const COLORS = [
        '#FED7AA',
        '#FDBA74',
        '#FB923C',
        '#F97316'];

    return (
        <div className='mx-4 mt-8'>
            <Title title={'그래프'} />
            <Container className='mt-4'>
                <ChartContainer config={chartConfig} className="min-h-[200px] max-w-[500px] mx-auto">
                    <PieChart accessibilityLayer data={chartData}>
                        <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} labelLine={false} label={renderCustomizedLabel} >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </Container>
        </div>
    )
}


function WorkBox() {
    const boxes = [
        {
            text: '파브스와 함께한',
            day: '486일'
        }, {
            text: '출근한 날',
            day: '412일'
        }, {
            text: '내가 파브스에 있었던',
            day: '4810시간'
        }, {
            text: '지각없이 출근한',
            day: '397일'
        }, {
            text: '야근한',
            day: '73일'
        }, {
            text: '나는 성실왕 미리온',
            day: '116일'
        }
    ]
    return (
        <div className='grid grid-cols-2 mx-4 gap-4'>
            {boxes.map(box =>
                <Container className='text-center py-8' key={box.text}>
                    <div className='text-md'>{box.text}</div>
                    <div className={cn(fontTitle, 'text-xl')}>{box.day}</div>
                </Container>
            )}
        </div>
    )
}
