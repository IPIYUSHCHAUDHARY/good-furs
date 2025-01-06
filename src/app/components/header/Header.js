"use client";

import { Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel, Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import Image from 'next/image';
import Link from 'next/link';
import { LocationIcon, SearchIcon, ChevronDownIcon, LoginIcon, ChevronRightIcon } from '../icons/Icons';
import { useState } from 'react';

const navigation = [
    { name: 'All Puppies', href: '#' },
    { name: 'Puppy Breeds', href: '#' },
    { name: 'Sell Puppy', href: '#' },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className='pe-4'>
            <div className="container-full mx-auto flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex ">
                    <Link href="#" className="">
                        <span className="sr-only">Good Furs</span>
                        <Image
                            src="/images/logo.png" // Path relative to the public folder
                            alt="Good Furs logo"
                            width={200}
                            height={84}
                            className="h-11 lg:h-20 w-auto"
                        />
                    </Link>
                </div>

                {/* Search Bar */}
                <div className="ms-6 me-auto">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search puppies here..."
                            className="w-full py-2 ps-4 pe-10 border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                        <button className="absolute top-1/2 right-2 transform -translate-y-1/2 p-1 rounded-full text-orange-500 hover:text-white hover:bg-orange-500">
                            <SearchIcon width="18" height="18" />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex lg:hidden ms-6">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-800"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>

                {/* Navbar */}
                <nav aria-label="Global" className="flex items-center justify-between gap-6 ms-6">
                    <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                        <Link href="#" className="text-sm/6 text-gray-800 hover:text-orange-500">
                            All Puppies
                        </Link>
                        <Popover className="relative">
                            <PopoverButton className="flex items-center gap-x-2 text-sm/6 text-gray-800 hover:text-orange-500">
                                Puppy Breeds
                                <ChevronDownIcon aria-hidden="true" className="flex-none" width="12" height="6" />
                            </PopoverButton>

                            <PopoverPanel
                                transition
                                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-48 overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <Link href="#" className="block text-sm/6 text-gray-800 hover:text-white hover:bg-orange-500 p-4">
                                    German Shepard
                                </Link>
                                <Link href="#" className="block text-sm/6 text-gray-800 hover:text-white hover:bg-orange-500 p-4">
                                    German Shepard
                                </Link>
                                <Link href="#" className="block text-sm/6 text-gray-800 hover:text-white hover:bg-orange-500 p-4">
                                    German Shepard
                                </Link>
                            </PopoverPanel>
                        </Popover>
                        <Link href="#" className="text-sm/6 text-gray-800 hover:text-orange-500">
                            Sell Puppy
                        </Link>
                    </PopoverGroup>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
                        <Popover className="relative">
                            <PopoverButton className="flex items-center gap-x-2 border border-1 py-2 px-6 h-full rounded-full text-sm/6 text-gray-800 hover:text-orange-500">
                                <LocationIcon aria-hidden="true" className="flex-none text-gray-800" width="17" height="20" />
                                Chandigarh
                                <ChevronDownIcon aria-hidden="true" className="flex-none text-gray-800" width="12" height="6" />
                            </PopoverButton>

                            <PopoverPanel
                                transition
                                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-48 overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <Link href="#" className="block text-sm/6 text-gray-800 hover:text-white hover:bg-orange-500 p-4">
                                    Mohali
                                </Link>
                                <Link href="#" className="block text-sm/6 text-gray-800 hover:text-white hover:bg-orange-500 p-4">
                                    Ropar
                                </Link>
                                <Link href="#" className="block text-sm/6 text-gray-800 hover:text-white hover:bg-orange-500 p-4">
                                    Ludhiana
                                </Link>
                            </PopoverPanel>
                        </Popover>
                        <Link href="#" className="flex items-center gap-x-4 rounded-full text-sm/6 bg-gray-200 p-1 text-gray-800 hover:text-orange-500">
                            <LoginIcon width="44" height="44" className="text-orange-500" />
                            Login / Sign Up
                            <ChevronRightIcon width="6" height="12" className="me-5" />
                        </Link>
                    </div>
                </nav>

            </div>

            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Good Furs</span>
                            <Image
                                src="/images/logo.png" // Path relative to the public folder
                                alt="Good Furs logo"
                                width={200}
                                height={84}
                                className="h-11 w-auto"
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-800"
                        >
                            <span className="sr-only">Close menu</span>
                            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-gray-800 hover:bg-gray-50"
                                >
                                    All Puppies
                                </Link>
                                <Disclosure as="div" className="-mx-3">
                                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 text-gray-800 hover:bg-gray-50">
                                        Puppy Breeds
                                        <ChevronDownIcon aria-hidden="true" className="flex-none group-data-[open]:rotate-180" width="12" height="6" />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        <DisclosureButton
                                            as="a"
                                            href="#"
                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 text-gray-800 hover:bg-gray-50"
                                        >
                                            German Shepard
                                        </DisclosureButton>
                                        <DisclosureButton
                                            as="a"
                                            href="#"
                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 text-gray-800 hover:bg-gray-50"
                                        >
                                            German Shepard
                                        </DisclosureButton>
                                        <DisclosureButton
                                            as="a"
                                            href="#"
                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm/7 text-gray-800 hover:bg-gray-50"
                                        >
                                            German Shepard
                                        </DisclosureButton>
                                    </DisclosurePanel>
                                </Disclosure>
                                <Link href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-gray-800 hover:bg-gray-50"
                                >
                                    Sell Puppy
                                </Link>
                            </div>
                            <div className="py-6">
                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 text-gray-800 hover:bg-gray-50"
                                >
                                    Login / Sign Up
                                </Link>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}