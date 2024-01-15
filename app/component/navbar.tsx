import WimpyLogo from "@/public/greg-heffley-foto.jpg";
import Image from "next/image";
import Link from "next/dist/client/link";

function NavBar() {
    return (
        <div className="min-w-ful shadow-xl">
            <div className="flex flex-row justify-center gap-10">
                <ul className="flex flex-row gap-10 self-center font-medium">
                    <li className="hover:cursor-pointer hover:font-bold">home</li>
                    <li className="hover:cursor-pointer hover:font-bold">latest review</li>
                    <li className="hover:cursor-pointer hover:font-bold">about</li>
                </ul>
                <Image src={WimpyLogo} alt="Wimpy Logo" width={70} height={70} />
            </div>
        </div>
    )
}

export default NavBar;