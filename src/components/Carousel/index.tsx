'use client'

import Image from "next/image"
import Autoplay from 'embla-carousel-autoplay'
import { Card, CardContent } from "../ui/card"
import { 
  Carousel,
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "../ui/carousel"

interface CarouselProps {
  imageLinks: string[]
}

const ImageCarousel = ({imageLinks}: CarouselProps) => {
  return (
    <Carousel className="relative m-2"
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 5000
        })
      ]}  
    >
      <CarouselContent>
        {imageLinks.map((link, index) => (
          <CarouselItem key={index}>
            <div>
              <Card>
                <CardContent className="p-0">
                  <Image 
                    src={link} 
                    alt='Imagem do Carrossel' 
                    height={360}
                    width={1400}
                    className="rounded-lg "
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext/>
    </Carousel>
  )
}

export default ImageCarousel