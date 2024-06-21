'use client'

import Image from "next/image"
import { 
  NavigationListItem, 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from "../ui/navigation-menu"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

const NavBar = () => {
  return (
    <>
      <NavigationMenu >
        <NavigationMenuLink className="p-2">
          <NavigationMenuList>
            <NavigationMenuItem className="flex flex-row gap-2">
              <Image src='/logo.png' alt="Logo da Loja" height={40} width={40}/>
              <Input 
                type="text"
                className="w-96 px-4"
                placeholder="Encontre o suplemento ideal para você"
              />
              <Button variant='outline'>
                Enviar
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Introdução</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr] bg-gradient-to-b">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                    <div className="mb-2 p-3 text-lg rounded-md font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      Bem-vindo
                      <p className="text-sm leading-tight text-muted-foreground">
                      Nosso site oferece produtos fitness de alta qualidade,
                      incluindo equipamentos, acessórios e suplementos. Com uma
                      navegação fácil e um atendimento ao cliente excelente, 
                      estamos aqui para ajudar você a alcançar seus objetivos de
                      saúde e bem-estar.
                      </p>
                    </div>
                    </NavigationMenuLink>
                  </li>
                  <NavigationListItem title="Login ou Criar Conta">
                    Inicie uma sessão para realizar compras.
                  </NavigationListItem>
                  <NavigationListItem title="Fale conosco">
                    Entre em contatos conosco e tire todas as suas dúvidas
                  </NavigationListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenuLink>
      </NavigationMenu>
      <hr className="w-full"/>
    </>
  )
}

export default NavBar