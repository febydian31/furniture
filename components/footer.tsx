import Link from "next/link"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-black text-zinc-400">
        <div className="mx-auto max-w-6xl px-6 py-16">

            {/* GRID */}
            <div className="grid gap-12 md:grid-cols-4">

            {/* Brand */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">GreezWood</h3>
                <p className="text-sm leading-relaxed">
                Kami menghadirkan furniture berkualitas dari kayu solid
                dengan desain elegan untuk memperindah ruang Anda.
                </p>

                {/* Social */}
                <div className="flex gap-3 pt-2">
                <SocialIcon icon={<Facebook size={18} />} />
                <SocialIcon icon={<Instagram size={18} />} />
                <SocialIcon icon={<Twitter size={18} />} />
                <SocialIcon icon={<Linkedin size={18} />} />
                </div>
            </div>

            {/* Feature */}
            <FooterColumn
                title="Menu"
                links={[
                { name: "Tentang Kami", href: "#" },
                { name: "Produk", href: "#" },
                { name: "Katalog", href: "#" },
                { name: "Kontak", href: "#" },
                ]}
            />

            {/* Support */}
            <FooterColumn
                title="Support"
                links={[
                { name: "Keranjang", href: "#" },
                { name: "Login", href: "#" },
                { name: "Syarat & Ketentuan", href: "#" },
                { name: "Privasi", href: "#" },
                ]}
            />

            {/* Categories */}
            <FooterColumn
                title="Kategori"
                links={[
                { name: "Ruang Tamu", href: "#" },
                { name: "Ruang Makan", href: "#" },
                { name: "Kamar", href: "#" },
                { name: "Dapur", href: "#" },
                { name: "Teras", href: "#" },
                ]}
            />

            </div>

            {/* Divider */}
            <div className="my-10 border-t border-zinc-800"></div>

            {/* Copyright */}
            <p className="text-center text-sm text-zinc-500">
            © {new Date().getFullYear()} Furniture GreezWood. All rights reserved.
            </p>

        </div>
        </footer>
    )
    }

    function FooterColumn({
    title,
    links,
    }: {
    title: string
    links: { name: string; href: string }[]
    }) {
    return (
        <div>
        <h4 className="mb-4 font-semibold text-white">{title}</h4>
        <ul className="space-y-3 text-sm">
            {links.map((link, i) => (
            <li key={i}>
                <Link href={link.href} className="hover:text-white transition">
                {link.name}
                </Link>
            </li>
            ))}
        </ul>
        </div>
    )
    }

    function SocialIcon({ icon }: { icon: React.ReactNode }) {
    return (
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 hover:border-white hover:text-white transition">
        {icon}
        </div>
    )
    }