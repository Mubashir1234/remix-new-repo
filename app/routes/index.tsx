import React ,{useState} from 'react'
import { Card } from '~/components/ui/card'
import icon1 from '../../../public/assets/images/solar_user-linear.png'
import icon2 from '../../../public/assets/images/setting-5.png'
import icon3 from '../../../public/assets/images/ion_notifications-outline.png'
import icon4 from '../../../public/assets/images/call (1).png'
import icon5 from '../../../public/assets/images/shield.png'
import icon6 from '../../../public/assets/images/iconoir_language (1).png'
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
import { Button } from '~/components/ui/button'
import { useLocation } from '@remix-run/react';

const Index = () => {
  const [selected, setSelected] = useState(null);
  const location = useLocation()
  console.log("========== location =======",location);

  console.log("=========== selected ==============",selected)
  const arr = [
    {
      icon: icon1,
      nam1: "Mi cuenta",
      doc: "/ProfileSetting"
    },
    {
      icon: icon2,
      nam1: "Mi configuración",
      doc: "/Confiuration"
    },
    {
      icon: icon3,
      nam1: "Notificaciones",
      doc: "/Notification"
    },
    {
      icon: icon4,
      nam1: "Soporte",
      doc: "/Soport"
    }, {
      icon: icon5,
      nam1: "Privacidad",
      doc: "/Privacidad"
    },
    {
      icon: icon6,
      nam1: "Idioma y región",
      doc: "/Idioma"
    }
  ]
  return (
    <Card className="col-span-12 md:col-span-12 lg:col-span-3 flex flex-col justify-between   bg-[#FFFFFF] rounded-12 border border-slate-100 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 p-2 h">
      <div className='flex flex-col justify-between h-90%'>
        <div>
          <div className="flex items-center" style={{ marginLeft: '1rem' }}>
            <img src="/assets/images/user1.png" alt="Logo" className="h-10 pr-5" />
            <div>
              <p style={{ fontSize: 16, fontWeight: 600 }}>Alberto Rodríguez</p>
              <p style={{ fontSize: 14 }}>abartres77@gmail.com</p>
            </div>
          </div>
          <div className='' style={{ marginTop: '20px' }}>
            {arr.map((data,index) => {
              return (
                <>
                  <NavigationMenu className="justify-start" style={{ maxWidth: '100%' , background: data.doc === location.pathname ? '#F8F8F8':'white'}}>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuLink href={data.doc} style={{}} 
                          className={navigationMenuTriggerStyle()}>
                          <div className="flex items-center">
                            <div className="w-15 h-15 pr-3">
                              <img
                                src={data.icon}
                                alt="Logo"
                                className="w-full h-full"
                              />
                            </div>
                            <span style={{ fontSize: 16, fontWeight: 500 }}>{data.nam1}</span>
                          </div>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>

                </>
              )
            })}
          </div>
        </div>


      </div>
      <div className='w-full'>
        <Button style={{ backgroundColor: 'white', color: '#0F172A' }}>Cerrar sesión        </Button>
      </div>
    </Card>
  )
}

export default Index
