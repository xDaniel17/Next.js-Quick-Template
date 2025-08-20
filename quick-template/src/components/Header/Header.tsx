"use client";

import Link from "next/link";

const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];

const Header: React.FC = () => (
    <header className="w-full bg-gray-900 dark:bg-gray-950 text-white dark:text-gray-100 py-4 px-2 text-center fixed top-0 left-0 z-50 shadow-lg border-b border-gray-800 dark:border-gray-700">
        <div className="mx-3 flex flex-col md:flex-row items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight mb-2 md:mb-0">Next.js - Quick Template</h1>
            <nav>
                <ul className="flex flex-col md:flex-row gap-2 md:gap-6 text-lg font-medium items-center">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="block px-3 py-2 rounded transition-colors hover:text-primary hover:bg-gray-800 dark:hover:bg-gray-900"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </header>
);

export default Header;
