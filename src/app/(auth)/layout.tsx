import { GiSpellBook } from "react-icons/gi";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex min-hscreen w-full">
          {children}

          <div className="auth-asset">
            <div>
            <GiSpellBook className="size-[140px] max-xl:size-10 opacity-80" color="black" />
            <h1 className="sidebar-logo">Recipe App</h1>
            </div>
            <p className="text-18 truncate text-gray-700 font-semibold">
              Mergulhe neste mundo repleto de sabores e descubra o chef que há em você. 
              <br/>
              Explore, crie e surpreenda-se com cada prato que preparar!</p>
          </div>
      </main>
  
    );
  }
  