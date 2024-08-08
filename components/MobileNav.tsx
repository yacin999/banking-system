"use client"

import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
  


const MobileNav = ({user}: MobileNavProps) => {
    const pathName = usePathname()
  return (
    <section className='w-full max-w-[264px]'>
        <Sheet>
            <SheetTrigger>
                <Image 
                    src={"/icons/hamburger.svg"}
                    width={30}
                    height={30}
                    alt='menu'
                    className='cursor-pointer'
                />
            </SheetTrigger>
            <SheetContent side='left' className='border-none bg-white'>
                <Link href={"/"} className='cursor-pointer flex items-center gap-1 px-4'>
                    <Image 
                        src={"/icons/logo.svg"}
                        width={34}
                        height={34}
                        alt='Horizon logo'
                    />
                    <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Horizon</h1>
                </Link> 

                <div className='mobilenav-sheet'>
                </div>

                {sidebarLinks.map(link => {
                    const isActive = pathName === link.route || pathName.startsWith(`${link.route}/`) 
                    return (
                        <Link 
                            href={link.route} 
                            key={link.label}
                            className={cn("sidebar-link", {
                                "bg-bank-gradient" : isActive
                            })}
                        >
                            <div className='relative size-6'>
                                <Image
                                    src={link.imgURL}
                                    alt={link.label}
                                    fill
                                    className={cn({
                                        "brightness-[3] invert-0" : isActive
                                    })}  
                                />
                            </div>
                            <p className={cn('sidebar-label', {
                                "!text-white" : isActive
                            })}>{link.label}</p>
                        </Link>
                    )
                })}
            </SheetContent>
        </Sheet>
    </section>

  )
}

export default MobileNav