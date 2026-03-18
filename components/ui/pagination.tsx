"use client"

import Link from "next/link"

type PaginationProps = {
    currentPage: number
    totalPages: number
    basePath?: string
    }

    export default function Pagination({
    currentPage,
    totalPages,
    basePath = "/product"
    }: PaginationProps) {

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

    return (
        <div className="flex justify-center items-center gap-2 mb-10">

        {/* PREVIOUS */}
        <Link
            href={`${basePath}?page=${currentPage - 1}`}
            className={`px-3 py-2 text-sm border rounded-md ${
            currentPage === 1
                ? "pointer-events-none opacity-40"
                : "hover:bg-zinc-100"
            }`}
        >
            Prev
        </Link>

        {/* PAGE NUMBERS */}
        {pages.map((page) => (
            <Link
            key={page}
            href={`${basePath}?page=${page}`}
            className={`px-3 py-2 text-sm border rounded-md transition ${
                currentPage === page
                ? "bg-black text-white border-black"
                : "hover:bg-zinc-100"
            }`}
            >
            {page}
            </Link>
        ))}

        {/* NEXT */}
        <Link
            href={`${basePath}?page=${currentPage + 1}`}
            className={`px-3 py-2 text-sm border rounded-md ${
            currentPage === totalPages
                ? "pointer-events-none opacity-40"
                : "hover:bg-zinc-100"
            }`}
        >
            Next
        </Link>

        </div>
    )
}