import { create } from 'zustand'

type Store = {
    title: string
    update: (title: string) => void
}

export const useStore = create<Store>()((set) => ({
    title: '',
    update: (title: string) => set((state) => ({ title })),
}))

function Counter() {
    const { title, update } = useStore()
    return (
        <div>
            <span>{title}</span>
            <button onClick={() => update('one')}>one up</button>
        </div>
    )
}