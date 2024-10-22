'use client'

// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet"

import { usePathname } from "next/navigation"
// import { TfiAlignJustify } from "react-icons/tfi";

const MobileNav = ({user}: MobileNavProps) => {

  const pathname = usePathname();
  
  return (
    <section className="w-fulll max-w-[264px]">
      {/* <Sheet>
        <SheetTrigger>
          <TfiAlignJustify  className="size-[30px] max-xl:size-15" color="black" />
        </SheetTrigger>
      </Sheet>
      <SheetContent side="left" className="border-none bg-white">

      </SheetContent> */}

    </section>
  )
}

export default MobileNav