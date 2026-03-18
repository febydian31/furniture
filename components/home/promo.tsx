import { Card } from '@/components/ui/card'
import { ShoppingCart, CreditCard, Headphones } from 'lucide-react'
import Image from 'next/image'
import * as React from 'react'

interface Product {
  name: string
  price: string
}

interface CategoryCardProps {
  title: string
  promoText: string
  description?: string
  products: Product[]
  image: string
  imageClassName?: string
}

export default function FurnitureSection() {
    return (
        <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">

            {/* Feature */}
            <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">

            <FeatureItem
    icon={<ShoppingCart className="text-yellow-600 size-6" />}
    title="Gratis Pengiriman"
    desc="Pengiriman gratis untuk pesanan dengan nilai tertentu."
    />

    <FeatureItem
    icon={<CreditCard className="text-yellow-600 size-6" />}
    title="Pembayaran Fleksibel"
    desc="Mendukung berbagai metode pembayaran yang aman."
    />

    <FeatureItem
    icon={<Headphones className="text-yellow-600 size-6" />}
    title="Support 24/7"
    desc="Layanan pelanggan siap membantu Anda setiap hari."
    />

        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

          {/* Chair */}
          <CategoryCard
            title="Chairs"
            promoText="PROMO 50%"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            products={[
              { name: 'Gaming Chair Elite', price: 'Rp. 250.000' }
            ]}
            image="https://i.pinimg.com/736x/51/77/67/51776720d9a5c8e4264c6fd315b20485.jpg"
            imageClassName="right-6 w-[42%]"
          />

          <div className="flex flex-col gap-6">

            <CategoryCard
              title="Sofa"
              promoText="BIG PROMO 60%"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              products={[
                { name: 'Reception Sofa Set', price: 'Rp. 800.000' }
              ]}
              image="https://i.pinimg.com/1200x/14/cc/ea/14cceaa003e34478997e24f4a7a1a882.jpg"
              imageClassName="right-6 w-[40%]"
            />

            <CategoryCard
              title="Lighting"
              promoText="PROMO 40%"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              products={[
                { name: 'Crystal Ceiling Light', price: 'Rp. 150.000' }
              ]}
              image="https://i.pinimg.com/1200x/7f/0d/10/7f0d1027246ebb014088cfa5875c7d2e.jpg"
              imageClassName="right-6 w-[40%]"
            />

          </div>

        </div>
      </div>
    </section>
  )
}

const FeatureItem = ({
  icon,
  title,
  desc
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) => (
  <div className="flex items-center gap-4">

    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-black/5">
      {icon}
    </div>

    <div>
      <h4 className="text-sm font-bold text-slate-800">{title}</h4>
      <p className="text-xs text-muted-foreground">{desc}</p>
    </div>

  </div>
)

const CategoryCard = ({
  title,
  promoText,
  description,
  products,
  image,
  imageClassName
}: CategoryCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-none bg-white p-6 sm:p-8 shadow-sm transition hover:shadow-md">

      {/* MOBILE LAYOUT */}
      <div className="flex flex-col gap-6 lg:block">

        {/* TEXT */}
        <div className="relative z-10 lg:max-w-[60%]">

          <span className="mb-4 inline-block text-xs font-bold tracking-widest text-red-600 uppercase">
            {promoText}
          </span>

          <h3 className="mb-3 text-2xl sm:text-3xl font-bold text-slate-900">
            {title}
          </h3>

          {description && (
            <p className="mb-6 text-xs sm:text-sm text-slate-500 leading-relaxed">
              {description}
            </p>
          )}

          <div className="space-y-3">
            {products.map((item, index) => (
              <div
                key={index}
                className="flex flex-col border-l-2 border-slate-100 pl-3 group-hover:border-red-200"
              >
                <span className="text-[13px] text-slate-600">
                  {item.name}
                </span>

                <span className="text-[14px] font-bold text-slate-900">
                  {item.price}
                </span>

              </div>
            ))}
          </div>

        </div>

        {/* IMAGE MOBILE */}
        <div className="flex justify-center lg:hidden">
          <div className="relative w-[70%] h-50">

            <Image
              src={image}
              alt={title}
              fill
              className="object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110"
            />

          </div>
        </div>

      </div>

      {/* IMAGE DESKTOP */}
      <div
        className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 items-center justify-center ${imageClassName}`}
      >

        <div className="relative w-50 h-55">

          <Image
            src={image}
            alt={title}
            fill
            className="object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110"
          />

        </div>

      </div>

    </Card>
  )
}