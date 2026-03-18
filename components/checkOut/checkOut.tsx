"use client"

import CheckoutInfo from "@/components/checkOut/checkoutInfo"
import CheckoutTotal from "@/components/checkOut/checkoutTotal"

export default function CheckoutSection() {

    const subtotal = 1300000

    return (
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 my-5 pt-28">

        <h1 className="text-2xl md:text-3xl font-semibold mb-10 text-center">
            Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">

            {/* INFO */}
            <div className="lg:col-span-2">
            <CheckoutInfo />
            </div>

            {/* TOTAL */}
            <CheckoutTotal subtotal={subtotal} />

        </div>

        </section>
    )
}