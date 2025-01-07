"use client";
import Image from "next/image";
import { InstagramIcon, FacebookIcon, TwitterIcon, PinterestIcon, DeliveryIcon, ShopIcon, StarIcon, MessageIcon, CallIcon } from "../icons/Icons";

export default function Header() {
  return (
    <footer className="bg-[#F5F5F5] max-w-container mx-auto w-full px-4 sm:px-6 lg:px-8" aria-labelledby="footer-heading">
      <div className="py-10 border-b border-[#E6E6E6]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10 lg:grid-cols-5">
          <div className="flex items-center gap-x-5">
            <DeliveryIcon width="46" height="30" className="text-[#002842]" />
            <p className="text-base text-[#002842]">
              Same day delivery
              <br />
              for order beore 11:00h!
            </p>
          </div>
          <div className="flex items-center gap-x-5">
            <ShopIcon width="30" height="30" className="text-[#002842]" />
            <p className="text-base text-[#002842]">
              Pick up available
              <br />
              from any metro city
            </p>
          </div>
          <div className="flex items-center gap-x-5">
            <StarIcon width="30" height="30" className="text-[#002842]" />
            <p className="text-base text-[#002842]">
              Rating 4.8/5!
              <br />
              from verified users
            </p>
          </div>
          <div className="flex items-center gap-x-5">
            <CallIcon width="30" height="30" className="text-[#002842]" />
            <p className="text-base text-[#002842]">
              Call us in 09:00-16:00h
              <br />
              1-800-356-8933
            </p>
          </div>
          <div className="flex items-center gap-x-5">
            <MessageIcon width="30" height="30" className="text-[#002842]" />
            <p className="text-base text-[#002842]">
              Message us,
              <br />
              respond same day!
            </p>
          </div>
        </div>
      </div>
      <div className="mb-16">
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10">
          <div className="flex flex-col">
            <a href="#" className="flex items-center mb-auto">
              <Image
                src="/images/footer-logo.png"
                alt="Good Furs logo"
                width={173}
                height={77}
              />
            </a>
            <div className="flex gap-x-6 mt-4">
              <a href="#" className="text-[#002842] hover:text-[#FE7A27]">
                <span className="sr-only">Instagram</span>
                <InstagramIcon width="24" height="26" />
              </a>
              <a href="#" className="text-[#002842] hover:text-[#FE7A27]">
                <span className="sr-only">Facebook</span>
                <FacebookIcon width="24" height="26" />
              </a>
              <a href="#" className="text-[#002842] hover:text-[#FE7A27]">
                <span className="sr-only">twitter</span>
                <TwitterIcon width="24" height="26" className="fill-[#002842] hover:fill-[#FE7A27]" />
              </a>
              <a href="#" className="text-[#002842] hover:text-[#FE7A27]">
                <span className="sr-only">pinterest</span>
                <PinterestIcon width="24" height="26" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm/6 font-semibold text-[#002842]">Quick Links</h3>
            <ul role="list" className="mt-4 space-y-4">
              <li className="group">
                <a
                  className="text-sm/6 text-[#002842] hover:text-[#FE7A27]"
                  href="#"
                >
                  About us
                </a>
              </li>
              <li className="group">
                <a
                  className="text-sm/6 text-[#002842] hover:text-[#FE7A27]"
                  href="#"
                >
                  How to Sell?
                </a>
              </li>
              <li className="group">
                <a
                  className="text-sm/6 text-[#002842] hover:text-[#FE7A27]"
                  href="#"
                >
                  How to Buy?
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm/6 font-semibold text-[#002842]">Shop by Breed</h3>
            <ul role="list" className="mt-4 space-y-4">
              <li className="group">
                <a
                  className="text-sm/6 text-[#002842] hover:text-[#FE7A27]"
                  href="#"
                >
                  Golden Retriever
                </a>
              </li>
              <li className="group">
                <a
                  className="text-sm/6 text-[#002842] hover:text-[#FE7A27]"
                  href="#"
                >
                  Labrador
                </a>
              </li>
              <li className="group">
                <a
                  className="text-sm/6 text-[#002842] hover:text-[#FE7A27]"
                  href="#"
                >
                  Beagle
                </a>
              </li>
              <li className="group">
                <a
                  className="text-sm/6 text-[#002842] hover:text-[#FE7A27]"
                  href="#"
                >
                  Rottweiler
                </a>
              </li>
              <li className="group">
                <a
                  className="text-sm/6 text-[#002842] hover:text-[#FE7A27]"
                  href="#"
                >
                  German Shepherd
                </a>
              </li>
              <li className="group">
                <a
                  className="text-sm/6 text-[#002842] hover:text-[#FE7A27]"
                  href="#"
                >
                  French Bulldog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="hidden lg:block text-sm/6 font-semibold text-[#002842]">&nbsp;</h3>
            <ul role="list" className="mt-4 space-y-4">
              <li className="group">
                <a
                  className="text-sm/6 text-[#002842] hover:text-[#FE7A27]"
                  href="#"
                >
                  Bulldog
                </a>
              </li>
              <li className="group">
                <a
                  className="text-sm/6 text-[#002842] hover:text-[#FE7A27]"
                  href="#"
                >
                  Poodle
                </a>
              </li>
              <li className="group">
                <a
                  className="text-sm/6 text-[#002842] hover:text-[#FE7A27]"
                  href="#"
                >
                  Dachshund
                </a>
              </li>              
            </ul>
          </div>
          <div>
            <h3 className="text-sm/6 font-semibold text-[#002842]">More About us</h3>
            <p className="text-sm/6 text-[#002842] mt-4 space-y-4">Lorem ipsum dolor sit amet consectetur. Sed fringilla risus ac ac eget mi vestibulum. Quam arcu maecenas imperdiet neque eleifend justo risus feugiat convallis.</p>
          </div>
        </div>
      </div>
      <div className="items-centers md:flex gap-4 border-t border-[#e6e6e6] py-6">
        <p className="text-sm/6 text-[#002842] max-md:text-center">&copy; 2025 All rights reserved.</p>
        <div className="flex items-center justify-center space-x-4 text-sm/6 text-[#002842] md:justify-end">
          <a href="#" className="hover:text-[#FE7A27]">Privacy policy</a>
          <a href="#" className="hover:text-[#FE7A27]">Terms of Use</a>
          <a href="#" className="hover:text-[#FE7A27]">Search</a>
        </div>
      </div>
    </footer>
  );
}
