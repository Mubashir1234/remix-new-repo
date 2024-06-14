import React, { useEffect, useState } from "react"
import { Button } from "~/components/ui/button"
import {
    ChevronLeft,
    ChevronRight,
    Copy,
    CreditCard,
    File,
    // Home,
    ListFilter,
    MoreVertical,
    Package,
    Package2,
    PanelLeft,
    Search,
    Settings,
    ShoppingCart,
    Truck,
    Users2,
} from "lucide-react"
import { Input } from "~/components/ui/input"
import { Card } from "~/components/ui/card"
import {
    Table, TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table"

import MyChart from '../Chart'

// import { Link } from "remix";
import './home.css'
import { NavigationMenu, NavigationMenuLink } from "~/components/ui/navigation-menu"
export default function Home() {

    const now = new Date();

    const[time] = React.useState(now.toLocaleTimeString())


    const [chartData] = React.useState([
        {
            label: '12 am',
            data: {
                'Incidentes en Dispositivos': 10,
                'Intrusiones por Correo Electrónico': 2,
                'Violaciones en la Red Interna': 1,
            },
        },
        {
            label: '1 am',
            data: {
                'Incidentes en Dispositivos': 8,
                'Intrusiones por Correo Electrónico': 3,
                'Violaciones en la Red Interna': 4,
            },
        },
        {
            label: '2 am',
            data: {
                'Incidentes en Dispositivos': 12,
                'Intrusiones por Correo Electrónico': 1,
                'Violaciones en la Red Interna': 2,
            },
        },
        // Add more data points as needed
    ]);

    const passwords = [
        {
            platform: <img src="../../../public/assets/images/logos_netflix-icon.png" alt="Logo" className="h-8" style={{ width: 24, height: 24 }} />,
            email: "abartres7@gmail.com",
            statusClass: "text-[#EC5555]",
            status: "Comprometida",
            action: "Tu contraseña se ha visto en alguna filtración de la dark web."
        },
        {
            platform: <img src="../../../public/assets/images/logos_netflix-icon1.png" alt="Logo" className="h-8" style={{ width: 24, height: 24 }} />,
            email: "abartres7@gmail.com",
            statusClass: "text-[#EC5555]",
            status: "Comprometida",
            action: "Tu contraseña se ha visto en alguna filtración de la dark web."
        },
        {
            platform: <img src="../../../public/assets/images/skill-icons_instagram.png" alt="Logo" className="h-8" style={{ width: 24, height: 24 }} />,
            email: "abartres7@gmail.com",
            statusClass: "text-[#FF8F1D]",
            status: "Debil",
            action: "Tu contraseña se ha visto en alguna filtración de la dark web."
        },
        {
        platform: <img src="../../../public/assets/images/skill-icons_linkedin.png" alt="Logo" className="h-8" style={{ width: 24, height: 24 }} />,
        email: "abartres7@gmail.com",
        statusClass: "text-[#FF8F1D]",
        status: "Debil",
        action: "Tu contraseña se ha visto en alguna filtración de la dark web."
        },
        {
            platform: <img src="../../../public/assets/images/skill-icons_linkedin2.png" alt="Logo" className="h-8" style={{ width: 24, height: 24 }} />,
            email: "abartres7@gmail.com",
            statusClass: "text-[#2F9778]",
            status: "Segura",
            action: "Tu contraseña se ha visto en alguna filtración de la dark web."
        }
    ];

    return (
        <div className={`bg-[#F8F8F8]`}>
            <header className="flex container mx-auto content-container flex-col sm:flex-row headerUi items-center justify-between my-4 py-4 bg-white text-white">
                {/* Logo */}
                <div className="flex items-center">
                    <img src="../../../public/assets/images/logo.png" alt="Logo" className="h-8" style={{ width: 163, height: 30 }} />
                </div>

                {/* Search Bar */}
                <div className="flex-1 headerSearch">
                    <div className="relative flex items-center search_icon">
                        <Search className="absolute left-3 w-5 h-5 text-gray-500 searchUi" />
                        <input
                        onChange={()=>{console.log("hello")}}
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
            <div className={`h-[100%]`}>
                <div className=" container mx-auto content-container" >
                    <div>
                        <div className="py-6">
                            <div className="flex items-center" style={{ justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                                <div style={{ fontSize: 16, fontWeight: 'bold', color: '#1D1D1D' }}>Panel de Seguridad</div>

                                <div className="flex button_div">
                                    <Button className="btn-class h-1">
                                        24 Horas
                                    </Button>
                                    <button className="w-full text-[#686868] text-xs font-normal py-2 px-4 rounded btn-class-hover">
                                        7 Dias
                                    </button>
                                    <button style={{ whiteSpace: 'nowrap' }} className="w-full btn-class-hover text-[#686868] text-xs font-normal py-2 px-4 rounded">
                                        30 Dias
                                    </button>
                                    <button className="btn-class-hover text-[#686868] text-xs font-normal py-2 px-4 rounded w-full">
                                        Personalizado
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div >
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-12 md:col-span-12 lg:col-span-6 ">
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="col-span-12 md:col-span-12 lg:col-span-6">
                                        <Card className="sm:col-span-1 w-1/1" >
                                            <p className="text-[#1D1D1D] font-semibold text-sm p-4" style={{ fontSize: '18px' }}>Correo Electrónico</p>
                                            <div className="px-4">
                                                <div className="bg-[#F8F8F8] rounded-lg p-4" >
                                                    <div className="flex flex-row gap-3 w-full items-center justify-content-center mb-3">
                                                        <div className="bg-[white] p-2 rounded-full">
                                                            <img src="../../../public/assets/images/Phissing.png" alt="Logo" className="h-8 w-full" style={{ width: 24, height: 24 }} />
                                                        </div>
                                                        <h5 className="text-base font-bold ">Phishing</h5>
                                                    </div>
                                                    <div className="flex flex-col sm:flex-row items-center justify-between mobile-view">
                                                        <div style={{width:'50%'}}>
                                                            <p className="text-[#2E3079] size-8 text-lg text-[32px] font-bold mb-2" style={{ color: '#2E3079', fontSize: '32px' }}>183</p>
                                                            <p className=" text-sm text-[#1D1D1D]" style={{ fontSize: '13px' }}>Recibidos</p>
                                                        </div>
                                                        <div style={{width:'50%'}}>
                                                            <p className="text-[#2E3079] size-8 text-lg text-[32px] font-bold mb-2" style={{ color: '#2E3079', fontSize: '32px' }}>72</p>
                                                            <p className="text-sm text-[#1D1D1D]" style={{ fontSize: '13px' }}>Enviados</p>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-4">

                                                <div className="bg-[#F8F8F8] rounded-lg p-4" >
                                                    <div className="flex flex-row gap-3 w-full items-center justify-content-center mb-3">
                                                        <div className="bg-[white] p-2 rounded-full">
                                                            <img src="../../../public/assets/images/Malware.png" alt="Logo" className="h-8 w-full" style={{ width: 24, height: 24 }} />
                                                        </div>
                                                        <h5 className="text-base font-bold ">Malware</h5>
                                                    </div>
                                                    <div className="flex flex-col sm:flex-row items-center justify-between mobile-view">
                                                        <div style={{width:'50%'}}>
                                                            <p className="text-[#EC5555] size-8 text-lg text-[32px] font-bold mb-2" style={{ color: '#EC5555', fontSize: '32px' }}>19</p>
                                                            <p className="text-sm text-[#1D1D1D]" style={{ fontSize: '13px' }}>Bloqueaados</p>
                                                        </div>
                                                        <div style={{width:'50%'}}>
                                                            <p className="text-[##FF8F1D] size-8 text-lg text-[32px] font-bold mb-2" style={{ color: '#FF8F1D', fontSize: '32px' }}>2</p>
                                                            <p className="text-sm text-[#1D1D1D]" style={{ fontSize: '13px' }}>Pendientes</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </Card>


                                        
                                    </div>
                                    <div className="col-span-12 md:col-span-12 lg:col-span-6">
                                        <Card className="sm:col-span-1 w-1/1" >
                                            <p className="text-[#1D1D1D] font-semibold text-sm p-4" style={{ fontSize: '18px' }}>Seguridad en Dispositivos</p>
                                            <div className="px-4">

                                                <div className="bg-[#F8F8F8] rounded-lg p-4" >
                                                    <div className="flex flex-row gap-3 w-full items-center justify-content-center mb-3">
                                                        <div className="bg-[white] p-2 rounded-full">
                                                            <img src="../../../public/assets/images/Phone.png" alt="Logo" className="h-8 w-full" style={{ width: 24, height: 24 }} />
                                                        </div>
                                                        <h5 className="text-base font-bold ">Móvil</h5>
                                                    </div>
                                                    <div className="flex flex-col sm:flex-row items-center justify-between mobile-view">
                                                        <div style={{width:'50%'}}>
                                                            <p className="text-[#2E3079] size-8 text-lg text-[32px] font-bold mb-2" style={{ fontSize: '32px', color: '#2F9778' }}>17</p>
                                                            <p className=" text-sm text-[#1D1D1D]" style={{ fontSize: '13px' }}>Alertas Bloqueadas</p>
                                                        </div>
                                                        <div style={{width:'50%'}}>
                                                            <p className="text-[#2E3079] size-8 text-lg text-[32px] font-bold mb-2" style={{ fontSize: '32px', color: '#2F9778' }}>0</p>
                                                            <p className="text-sm text-[#1D1D1D]" style={{ fontSize: '13px' }}>Pendientes</p>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-4">

                                                <div className="bg-[#F8F8F8] rounded-lg p-4" >
                                                    <div className="flex flex-row gap-3 w-full items-center justify-content-center mb-3">
                                                        <div className="bg-[white] p-2 rounded-full">
                                                            <img src="../../../public/assets/images/Monitor.png" alt="Logo" className="h-8 w-full" style={{ width: 24, height: 24 }} />
                                                        </div>
                                                        <h5 className="text-base font-bold ">Ordenador</h5>
                                                    </div>
                                                    <div className="flex flex-col sm:flex-row items-center justify-between mobile-view">
                                                        <div style={{width:'50%'}}>
                                                            <p className="text-[#EC5555] size-8 text-lg text-[32px] font-bold mb-2" style={{ fontSize: '32px', color: '#2F9778' }}>183</p>
                                                            <p className="text-sm text-[#1D1D1D]" style={{ fontSize: '13px' }}>Bloqueaados</p>
                                                        </div>
                                                        <div style={{width:'50%'}}>
                                                            <p className="text-[##FF8F1D] size-8 text-lg text-[32px] font-bold mb-2" style={{ fontSize: '32px', color: '#FF8F1D' }}>2</p>
                                                            <p className="text-sm text-[#1D1D1D]" style={{ fontSize: '13px' }}>Pendientes</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-12 md:col-span-12 lg:col-span-6 ">
                                <div
                                    className={`w-full shadow-[0px_4px_16px_rgba(41,_41,_62,_0.08)] rounded-xl bg-main-colors-neutral-50 flex flex-col items-start justify-start p-4 box-border gap-[16px] leading-[normal] tracking-[normal] text-left text-lg text-main-colors-black-500 font-large `}
                                    style={{ backgroundColor: '#FFF' }}
                                >
                                    <h3 className="m-0 relative text-inherit leading-[26px] font-semibold font-inherit">
                                        Integridad de la Infraestructura
                                    </h3>
                                    <section className="self-stretch rounded-lg bg-main-colors-light-grey-500 overflow-auto flex flex-col items-start justify-start pt-3 px-3 pb-[15px] box-border gap-[23px] max-w-full text-left text-xs text-main-colors-black-500 font-large" style={{ backgroundColor: '#F8F8F8', marginTop: "7px" }}>
                                        <div className="flex flex-row items-start justify-start gap-[8px] mq625:flex-wrap">
                                            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                                                <div className="w-2.5 h-2.5 relative rounded-[50%] bg-support-colors-wrong-red-500" />
                                            </div>
                                            <div className="flex flex-row items-center justify-center py-0 pr-1 pl-0">
                                                <div className="mr-2" style={{ backgroundColor: '#EC5555', height: '10px', width: '10px', borderRadius: '5px' }} />
                                                <div className="relative leading-[20px] text-[#1D1D1D]">
                                                    Incidentes en Dispositivos
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                                                <div className="w-2.5 h-2.5 relative rounded-[50%] bg-darkorange" />
                                            </div>
                                            <div className="flex flex-row items-center justify-center py-0 pr-1 pl-0">
                                                <div className="mr-2" style={{ backgroundColor: '#FF8F1D', height: '10px', width: '10px', borderRadius: '5px' }} />
                                                <div className="relative leading-[20px] text-[#1D1D1D]">
                                                    Intrusiones por Correo Electrónico
                                                </div>
                                            </div>
                                            <div className="flex flex-row items-center justify-center py-0 pr-1 pl-0">
                                                <div className="mr-2" style={{ backgroundColor: '#3784ED', height: '10px', width: '10px', borderRadius: '5px' }} />
                                                <div className="relative leading-[20px] text-[#1D1D1D]">
                                                    Violaciones en la Red Interna
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[612px] flex flex-col items-start justify-start py-0 px-0 box-border gap-[4px] max-w-[105%] shrink-0 text-smi text-main-colors-black-300">
                                            <div className="w-[672px] h-[204px] relative max-w-[110%] shrink-0 mq625:h-auto mq625:min-h-[204]">
                                                <div className="absolute top-[0px] left-[0px] w-[584px] flex flex-row flex-wrap items-start justify-start gap-[4px] max-w-full">
                                                    <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[28px]">
                                                        300
                                                    </a>
                                                    <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[359px] max-w-full mq450:min-w-full">
                                                        <img
                                                            className="self-stretch relative max-w-full overflow-hidden max-h-full"
                                                            loading="lazy"
                                                            alt=""
                                                            src="/vector-12.svg"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="absolute top-[37px] left-[0px] w-[584px] flex flex-row flex-wrap items-start justify-start gap-[4px] max-w-full">
                                                    <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[28px]">
                                                        200
                                                    </a>
                                                    <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[359px] max-w-full mq450:min-w-full">
                                                        <img
                                                            className="self-stretch relative max-w-full overflow-hidden max-h-full"
                                                            loading="lazy"
                                                            alt=""
                                                            src="/vector-12.svg"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="absolute top-[74px] left-[0px] w-[584px] flex flex-row flex-wrap items-start justify-start gap-[4px] max-w-full">
                                                    <div className="w-7 relative inline-block shrink-0">100</div>
                                                    <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[359px] max-w-full mq450:min-w-full">
                                                        <img
                                                            className="self-stretch relative max-w-full overflow-hidden max-h-full"
                                                            alt=""
                                                            src="/vector-10.svg"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="absolute top-[111px] left-[0px] w-[584px] flex flex-row flex-wrap items-start justify-start gap-[4px] max-w-full">
                                                    <div className="w-7 relative inline-block shrink-0">50</div>
                                                    <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[359px] max-w-full mq450:min-w-full">
                                                        <img
                                                            className="self-stretch relative max-w-full overflow-hidden max-h-full"
                                                            alt=""
                                                            src="/vector-9.svg"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="absolute top-[148px] left-[0px] w-[584px] flex flex-row flex-wrap items-start justify-start gap-[4px] max-w-full">
                                                    <div className="w-7 relative inline-block shrink-0">10</div>
                                                    <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[359px] max-w-full mq450:min-w-full">
                                                        <img
                                                            className="self-stretch relative max-w-full overflow-hidden max-h-full"
                                                            alt=""
                                                            src="/vector-8.svg"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="absolute top-[185px] left-[0px] w-[584px] flex flex-row flex-wrap items-start justify-start gap-[4px] max-w-full">
                                                    <div className="w-7 relative inline-block shrink-0">0</div>
                                                    <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border min-w-[359px] max-w-full mq450:min-w-full">
                                                        <img
                                                            className="self-stretch relative max-w-full overflow-hidden max-h-full"
                                                            alt=""
                                                            src="/vector-7.svg"
                                                        />
                                                    </div>
                                                </div>
                                                <img
                                                    className="absolute top-[47px] left-[32px] w-[552px] h-[148px] z-[1]"
                                                    alt=""
                                                    src="../../../public/assets/images/Linegraph.png"
                                                />
                                                <div className="absolute top-[6px] left-[288px] bg-white shadow-[0px_4px_16px_rgba(41,_41,_62,_0.08)] rounded-md bg-main-colors-neutral-50 flex flex-col items-start justify-start p-2 gap-[2.7px] z-[2] text-xs text-main-colors-black-500">
                                                    <div className="relative leading-[20px] text-main-colors-black-300 text-right">
                                                       {time}
                                                    </div>
                                                    <div className="w-[246px] flex flex-row items-start justify-start">
                                                        <div className="flex-1 flex flex-row items-center justify-between">
                                                            <div className="flex flex-row items-center ">
                                                                <div className="mr-2" style={{ backgroundColor: '#EC5555', height: '10px', width: '10px', borderRadius: '5px' }} />
                                                                <div className="relative leading-[20px] font-medium">
                                                                    Incidentes en Dispositivos:
                                                                </div>
                                                            </div>
                                                            <b className="relative leading-[20px] font-bold text-right inline-block min-w-[8px]">
                                                                2
                                                            </b>
                                                        </div>
                                                    </div>
                                                    <div className="w-[246px] flex flex-row items-start justify-start">
                                                        <div className="flex-1 flex flex-row items-center justify-between">
                                                            <div className="flex flex-row items-center ">
                                                                <div className="mr-2" style={{ backgroundColor: '#FF8F1D', height: '10px', width: '10px', borderRadius: '5px' }} />
                                                                <div className="relative leading-[20px] font-medium">
                                                                    Intrusiones por Correo Electrónico:
                                                                </div>
                                                            </div>
                                                            <b className="relative leading-[20px] font-bold text-right inline-block min-w-[8px]">
                                                                0
                                                            </b>
                                                        </div>
                                                    </div>

                                                    <div className="w-[246px] flex flex-row items-start justify-start">
                                                        <div className="flex-1 flex flex-row items-center justify-between">
                                                            <div className="flex flex-row items-center ">
                                                                <div className="mr-2" style={{ backgroundColor: '#3784ED', height: '10px', width: '10px', borderRadius: '5px' }} />
                                                                <div className="relative leading-[20px] font-medium">
                                                                    Violaciones en la Red Interna:
                                                                </div>
                                                            </div>
                                                            <b className="relative leading-[20px] font-bold text-right inline-block min-w-[8px]">
                                                                8
                                                            </b>
                                                        </div>
                                                    </div>


                                                </div>
                                                {/* <img
                                                    className="absolute right-[247.5px] bottom-[9px] w-3 h-[77px] z-[2]"
                                                    loading="lazy"
                                                     
                                                /> */}
                                            </div>
                                            <div className="self-stretch flex flex-row items-start justify-end max-w-full">
                                                <div className="w-[570px] flex flex-row items-start justify-start gap-[14px] max-w-full mq625:flex-wrap">
                                                    <div className="relative inline-block min-w-[37px] shrink-0">
                                                        12 am
                                                    </div>
                                                    <div className="relative inline-block min-w-[29px] shrink-0">
                                                        1 am
                                                    </div>
                                                    <div className="relative inline-block min-w-[31px] shrink-0">
                                                        2 am
                                                    </div>
                                                    <div className="relative inline-block min-w-[31px] shrink-0">
                                                        3 am
                                                    </div>
                                                    <div className="relative inline-block min-w-[31px] shrink-0">
                                                        4 am
                                                    </div>
                                                    <div className="relative inline-block min-w-[31px] shrink-0">
                                                        5 am
                                                    </div>
                                                    <div className="relative inline-block min-w-[31px] shrink-0">
                                                        6 am
                                                    </div>
                                                    <div className="relative inline-block min-w-[30px] shrink-0">
                                                        7 am
                                                    </div>
                                                    <b className="relative font-bold text-main-colors-black-500 inline-block min-w-[32px] shrink-0">
                                                        8 am
                                                    </b>
                                                    <div className="relative inline-block min-w-[31px] shrink-0">
                                                        9 am
                                                    </div>
                                                    <div className="relative inline-block min-w-[37px] shrink-0">
                                                        10 am
                                                    </div>
                                                    <div className="relative inline-block min-w-[35px] shrink-0">
                                                        11 am
                                                    </div>
                                                    <div className="h-4 w-[39px] relative font-small-1-m13b-regular inline-block shrink-0">
                                                        12 pm
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="grid grid-cols-12 gap-4" style={{ marginTop: '10px' }}>
                        <div className="col-span-12 md:col-span-12 lg:col-span-6" >
                            <div className="flex justify-between gap-6">
                                <div className=" w-full bg-white rounded-lg border pt-6 pb-5 px-4">
                                    <h1 className="text-lg font-bold mb-4">Gestor de Contraseñas</h1>


                                    <div className="mx-auto">
                                        <Table className="order-2">
                                            <TableHeader>
                                                <TableRow className="text-[#1D1D1D] text-sm">
                                                    <TableHead className=" py-2 text-center" style={{ fontSize: '16px', padding: 0 , fontWeight:'bold', color:'#1D1D1D'}}>Plataforma</TableHead>
                                                    <TableHead className=" py-2 text-center" style={{ fontSize: '16px', padding: 0 , fontWeight:'bold', color:'#1D1D1D'}}>Correo</TableHead>
                                                    <TableHead className=" py-2 text-center" style={{ fontSize: '16px', padding: 0 , fontWeight:'bold', color:'#1D1D1D'}}>Estado</TableHead>
                                                    <TableHead className=" py-2 text-center" style={{ fontSize: '16px', padding: 0, fontWeight:'bold', color:'#1D1D1D' }}>Acciones</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {passwords.map((password, index) => (
                                                    <TableRow key={index} className="border-gray-400 text-gray-700 text-sm" style={{background:(index % 2 === 0) ? 'white':'#F8F8F8'}}>
                                                        <TableCell className="px-2 py-2 items-center justify-center flex" style={{ height: '56px' }}>{password.platform}</TableCell>
                                                        <TableCell className="px-2 py-2 text-center">{password.email}</TableCell>
                                                        <TableCell className={`px-2 py-2 text-center ${password.statusClass}`}>{password.status}</TableCell>
                                                        <TableCell className="px-2 py-2 text-center">{password.action}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-12 lg:col-span-6">
                            <div className="grid grid-cols-12 gap-4">
                                <div className="col-span-12 md:col-span-12 lg:col-span-6 ">
                                    <Card className="sm:col-span-1 w-1/1">
                                        <p className="text-[#1D1D1D] h-50 font-semibold text-sm p-4 mb-2" style={{ fontSize: '18px' }}>Dominio Seguro</p>
                                        <div className="px-4">

                                            <div className="bg-[#F8F8F8] h-40 rounded-lg shadow-md p-4 mb-2">
                                                <div className="flex flex-row gap-3 w-full items-center justify-content-center mb-3">

                                                    <h5 className="text-base font-bold ">Filtraciones Detectadas</h5>
                                                </div>
                                                <div className="flex flex-col sm:flex-row items-center justify-between mobile-view">
                                                    <div style={{ width: '50%' }}>
                                                        <p className="text-[#b63e3e] size-8 text-lg text-[32px] font-bold mb-2" style={{ fontSize: '32px' }}>5</p>
                                                        <p className=" text-sm text-[#1D1D1D]" style={{ fontSize: '13px' }}>Dominio</p>
                                                    </div>
                                                    <div style={{ width: '50%' }}>
                                                        <p className="text-[#b63e3e] size-8 text-lg text-[32px] font-bold mb-2" style={{ fontSize: '32px' }}>7</p>
                                                        <p className="text-sm text-[#1D1D1D]" style={{ fontSize: '13px' }}>Correo</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="p-4">

                                            <div className="h-30 bg-[#F8F8F8] rounded-lg shadow-md p-4 mb-6 mt-2">
                                                <div className=" h-18 flex flex-row gap-3 w-full items-center justify-content-center mb-6">

                                                    <h5 className="text-base font-bold ">Autenticación correo   </h5>
                                                </div>

                                                <div className="flex flex-col sm:flex-row items-center justify-between mobile-view">
                                                    <div className="flex flex-col items-center">
                                                    <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="green" viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/>
                                                    </svg>

                                                    </div>
                                                    <div className="flex flex-col items-center">
                                                    <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="red" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm7.707-3.707a1 1 0 0 0-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 1 0 1.414 1.414L12 13.414l2.293 2.293a1 1 0 0 0 1.414-1.414L13.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414L12 10.586 9.707 8.293Z" clip-rule="evenodd"/>
</svg>

                                                        {/* <img src="../../../public/assets/images/cross.png" alt="Logo" className="h-8 w-full mb-1" style={{ width: 32, height: 32 }} />
                                                        <p className=" text-sm text-[#1D1D1D]" style={{ fontSize: '13px' }}>SPF</p> */}
                                                    </div>
                                                    <div className="flex flex-col items-center">
                                                    <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="green" viewBox="0 0 24 24">
                                                    <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clip-rule="evenodd"/>
                                                    </svg>

                                                        
                                                        {/* <img src="../../../public/assets/images/tick.png" alt="Logo" className="h-8 w-full mb-1" style={{ width: 32, height: 32 }} />
                                                        <p className=" text-sm text-[#1D1D1D]" style={{ fontSize: '13px' }}>DKIM</p> */}
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                                <div className=" col-span-12 md:col-span-12 lg:col-span-6 ">
                                    <Card className=" h-[100%] sm:col-span-1 w-1/1 " >
                                        <p className="text-[#1D1D1D] font-semibold text-sm p-4" style={{ fontSize: "18px" }}>Protección y Certificaciones</p>
                                        <div className="px-4">

                                            <div className="bg-[#F8F8F8] rounded-lg shadow-md p-7 mt-2" >
                                                <div className=" flex flex-row gap-3 w-full items-center justify-content-center mb-3">
                                                    <h5 className="text-base font-bold " style={{ fontSize: "17px" }}>Seguros de Ciberseguridad</h5>
                                                </div>
                                                <div className="flex bg-[#2E30793D] rounded-lg p-2 flex-col sm:flex-row items-center justify-center">
                                                    <div style={{ textAlign: 'center', width: '100%' }}>
                                                        <p className="text-[#2E3079] text-base text-[32px] font-bold mb-2" style={{ fontSize: "13px" }}>Solicitar Seguro: </p>
                                                        <p className=" text-sm text-[#2E3079]" style={{ fontSize: "13px" }}>Protege tu negocio ahora.</p>
                                                    </div>
                                                </div>
                                            </div>
                                                                         
                                        </div>
                                        <div className="px-4 mb-5 mt-5">

                                            <div className="bg-[#F8F8F8] rounded-lg shadow-md p-4" >
                                                <div className="flex flex-row gap-3 w-full items-center justify-content-center mb-3">
                                                    <h5 className="text-base font-bold ">Certificaciones de Compliance</h5>
                                                </div>
                                                <div className="flex bg-[#2E30793D] rounded-lg p-2 flex-col sm:flex-row items-center justify-center">
                                                    <div style={{ textAlign: 'center', width: '100%' }}>
                                                        <p className="text-[#2E3079] text-base text-[32px] font-bold mb-2" style={{ fontSize: "13px" }}>Solicitar ahora: </p>
                                                        <p className=" text-sm text-[#2E3079]">
                                                            Obtén las certificaciones fácilmente.</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </Card>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}