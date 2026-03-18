import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { HeroHeader } from "@/components/header"

export default function HeroSection() {
    return (
        <>
        <HeroHeader />

        <main className="overflow-x-hidden">
            <section className="bg-white">

            <div className="mx-auto max-w-6xl px-6 py-16 lg:py-32">

                {/* GRID LAYOUT */}
                <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:items-center">

                {/* IMAGE */}
                <div className="relative w-full h-75 sm:h-95 md:h-112.5 lg:h-150">

                    {/* overlay */}
                    <div className="absolute inset-0 bg-zinc-950/50 z-10" />

                    <Image
                    src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1200&auto=format&fit=crop"
                    alt="Interior Furniture"
                    fill
                    priority
                    className="object-cover object-center lg:object-right"
                    sizes="(max-width:1024px) 100vw, 50vw"
                    />

                </div>

                {/* TEXT */}
                <div className="text-center lg:text-left">

                    <h1 className="text-xl font-semibold leading-tight md:text-3xl lg:text-4xl">
                    Dari Tanah Kalimantan, 
                    <br />
                    Lahir Utuh Menjadi Mahakarya.
                    </h1>

                    <p className="mt-6 text-lg text-zinc-600">
                    Hadirkan kemegahan Jati Kalimantan di tiap ruangan rumah Anda.
                    Furniture solid slab tanpa sambungan, karya seni alam
                    yang bertahan lintas generasi.
                    </p>

                    <div className="mt-10 flex justify-center lg:justify-start">

                    <Button
                        asChild
                        size="lg"
                        className="px-6 text-base"
                    >
                        <Link href="#koleksi">
                        Lihat Koleksi
                        </Link>
                    </Button>

                    </div>

                </div>

                </div>

            </div>

            </section>
        </main>
        </>
    )
    }