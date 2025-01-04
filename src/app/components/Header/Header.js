import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import Image from 'next/image';
import Link from 'next/link';
import Topbar from './Topbar';
import { SearchIcon, ChevronDownIcon, LoginIcon, ChevronRightIcon } from '../icons/Icons';

export default function Header() {
    return (
        <header>
            {/* Topbar */}
            <Topbar />

            {/* Navbar */}
            <nav className="bg-white shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <div className="text-xl font-bold">
                        <Link href="/">
                            <Image
                                src="/images/logo.png" // Path relative to the public folder
                                alt="Good Furs logo"
                                width={200}
                                height={84}
                            />
                        </Link>
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-1/4">
                        <input
                            type="text"
                            placeholder="Search puppies here..."
                            className="w-full px-4 py-2 rounded-full bg-white text-gray-700 placeholder-gray-400 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button className="absolute top-1/2 right-4 transform -translate-y-1/2 text-primary hover:text-gray-500 focus:outline-none">
                            <SearchIcon width="18" height="18" className="text-orange-500" />
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex items-center space-x-6 pe-3">
                        <Link href="#" className="text-gray-800 hover:text-blue-500">All Puppies</Link>
                        {/* Dropdown */}
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <MenuButton className="inline-flex w-full justify-center items-center gap-x-1.5 bg-white px-3 py-2 text-sm text-gray-800 hover:text-blue-500 hover:bg-gray-50">
                                    Puppy Breeds
                                    <ChevronDownIcon aria-hidden="true" className="text-gray-800" width="12" height="6" />
                                </MenuButton>
                            </div>

                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <div className="py-1">
                                    <MenuItem>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                        >
                                            Labrador
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                        >
                                            German Shepard
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                        >
                                            Poodle
                                        </a>
                                    </MenuItem>
                                </div>
                            </MenuItems>
                        </Menu>
                        <Link href="#" className="text-gray-800 hover:text-blue-500">Sell Puppy</Link>

                        {/* Dropdown */}
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <MenuButton className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                    Chandigarh
                                    <ChevronDownIcon aria-hidden="true" className="text-gray-800" width="12" height="6" />
                                </MenuButton>
                            </div>

                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <div className="py-1">
                                    <MenuItem>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                        >
                                            Mohali
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                        >
                                            Ropar
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a
                                            href="#"
                                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                                        >
                                            Ludhiana
                                        </a>
                                    </MenuItem>
                                </div>
                            </MenuItems>
                        </Menu>

                        <Link href="#" className="flex items-center gap-x-1 rounded-full bg-gray-300 p-1 text-gray-800 hover:text-blue-500">
                            <LoginIcon width="44" height="44" className="text-orange-500" />
                            Login/ Sign Up
                            <ChevronRightIcon width="6" height="12" />

                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}