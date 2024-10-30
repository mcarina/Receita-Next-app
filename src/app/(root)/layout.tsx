import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { GiSpellBook } from "react-icons/gi";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = await getLoggedInUser();

  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn || null} /> 

        <div className="flex sixe-full flex-col">
          <div className= "root-layout">
            <GiSpellBook className="size-[30px] max-xl:size-30" color="black" />
            <div>
              <MobileNav user={loggedIn || null} /> 
            </div>
          </div>
        {children}
        </div>
    </main>

  );
}
