import Image from "next/image"
import Product from ".."
import { Dialog, 
  DialogClose, 
  DialogContent, 
  DialogDescription,
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "../../ui/dialog"
import { Truck } from "lucide-react"
import { Button } from "../../ui/button"

const ProductDialog = () => {
  return (
    <Dialog >
      <DialogTrigger>
        <Product />
      </DialogTrigger>
        <DialogContent className="flex lg:flex-row sm:flex-col sm:justify-center flex-nowrap sm:max-w-xl">
          <Image 
            src='https://m.media-amazon.com/images/I/61s2VDj+tbL._AC_UL480_FMwebp_QL65_.jpg' 
            alt='Imagem do Produto' 
            height={250} 
            width={150} 
            className="w-1/2 self-center"
          />
          <div className="flex flex-col">
            <DialogHeader>
              <DialogTitle className="mt-4 font-semi text-2xl" >Whey Piracanjuba 23g</DialogTitle>
              <DialogDescription>
                <Truck className="inline text-green-600 mr-2"/><h1 className="inline text-green-600">Frete Grátis</h1>
              </DialogDescription>
            </DialogHeader>
            <h2 className="mt-auto">
              Quantidade: 1 Unidade(s)
            </h2>
            <DialogClose asChild>
              <div className="flex flex-col">
                <Button
                  className="mt-2 px-auto" 
                  type="button"
                >
                  Comprar
                </Button>
                <Button 
                  className="mt-2 px-auto hover:" 
                  variant='secondary'
                  type="button"
                >
                  Adicionar ao Carinho 
                </Button>
              </div>
            </DialogClose>
          </div>
        </DialogContent>
    </Dialog>
  )
}

export default ProductDialog