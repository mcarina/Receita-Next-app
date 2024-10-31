import { logoutAccount } from "@/lib/actions/user.actions";
import Link from 'next/link'
import { LuLogOut } from "react-icons/lu";
import { useRouter } from 'next/navigation'

const Footer = ({user, type = 'desktop'}: FooterProps) => {
    const router = useRouter();

    const handleLogOut = async () => {
        const loggedOut = await logoutAccount();
           if(loggedOut)router.push('/sign-in') // Redireciona para a página de login após deslogar
    }
    
    return (
        <footer className="footer">
            {user ? (
                <>
                    <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
                        <p className="text-xl font-bold text-gray-700">
                            {user.name[0] ?? 'V'}
                        </p>
                    </div>

                    <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>
                        <h1 className="text-14 truncate text-gray-700 font-semibold">
                            {user.name || "Visitante"}
                        </h1>
                        <p className="text-14 truncate font-normal text-gray-600">
                            {user.email || "Nenhum e-mail localizado"}
                        </p>
                    </div>

                    <div className="footer_image" onClick={handleLogOut}>
                        <LuLogOut className="size-[20px] max-xl:size-15" color="black" />
                    </div>
                </>
            ) : (
                <p className="text-14 font-normal text-gray-600">
                    Já possui conta?&nbsp;
                <Link href={'/sign-in'} className="form-link">
                    Sign-in
                </Link>
                </p>

            )}
        </footer>
    );
}

export default Footer