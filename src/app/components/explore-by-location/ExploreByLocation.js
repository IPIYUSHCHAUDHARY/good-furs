import Image from "next/image";

export default function ExploreByLocation() {
    return (
        <section className="bg-white w-full max-w-container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-[#707E83] font-semibold text-center pb-11">
                Explore Puppies
                <span className="text-3xl font-bold text-[#121212]"> By Location</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 items-stretch flex-wrap gap-y-14 gap-x-3">
                <div className="location-card-wrapper">
                    <div className=" location-card bg-[#A339FF] rounded-[24px] text-center">
                        <Image
                            src="/images/location-image.png"
                            width={178}
                            height={178}
                            alt="location-image"
                            className="mx-auto location-image"
                        />
                        <h5 className="location-name">New Delhi</h5>
                        <p className="pets-count">500+ Puppies</p>
                    </div>
                </div>
                <div className="location-card-wrapper">
                    <div className=" location-card bg-[#9093F8] rounded-[24px] text-center">
                        <Image
                            src="/images/location-image.png"
                            width={178}
                            height={178}
                            alt="location-image"
                            className="mx-auto location-image"
                        />
                        <h5 className="location-name">Mumbai</h5>
                        <p className="pets-count">500+ Puppies</p>
                    </div>
                </div>
                <div className="location-card-wrapper">
                    <div className=" location-card bg-[#2E054E] rounded-[24px] text-center">
                        <Image
                            src="/images/location-image.png"
                            width={178}
                            height={178}
                            alt="location-image"
                            className="mx-auto location-image"
                        />
                        <h5 className="location-name">Bengaluru</h5>
                        <p className="pets-count">500+ Puppies</p>
                    </div>
                </div>
                <div className="location-card-wrapper">
                    <div className=" location-card bg-[#FF8436] rounded-[24px] text-center">
                        <Image
                            src="/images/location-image.png"
                            width={178}
                            height={178}
                            alt="location-image"
                            className="mx-auto location-image"
                        />
                        <h5 className="location-name">Hydrabad</h5>
                        <p className="pets-count">500+ Puppies</p>
                    </div>
                </div>
                <div className="location-card-wrapper">
                    <div className=" location-card bg-[#DF3054] rounded-[24px] text-center">
                        <Image
                            src="/images/location-image.png"
                            width={178}
                            height={178}
                            alt="location-image"
                            className="mx-auto location-image"
                        />
                        <h5 className="location-name">New Delhi</h5>
                        <p className="pets-count">500+ Puppies</p>
                    </div>
                </div>
                <div className="location-card-wrapper">
                    <div className=" location-card bg-[#5FC09B] rounded-[24px] text-center">
                        <Image
                            src="/images/location-image.png"
                            width={178}
                            height={178}
                            alt="location-image"
                            className="mx-auto location-image"
                        />
                        <h5 className="location-name">Mumbai</h5>
                        <p className="pets-count">500+ Puppies</p>
                    </div>
                </div>
                <div className="location-card-wrapper">
                    <div className=" location-card bg-[#A339FF] rounded-[24px] text-center">
                        <Image
                            src="/images/location-image.png"
                            width={178}
                            height={178}
                            alt="location-image"
                            className="mx-auto location-image"
                        />
                        <h5 className="location-name">Bengaluru</h5>
                        <p className="pets-count">500+ Puppies</p>
                    </div>
                </div>
                <div className="location-card-wrapper">
                    <div className=" location-card bg-[#9093F8] rounded-[24px] text-center">
                        <Image
                            src="/images/location-image.png"
                            width={178}
                            height={178}
                            alt="location-image"
                            className="mx-auto location-image"
                        />
                        <h5 className="location-name">Hydrabad</h5>
                        <p className="pets-count">500+ Puppies</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
