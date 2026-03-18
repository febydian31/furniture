import { Card, CardContent } from "@/components/ui/card"
import { ShoppingBag } from "lucide-react"
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
        name: "Sofa Kayu Avondale",
        price: "Rp 2.800.000",
        image: "https://pngimg.com/uploads/sofa/sofa_PNG6956.png",
    },
    {
        tag: "Rating Tinggi",
        name: "Sofa Outdoor Zuma",
        price: "Rp 3.500.000",
        image: "https://pngimg.com/uploads/sofa/sofa_PNG6954.png",
    },
    {
        tag: "Harga Terbaik",
        name: "Kursi Kulit Pershing",
        price: "Rp 2.900.000",
        image: "https://pngimg.com/uploads/armchair/armchair_PNG7021.png",
    },
    {
        tag: "Rating Tinggi",
        name: "Kursi Santai Powell",
        price: "Rp 2.400.000",
        image: "https://pngimg.com/uploads/armchair/armchair_PNG7022.png",
    },
    {
        tag: "Harga Terbaik",
        name: "Kursi Putar Infiniti",
        price: "Rp 2.700.000",
        image: "https://pngimg.com/uploads/armchair/armchair_PNG7023.png",
    },
    {
        tag: "Terlaris",
        name: "Sofa Garis Cerca",
        price: "Rp 3.100.000",
        image: "https://pngimg.com/uploads/sofa/sofa_PNG6958.png",
    },
    ]

    export default function CollectionSection() {
    return (
        <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">

            {/* TITLE */}
            <div className="text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
                Koleksi Terbaru Kami
            </h2>

            <p className="mt-3 text-zinc-500">
                Produk furniture kami dibuat dari kayu pilihan
                yang berasal dari sumber hutan bersertifikasi.
            </p>

            {/* CATEGORY BUTTON */}
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
            </div>

            {/* PRODUCT GRID */}
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {products.map((product, i) => (
                <Card
                key={i}
                className="group rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md"
                >
                <CardContent className="p-0">

                    {/* TAG */}
                    <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-zinc-500">
                        {product.tag}
                    </span>

                    
                    </div>

                    {/* IMAGE */}
                    <div className="relative mx-auto my-6 h-40 w-full p-4">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                    </div>

                    {/* NAME */}
                    <p className="text-sm text-zinc-600">
                    {product.name}
                    </p>

                    {/* PRICE */}
                    <div className="mt-2 flex items-center justify-between">
                    <span className="font-semibold">
                        {product.price}
                    </span>

                    <button className="flex size-9 items-center justify-center rounded-lg border border-zinc-200 transition hover:bg-zinc-100">
                        <ShoppingBag className="size-4" />
                    </button>
                    </div>

                </CardContent>
                </Card>
            ))}

            </div>

            {/* BUTTON LIHAT LEBIH BANYAK */}
            <div className="mt-14 text-center">
            <button className="rounded-full border border-zinc-300 px-7 py-3 text-sm font-medium transition hover:bg-zinc-100">
                Lihat Lebih Banyak
            </button>
            </div>

        </div>
        </section>
    )
}