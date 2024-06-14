import React from 'react';
import { Search, ChevronLeft } from 'lucide-react'; // Importing Search icon from lucide-react
import { Button } from '~/components/ui/button';
import icon1 from '../../../public/assets/images/Group (1).png'
import icon2 from '../../../public/assets/images/setting-5.png'
import icon3 from '../../../public/assets/images/ion_notifications-outline (1).png'
import icon4 from '../../../public/assets/images/call (1).png'
import icon5 from '../../../public/assets/images/setting-5.png'
import icon6 from '../../../public/assets/images/iconoir_language (1).png'
import { Card } from '~/components/ui/card';
import { Input } from '~/components/ui/input';
import { Label } from '~/components/ui/label'
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { useLocation } from '@remix-run/react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import Index from '..';
import '../home.css'
export default function Home() {
  console.log("ikshfjsdfhjdsfhjdhj")
  return (
    <>
      <header className="flex container mx-auto content-container flex-col sm:flex-row headerUi items-center justify-between my-4 py-4 bg-white text-white">
        {/* Logo */}
        <div className="flex items-center">
          <img src="../../../public/assets/images/logo.png" alt="Logo" className="h-8" style={{ width: 163, height: 30 ,paddingRight:'10px'}} />
        </div>

        {/* Search Bar */}
        <div className="flex-1 headerSearch" style={{ marginRight: '2%', marginLeft: '2%' }}>
          <div className="relative flex items-center search_icon">
            <Search className="absolute left-3 w-5 h-5 text-[#2E3079] searchUi" />
            <input
              type="text"
              placeholder="Buscar un Indicador"
              className="pl-10 pr-4 py-2 w-full rounded-md border text-black border-gray-300 focus:border-blue-500 focus:outline-none"
              style={{ paddingLeft: '2.5rem', border: 'none' }}
            />
          </div>
        </div>

        {/* User Info */}
        <NavigationMenu>
          <NavigationMenuLink href='/ProfileSetting'>
            <div className="flex items-center">
              <img src="../../../public/assets/images/user.png" alt="Logo" className="h-8" />
              <span style={{ fontSize: 16 }} className="text-[#1D1D1D] ml-3">Alberto Rodríguez</span>
              <img src="../../../public/assets/images/downIcon.png" className="h-8 ml-3" />
            </div>
          </NavigationMenuLink>
        </NavigationMenu>
      </header>
      <div className='bg-[#F8F8F8]' style={{height:'96vh'}}>
        <div className="grid container  min-h-[85vh] p-2">
          <div className="grid grid-cols-12 gap-4 pt-6 h-full">
            <Index />
            <div className="col-span-12 md:col-span-12 lg:col-span-9">
              <div className='flex items-center gap-1  pb-5 text-[#1D1D1D] '>
                <ChevronLeft />
                <NavigationMenu>
                    <NavigationMenuLink href='/'>
                    <p className="font-medium text-sm leading-tight">Volver al Panel de Seguridad</p>
                    </NavigationMenuLink>
                </NavigationMenu>
              </div>
              <p className="font-inter text-3xl font-bold leading-9 text-left pb-5">Mi perfil</p>
              <Card>

                <div className="grid grid-cols-12  pr-6 pl-2 pb-1 pt-5 h-full">
                  <div className="col-span-12 md:col-span-1 lg:col-span-1 p-2 flex justify-center items-center">
                    {/* <Avatar height={84} width={84} > */}
                      <img src="/assets/images/user1.png" alt="@shadcn" />
                      {/* <AvatarFallback>CN</AvatarFallback> */}
                    {/* </Avatar> */}

                  </div>
                  <div className="col-span-12 md:col-span-4 lg:col-span-4 p-2 ">
                    <div className="grid  items-center gap-3">
                      <Label htmlFor="picture" style={{ color: '#686868' }}>Nombre</Label>
                      <Input id="gmail" type="gmail" placeholder="" />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-2 lg:col-span-2 p-2 flex justify-center items-end">

                    <Button>Guardar</Button>

                  </div>


                </div>
                <div className="grid grid-cols-12 gap-2  h-full  pr-6 pl-6 pb-3">
                  <div className="col-span-12 md:col-span-6 lg:col-span-9 pt-5">
                    <div className="grid  items-center gap-3  ">
                      <Label htmlFor="picture" style={{ color: '#686868' }}>Correo electrónico</Label>
                      <Input id="gmail" type="gmail" placeholder="" />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6 lg:col-span-3 flex justify-center items-end">
                    <Button variant='outline'>Cambiar Correo</Button>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-2  h-full  pr-6 pl-6 pb-6">
                  <div className="col-span-12 md:col-span-6 lg:col-span-9 pt-5">
                    <div className="grid  items-center gap-3  ">
                      <Label htmlFor="picture" style={{ color: '#686868' }} >Correo electrónico</Label>
                      <Input id="gmail" type="gmail" placeholder="" />
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-6 lg:col-span-3 flex justify-center items-end">
                    <Button variant='outline'>Cambiar Contraseña</Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>

        </div>
      </div>


    </>
  );
}
