import WimpyLogo from "@/public/greg-heffley-foto.jpg";
import burgerMenu from "@/public/menu-icon.png"
import Image from "next/image";
import Link from "next/dist/client/link";

function NavBar() {
    return (
        <div className="min-w-ful shadow-xl">
            <div className="flex flex-row justify-center gap-10">
                <Image src={burgerMenu} alt="menu" width={60} height={60} className="sm:hidden" />
                <ul className="hidden sm:hidden md:flex md:justify-around flex-row gap-10 self-center font-medium ">
                    <Link href="/" className="hover:cursor-pointer hover:font-bold">home</Link>
                    <Link href="/about" className="hover:cursor-pointer hover:font-bold">about</Link>
                    <Link href="/latest-review" className="hover:cursor-pointer hover:font-bold">latest review</Link>
                </ul>
                <Image src={WimpyLogo} alt="Wimpy Logo" width={70} height={70} />
            </div>
        </div>
    )
}

export default NavBar;