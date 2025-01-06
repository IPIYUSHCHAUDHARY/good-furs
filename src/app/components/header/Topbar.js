import Link from 'next/link';
import { CallIcon, MailIcon } from '../icons/Icons';

export default function Topbar() {
    return (
        <div className="bg-gray-800 text-white text-sm py-2 px-4">
            <div className="container mx-auto md:flex justify-between items-center">
                {/* Left Side: Contact Info */}
                <div className="flex justify-between sm:justify-normal items-center space-x-4">
                    <div className="flex items-center gap-x-2">
                        <CallIcon width="24" height="24" />
                        <Link href="tel:+919823228382" className="hover:underline">+91 98232 28382</Link>
                    </div>
                    <div className="flex items-center gap-x-2">
                        <MailIcon width="24" height="24" />
                        <Link href="mailto:dummymail@gmail.com" className="hover:underline">dummymail@gmail.com</Link>
                    </div>
                </div>

                {/* Right Side Links */}
                <div className="hidden sm:flex items-center space-x-4">
                    <Link href="/about" className="hover:underline">About Us</Link>
                    <Link href="#" className="hover:underline">Buying a Puppy</Link>
                    <Link href="#" className="hover:underline">Selling a Puppy</Link>
                </div>
            </div>
        </div>
    );
}
