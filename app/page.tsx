import FooterSection from "@/components/footer"
import HeroSection from "@/components/home/heroSection"
import Promo from "@/components/home/promo"
import Testimonials from "@/components/home/testimonials"
import Category from "@/components/home/category"

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Promo/>
      <Category/>
      <Testimonials/>
      <FooterSection/>
    </div>
  )
}