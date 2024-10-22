import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { GiSpellBook } from "react-icons/gi";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = { firstName: 'Márcia', lastName: 'Apolinário' };

  return (
    <main className="flex n-screen w-full font-inter">
        <Sidebar user={loggedIn.firstName} />

        <div className="flex sixe-full flex-col">
          <div className= "root-layout">
            <GiSpellBook className="size-[30px] max-xl:size-30" color="black" />
            <div>
              <MobileNav user={loggedIn.firstName} />
            </div>
          </div>
        {children}
        </div>
    </main>

  );
}
