'use client'

import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GiSpellBook } from "react-icons/gi";
const Sidebar = ({user}: SidebarProps) => {

    const pathname = usePathname();    
  return (
    <selection className="sidebar">
        <nav className="flex flex-col gap-4">
            <Link href="/" className="mb-12 cursor-pointer flex items-center gap-2">
                <GiSpellBook className="size-[30px] max-xl:size-15" color="black" />
                <h1 className="sidebar-logo">Receitas App</h1>
            </Link>

            {sidebarLinks.map((item) => {
                
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                return(
                    <Link href={item.route} key={item.label} className={cn ('sidebar-link', { 'bg-bank-gradient': isActive })}>
                        <div className="relative size-6">
                            {/* <item.icon fill />  */}
                            <p className={cn ('sidebar-label', { '!text-white': isActive })}>{item.label}</p>
                        </div>
                    </Link>
                )
            })}
            USER
        </nav> 
            FOOTER
    </selection>
  )
}

export default Sidebar