'use client'

import ImageCarousel from "@/components/Carousel"
import NavBar from "@/components/Navbar/NavBar"
import Product from "@/components/Product"
import ProductDialog from "@/components/Product/ProductDialog"
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Copy, Truck } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const ImageLinks = [
    '/images/banner1.webp',
    '/images/banner2.webp',
    '/images/banner3.webp',
    '/images/banner4.webp',
    '/images/banner5.webp'
  ]

  return (
    <main className="flex flex-col justify-center items-center">
      <NavBar />
      <ImageCarousel imageLinks={ImageLinks}/>
      <section className="2xl:grid 2xl:grid-cols-4 lg:grid-cols-3 gap-3 grid grid-cols-1 mt-2">
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
