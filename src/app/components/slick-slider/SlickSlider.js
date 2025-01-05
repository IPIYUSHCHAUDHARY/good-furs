"use client"

import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlickSlider() {
    const settings = {
        // autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="slider-container max-w-full">
            <Slider {...settings}>
                <div className="relative ">
                    <Image
                        src="/images/hero-banner-1.png" // Path relative to the public folder
                        alt="Good Furs logo"
                        width={1440}
                        height={544}
                        className="w-full max-w-full"
                    />
                    <div className="absolute top-0 left-0 isolate px-6 pt-14 lg:px-32">
                        <div className="max-w-2xl py-32">
                            <h2 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                                Bring Your Puppy Friend Home Today
                            </h2>
                            <p className="mt-8 text-pretty text-lg font-medium text-white sm:text-xl/8">
                                Choose from wide range of puppies available
                            </p>
                            <Link
                                href="#"
                                className="mt-4 inline-block rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Choose & Buy
                            </Link>
                        </div>
                    </div>

                </div>
                <div className='relative'>
                    <Image
                        src="/images/hero-banner-2.png" // Path relative to the public folder
                        alt="Good Furs logo"
                        width={1440}
                        height={544}
                        className="w-full max-w-full"
                    />
                    <div className="absolute top-0 left-0 isolate px-6 pt-14 lg:px-32">
                        <div className="max-w-2xl py-32">
                            <h2 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                                Bring Your Puppy Friend Home Today
                            </h2>
                            <p className="mt-8 text-pretty text-lg font-medium text-white sm:text-xl/8">
                                Choose from wide range of puppies available
                            </p>
                            <Link
                                href="#"
                                className="mt-4 inline-block rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Choose & Buy
                            </Link>
                        </div>
                    </div>
                </div>
            </Slider>
        </div>
    );
}