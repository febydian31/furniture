"use client"

import { Search } from "lucide-react"
import { useState } from "react"

type SearchProps = {
    onSearch: (value: string) => void
    }

    export default function ProductSearch({ onSearch }: SearchProps) {
    const [value, setValue] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const text = e.target.value
        setValue(text)
        onSearch(text)
    }

    return (
        <div className="mt-6 flex justify-center">
        <div className="relative w-full max-w-md">

            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-zinc-500" />

            <input
            type="text"
            placeholder="Cari furniture..."
            value={value}
            onChange={handleChange}
            className="w-full border border-zinc-300 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />

        </div>
        </div>
    )
}