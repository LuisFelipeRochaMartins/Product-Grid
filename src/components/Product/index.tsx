'use client'

import Image from "next/image"
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardTitle 
} from "../ui/card"

interface ProductProps {
  src: string 
  name: string
  price: number
}

const Product = () => {
  return (
    <Card className="w-[280px] overflow-hidden shadow-md">
      <CardContent className="p-2">
        <div className="flex w-200 h-300 flex-col gap-2 text-left items-center">
          <Image
            src={'https://m.media-amazon.com/images/I/61s2VDj+tbL._AC_UL480_FMwebp_QL65_.jpg'} 
            alt="Imagem do Produto" 
            width={150} 
            height={250}
          />
          <CardTitle className="self-start">
            Whey Piracanjuba 23g
          </CardTitle>
          <CardDescription className="self-start text-md text-gray-800 items-start">
            R$ 7,69
          </CardDescription>
          <div className="flex flex-col space-y-1.5">
          </div>
          <div className="flex flex-col space-y-1.5">
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Product