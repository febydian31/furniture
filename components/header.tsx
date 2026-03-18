'use client'
import Link from 'next/link'
import { Menu, X, ShoppingCart, Search, User } from 'lucide-react'
import React from 'react'

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Produk', href: '/product' },
    { name: 'Detail Produk', href: '#link' },
    { name: 'Inspirasi', href: '#link' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [userOpen, setUserOpen] = React.useState(false)

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="bg-background/50 fixed z-20 w-full border-b backdrop-blur-3xl"
            >
                <div className="mx-auto max-w-6xl px-6 transition-all duration-300">

                    <div className="relative flex flex-wrap items-center justify-between py-3 lg:py-4">

                        {/* LOGO */}
                        <div className="flex items-center lg:flex-1">
                            <div className="text-2xl font-bold">GreezWood</div>
                        </div>

                        {/* MENU DESKTOP */}
                        <div className="hidden lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* ICON RIGHT */}
                        <div className="flex items-center justify-end gap-6 lg:flex-1">

                            {/* DESKTOP ICON */}
                            <div className="hidden lg:block">
                                <ul className="flex gap-8 items-center">

                                    <li>
                                        <Link href="/search">
                                            <Search className="w-5 h-5 text-gray-700 hover:text-accent-foreground cursor-pointer duration-150" />
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/shop/cart">
                                            <ShoppingCart className="w-5 h-5 text-gray-700 hover:text-accent-foreground cursor-pointer duration-150" />
                                        </Link>
                                    </li>

                                    {/* USER DROPDOWN DESKTOP */}
                                    <li className="relative group">

                                        <User className="w-5 h-5 text-gray-700 hover:text-accent-foreground cursor-pointer duration-150" />

                                        <div className="absolute right-0 mt-4 w-36 bg-white border rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">

                                            <Link
                                                href="/auth/login"
                                                className="block px-4 py-2 text-sm hover:bg-gray-100"
                                            >
                                                Login
                                            </Link>

                                            <Link
                                                href="/auth/register"
                                                className="block px-4 py-2 text-sm hover:bg-gray-100"
                                            >
                                                Register
                                            </Link>

                                        </div>

                                    </li>

                                </ul>
                            </div>

                            {/* MOBILE MENU BUTTON */}
                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 block cursor-pointer p-2.5 lg:hidden"
                            >
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>

                        </div>

                        {/* MOBILE MENU */}
                        <div className="bg-background in-data-[state=active]:block lg:hidden mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 mt-4">

                            <div className="w-full">

                                {/* MENU NAV */}
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150"
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                {/* ICON MENU MOBILE */}
                                <div className="mt-6 border-t pt-6 space-y-4">

                                    <Link
                                        href="/search"
                                        className="flex items-center gap-3 text-muted-foreground hover:text-accent-foreground"
                                    >
                                        <Search className="w-5 h-5" />
                                        Search
                                    </Link>

                                    <Link
                                        href="/shop/cart"
                                        className="flex items-center gap-3 text-muted-foreground hover:text-accent-foreground"
                                    >
                                        <ShoppingCart className="w-5 h-5" />
                                        Cart
                                    </Link>

                                    {/* USER MOBILE DROPDOWN */}
                                    <button
                                        onClick={() => setUserOpen(!userOpen)}
                                        className="flex items-center gap-3 text-muted-foreground hover:text-accent-foreground"
                                    >
                                        <User className="w-5 h-5" />
                                        User
                                    </button>

                                    {userOpen && (
                                        <div className="pl-8 space-y-3 text-sm">

                                            <Link
                                                href="/auth/login"
                                                className="block hover:text-accent-foreground"
                                            >
                                                Login
                                            </Link>

                                            <Link
                                                href="/auth/register"
                                                className="block hover:text-accent-foreground"
                                            >
                                                Register
                                            </Link>

                                        </div>
                                    )}

                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </nav>
        </header>
    )
}