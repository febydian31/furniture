"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingBag, Eye, Heart } from "lucide-react"
import Search from "@/components/ui/search"
import Image from "next/image"

const categories = [
        "Ruang Tamu",
    "Ruang Makan",
    "Kamar",
    "Dapur",
    "Teras",
    ]

    const products = [
    {
        tag: "Terlaris",
        category: "Ruang Tamu",
        name: "Sofa Kayu Avondale",
        price: "Rp 2.800.000",
        image: "https://pngimg.com/uploads/sofa/sofa_PNG6956.png",
    },
    {
        tag: "Rating Tinggi",
        category: "Teras",
        name: "Sofa Outdoor Zuma",
        price: "Rp 3.500.000",
        image: "https://pngimg.com/uploads/sofa/sofa_PNG6954.png",
    },
    {
        tag: "Harga Terbaik",
        category: "Ruang Tamu",
        name: "Kursi Kulit Pershing",
        price: "Rp 2.900.000",
        image: "https://pngimg.com/uploads/armchair/armchair_PNG7021.png",
    },
    {
        tag: "Rating Tinggi",
        category: "Kamar",
        name: "Kursi Santai Powell",
        price: "Rp 2.400.000",
        image: "https://pngimg.com/uploads/armchair/armchair_PNG7022.png",
    },
    {
        tag: "Harga Terbaik",
        category: "Kamar",
        name: "Kursi Putar Infiniti",
        price: "Rp 2.700.000",
        image: "https://pngimg.com/uploads/armchair/armchair_PNG7023.png",
    },
    {
        tag: "Terlaris",
        category: "Ruang Tamu",
        name: "Sofa Garis Cerca",
        price: "Rp 3.100.000",
        image: "https://pngimg.com/uploads/sofa/sofa_PNG6958.png",
    },
    ]

    export default function CollectionSection() {
    const [search, setSearch] = useState("")

    const filteredProducts = products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <section className="bg-white pt-26 py-10">
        <div className="mx-auto max-w-6xl px-6">

            {/* TITLE */}
            <div className="text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
                Furniture
            </h2>
            
            {/* SEARCH */}
            <div className="mt-6">
                <Search onSearch={(value) => setSearch(value)} />
            </div>
            </div>

            {/* CATEGORY */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
                {categories.map((cat, i) => (
                <button
                    key={i}
                    className="rounded-full border border-zinc-300 px-5 py-2 text-sm transition hover:bg-zinc-100"
                >
                    {cat}
                </button>
                ))}
            </div>

            {/* PRODUCT GRID */}
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {filteredProducts.map((product, i) => (
                <Card
                key={i}
                className="group rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md"
                >
                <CardContent className="p-0">

                    {/* TAG + CATEGORY */}
                    <div className="flex items-center justify-between text-xs text-zinc-500">
                    <span>{product.tag}</span>
                    <span className="font-medium">{product.category}</span>
                    </div>

                    {/* IMAGE */}
                    <div className="relative mx-auto my-6 h-40 w-full p-4 overflow-hidden">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                    </div>

                    {/* NAME */}
                    <p className="text-sm text-zinc-600">
                    {product.name}
                    </p>

                    {/* PRICE + ICON */}
                    <div className="mt-2 flex items-center justify-between">
                    <span className="font-semibold">
                        {product.price}
                    </span>

                    <div className="flex items-center gap-2">

                        <button className="flex size-9 items-center justify-center rounded-lg border border-zinc-200 transition hover:bg-zinc-100">
                        <Eye className="size-4" />
                        </button>

                        <button className="flex size-9 items-center justify-center rounded-lg border border-zinc-200 transition hover:bg-zinc-100">
                        <Heart className="size-4" />
                        </button>

                        <button className="flex size-9 items-center justify-center rounded-lg border border-zinc-200 transition hover:bg-zinc-100">
                        <ShoppingBag className="size-4" />
                        </button>

                    </div>
                    </div>

                </CardContent>
                </Card>
            ))}

            </div>

            {/* EMPTY STATE */}
            {filteredProducts.length === 0 && (
            <p className="text-center text-zinc-500 mt-10">
                Produk tidak ditemukan 😢
            </p>
            )}

        </div>
        </section>
    )
}