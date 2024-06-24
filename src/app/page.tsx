'use client'

import ImageCarousel from "@/components/Carousel"
import NavBar from "@/components/Navbar/NavBar"
import ProductDialog from "@/components/Product/ProductDialog"


export default function Home() {
  const ImageLinks = [
    '/images/banner1.webp',
    '/images/banner2.webp',
    '/images/banner3.webp',
    '/images/banner4.webp',
    '/images/banner4.webp',
    '/images/banner5.webp'
  ]

  return (
    <main className="flex flex-col justify-center items-center">
      <NavBar />
      <ImageCarousel imageLinks={ImageLinks}/>
      <section className="2xl:grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3 grid grid-cols-1 mt-2">
        <ProductDialog />
        <ProductDialog />
        <ProductDialog />
        <ProductDialog />
        <ProductDialog />
        <ProductDialog />
        <ProductDialog />
        <ProductDialog />
        <ProductDialog />
      </section>
    </main>
  )
}
