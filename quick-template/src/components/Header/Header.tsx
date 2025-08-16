import Link from "next/link";

const Header: React.FC = () => (
    <header className="w-full bg-gray-900 dark:bg-gray-950 text-white dark:text-gray-100 py-6 px-6 shadow-md flex flex-col md:flex-row items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Next.js - Quick Template</h1>
        <nav className="mt-2 md:mt-0">
            <ul className="flex gap-4">
                <li>
                    <Link href="/home" className="hover:text-primary transition-colors">Home</Link>
                </li>
                <li>
                    <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                </li>
                <li>
                    <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;
