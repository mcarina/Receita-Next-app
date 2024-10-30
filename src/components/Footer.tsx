import { LuLogOut } from "react-icons/lu";

const Footer = ({user, type = 'desktop'}: FooterProps) => {
    return (
    <footer className="footer">
        <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
            <p className="text-xl font-bold text-gray-700">
            {user?.name?.[0] ?? 'Visitante'}
            </p>
        </div>

        <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>
            <h1 className="text-14 truncate text-gray-700 font-semibold">
                {user?.name || "visitante"}
            </h1>
            <p className="text-14 truncate font-normal text-gray-600">
                {user?.email || "nunhem e-mail localizado"}
            </p>
        </div>

        <div className="footer_image">
            <LuLogOut className="size-[20px] max-xl:size-15" color="black" />
        </div>

    </footer>
    )
}

export default Footer