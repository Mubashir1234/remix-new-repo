import React from 'react';
import { ChevronLeft, Search } from 'lucide-react'; // Importing Search icon from lucide-react
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
import { Switch } from "~/components/ui/switch"
import { Button } from '~/components/ui/button';
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
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Index from '..';
import '../home.css'
export default function Home() {

  const location = useLocation()
  const [isChecked, setIsChecked] = React.useState(false);

  console.log(location);




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
              <span style={{ fontSize: 16 }} className="text-[#1D1D1D] ml-3">Alberto Rodrígue</span>
              <img src="../../../public/assets/images/downIcon.png" className="h-8 ml-3" />
            </div>
          </NavigationMenuLink>
        </NavigationMenu>
      </header>
      <div className='bg-[#F8F8F8]' style={{height:'96vh'}}>
        <div className="grid container  min-h-[85vh] p-2">
          <div className="grid grid-cols-12 gap-2 pt-4 h-full">
            <Index />
            <div className="col-span-12 md:col-span-12 lg:col-span-9 h-full p-2">
              <div className='flex items-center gap-1  pb-5 text-[#1D1D1D] '>
                <ChevronLeft />
                <NavigationMenu>
                    <NavigationMenuLink href='/'>
                    <p className="font-medium text-sm leading-tight">Volver al Panel de Seguridad</p>
                    </NavigationMenuLink>
                </NavigationMenu>
              </div>
              <p className="font-inter text-2xl font-bold leading-9 text-left pb-5">Privacidad</p>



              <Card>

                <div className="grid grid-cols-12 gap-2  h-full  pr-6 pl-6 pb-6">
                  <div className="col-span-8 md:col-span-8 lg:col-span-9 pt-5 ">
                    <p className="font-inter font-medium text-xl leading-6 pb-2">Configuración de cookies</p>
                    <p className="font-inter text-[#686868] leading-5">Personaliza las cookies. Consulte Aviso de cookies para obtener más detalles.</p>
                  </div>
                  <div className="col-span-4 md:col-span-4 lg:col-span-3 flex justify-end items-center">
                  <input type="checkbox" value="" className="sr-only peer" checked={true} />
                  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-2  h-full  pr-6 pl-6 pb-6">
                  <div className="col-span-12 md:col-span-12 lg:col-span-8 pt-5 ">
                    <p className="font-medium text-sm leading-tight">Tengo dudas sobre la privacidad de mi cuenta</p>
                  </div>
                  <div className="col-span-12 md:col-span-12 lg:col-span-4 flex justify-end items-center">
                  <Button style={{width:'68%'}} className='bg-[#2E3079] ' variant='default'>Contactar con Soporte</Button>
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
