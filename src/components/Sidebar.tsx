'use client'

import { sidebarLinks } from '@/lib/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GiSpellBook } from "react-icons/gi";
import Footer from './Footer'

const Sidebar = ({user}: SiderbarProps) => {

    const pathname = usePathname();   
    
return (
    <section className="sidebar">
        <nav className="flex flex-col gap-2">
            <Link href="/" className="mb-8 cursor-pointer flex items-center gap-2">
                <GiSpellBook className="w-9 h-7" color="#0D6EFD" />
                <h1 className="sidebar-logo bg-[#FDF7F2]">Recipe App</h1>
            </Link>

            {sidebarLinks.map((item) => {
                
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                return(
                    <Link href={item.route} key={item.label} className={cn ('sidebar-link', { 'bg-bank-gradient': isActive })}>
                        <div className="cursor-pointer flex items-center gap-2">
                            <item.icon className="h-5 w-5" /> 
                            <p className={cn ('sidebar-label', { '!text-white': isActive })}>{item.label}</p>
                        </div>
                    </Link>
                )
            })}
        </nav> 
            
        <Footer
            user={user}
        />

    </section>
)
}

export default Sidebar