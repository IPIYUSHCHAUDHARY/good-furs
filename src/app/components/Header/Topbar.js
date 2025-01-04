import Link from 'next/link';
import {CallIcon, MailIcon} from '../icons/Icons';

export default function Topbar() {
    return (
        <div className="bg-gray-800 text-white text-sm py-2 px-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left Side: Contact Info */}
                <div className="flex items-center space-x-4">
                    <span className="flex items-center gap-x-2"><CallIcon width="24" height="24" /> +91 98232 28382</span>
                    <span className="flex items-center gap-x-2"><MailIcon width="24" height="24" /> dummymail@gmail.com</span>
                </div>

                {/* Right Side Links */}
                <div className="flex items-center space-x-4">
                    <Link href="/about">About Us</Link>
                    <Link href="#">Buying a Puppy</Link>
                    <Link href="#">Selling a Puppy</Link>
                </div>
            </div>
        </div>
    );
}
