import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";

export default function NavMenu() {
    return (
        <header>
            <nav className="flex flex-row items-center justify-between mx-5 my-3 px-5  border-2  border-black">
                <Link href='/'>
                    <Image src={logo} alt="logo" width={100} height={100} />
                </Link>
                <ul className="flex flex-row">
                    <li className="hover:bg-black/80 hover:text-white p-4"><Link href="/about">About</Link></li>
                    <li className="hover:bg-black/80 hover:text-white p-4"><Link href="/profile">Profile</Link></li>
                    <li className="hover:bg-black/80 hover:text-white p-4"><Link href="/blog">Blog</Link></li>
                    <li className="hover:bg-black/80 hover:text-white p-4"><Link href="/users">Users</Link></li>
                </ul>
            </nav>

        </header>
    )
}