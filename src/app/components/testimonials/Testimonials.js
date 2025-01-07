import Image from "next/image";
import { LocationPinIcon } from "../icons/Icons";

export default function Testimonials() {
    return (
        <section className="bg-white w-full max-w-container mx-auto py-16 px-4 sm:px-6 lg:px-8 text-[#667479]">
            <h2 className="text-2xl text-[#707E83] font-semibold text-center pb-11">
                Our Happy
                <span className="text-3xl font-bold text-[#121212]"> Clients</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-3 md:gap-x-5">
                <div className="relative rounded-3xl overflow-hidden">
                    <Image
                        src="/images/testimonial-1.png" // Path relative to the public folder
                        alt="Testimonial Avatar"
                        width={306}
                        height={420}
                        className="absolute z-0 object-cover size-full"
                    />
                    <div className="testimonial-card text-white relative z-10 pt-52 pb-5 px-3 md:px-5">
                        <p className="text-sm/6 pb-3">I had an amazing experience with Good Furs! The team was super helpful and guided me through the entire process. My puppy arrived healthy, happy, and full of energy. Highly recommend Good Furs!</p>
                        <p className="text-xl font-bold"><span>-</span> Riya Sharma</p>
                        <p className="flex items-center gap-x-1">
                            <LocationPinIcon width="16" height="16" className="" />
                            <span>Mumbai</span>
                        </p>
                    </div>
                </div>
                <div className="relative rounded-3xl overflow-hidden">
                    <Image
                        src="/images/testimonial-2.png" // Path relative to the public folder
                        alt="Testimonial Avatar"
                        width={306}
                        height={420}
                        className="absolute z-0 object-cover size-full"
                    />
                    <div className="testimonial-card text-white relative z-10 pt-52 px-3 md:px-5">
                        <p className="text-sm/6 pb-3">Good Furs made buying a puppy so simple and stress-free. The team was professional, answered all my questions, and even provided free vet assistance. I’m so glad I chose them!</p>
                        <p className="text-xl font-bold"><span>-</span> Ananya Verma</p>
                        <p className="flex items-center gap-x-1">
                            <LocationPinIcon width="16" height="16" className="" />
                            <span>Delhi</span>
                        </p>
                    </div>
                </div>
                <div className="relative rounded-3xl overflow-hidden">
                    <Image
                        src="/images/testimonial-3.png" // Path relative to the public folder
                        alt="Testimonial Avatar"
                        width={306}
                        height={420}
                        className="absolute z-0 object-cover size-full"
                    />
                    <div className="testimonial-card text-white relative z-10 pt-52 pb-5 px-3 md:px-5">
                        <p className="text-sm/6 pb-3">Good Furs is the best platform for pet lovers. They took care of everything, from health checks to delivery. My puppy is healthy, active, and has become the heart of our family. Thank you, Good Furs!</p>
                        <p className="text-xl font-bold"><span>-</span> Rahul Mehta</p>
                        <p className="flex items-center gap-x-1">
                            <LocationPinIcon width="16" height="16" className="" />
                            <span>Pune</span>
                        </p>
                    </div>
                </div>
                <div className="relative rounded-3xl overflow-hidden">
                    <Image
                        src="/images/testimonial-4.png" // Path relative to the public folder
                        alt="Testimonial Avatar"
                        width={306}
                        height={420}
                        className="absolute z-0 object-cover size-full"
                    />
                    <div className="testimonial-card text-white relative z-10 pt-52 pb-5 px-3 md:px-5">
                        <p className="text-sm/6 pb-3">I was a bit nervous about buying a puppy online, but Good Furs made it an amazing experience. They shared regular updates, photos, and videos before delivery. My puppy is perfect!</p>
                        <p className="text-xl font-bold"><span>-</span> Neha Patel</p>
                        <p className="flex items-center gap-x-1">
                            <LocationPinIcon width="16" height="16" className="" />
                            <span>Mumbai</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
