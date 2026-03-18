import FooterSection from "@/components/footer"
import { HeroHeader } from "@/components/header"
import Product from "@/components/product/product"
import Pagination from "@/components/ui/pagination"

type PageProps = {
  searchParams?: {
    page?: string
  }
}

export default function CartPage({ searchParams }: PageProps) {
  const page = Number(searchParams?.page) || 1

  return (
    <div>
      <HeroHeader />

      <div className="max-w-6xl mx-auto px-6 mt-6">
      </div>

      <Product />

      <div className="mt-10 flex justify-center">
        <Pagination currentPage={page} totalPages={5} />
      </div>

      <FooterSection />
    </div>
  )
}