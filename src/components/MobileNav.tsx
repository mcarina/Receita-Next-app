'use client'

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose, 
} from "@/components/ui/sheet"

import { usePathname } from "next/navigation";
import Link from 'next/link';
import { TfiAlignJustify } from "react-icons/tfi";
import { GiSpellBook } from "react-icons/gi";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";

const MobileNav = ({ user }: MobileNavProps) => {

  const pathname = usePathname();
  
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <TfiAlignJustify className="size-[30px] max-xl:size-15" color="black" />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Link href="/" className="cursor-pointer flex items-center gap-1 px-4">
            <GiSpellBook className="size-[30px] max-xl:size-30" color="black" />
            <h1 className="sidebar-logo">Recipe App</h1>
          </Link>

          <div className="mobilenav-sheet">
            <nav className="flex h-full flex-col gap-6 pt-16 text-black">
              {sidebarLinks.map((item) => {
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

                return (
                  <SheetClose asChild key={item.route}>
                    <Link href={item.route} className={cn('sidebar-link', { 'bg-bank-gradient': isActive })}>
                      <div className="relative size-6">
                        <item.icon fill /> 
                        <p className={cn('sidebar-label', { '!text-white': isActive })}>
                          {item.label}
                        </p>
                      </div>
                    </Link>
                  </SheetClose>
                );
              })}
            </nav>
          </div>

        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav;
