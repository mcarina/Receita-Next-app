import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { GiSpellBook } from "react-icons/gi";
// import { redirect } from "next/navigation"

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = await getLoggedInUser();
  // if(!loggedIn) redirect('/sign-in')

  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn || null} /> 

        <div className="flex sixe-full flex-col bg-[#FDF7F2] border ">
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
