import Image from "next/image";

export default function HowWeWork() {
    return (
        <section className="bg-white w-full max-w-container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-[#707E83] font-semibold text-center pb-11">
                How We
                <span className="text-3xl font-bold text-[#121212]"> Work</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 lg:gap-x-6 gap-y-3 ">
                <div className="work-card">
                    <div className="work-card-content p-[18px] relative rounded-[18px] bg-[#002842]">
                        <span className="work-card-number bg-[#FE7A27]">1</span>
                        <h5 className="work-card-heading">
                            Check Out All the Puppy Available
                        </h5>
                        <Image
                            src="/images/puppy-card-img.png"
                            className="w-full"
                            alt="card-image"
                            width={256}
                            height={268}
                        />
                    </div>
                </div>
                <div className="work-card">
                    <div className="work-card-content p-[18px] relative rounded-[18px] bg-[#9093F8]">
                        <span className="work-card-number bg-[#002842]">2</span>
                        <h5 className="work-card-heading">
                            Choose the Best Puppy That You Need
                        </h5>
                        <Image
                            src="/images/puppy-card-img.png"
                            className="w-full"
                            alt="card-image"
                            width={256}
                            height={268}
                        />
                    </div>
                </div>
                <div className="work-card">
                    <div className="work-card-content p-[18px] relative rounded-[18px] bg-[#2E054E]">
                        <span className="work-card-number bg-[#A339FF]">3</span>
                        <h5 className="work-card-heading">
                            Buy the Pet That Looks Perfect to Take home
                        </h5>
                        <Image
                            src="/images/puppy-card-img.png"
                            className="w-full"
                            alt="card-image"
                            width={256}
                            height={268}
                        />
                    </div>
                </div>
                <div className="work-card">
                    <div className="work-card-content p-[18px] relative rounded-[18px] bg-[#5FC09B]">
                        <span className="work-card-number bg-[#DF3054]">4</span>
                        <h5 className="work-card-heading">
                            Take Your Puppy Home and Make Memories
                        </h5>
                        <Image
                            src="/images/puppy-card-img.png"
                            className="w-full"
                            alt="card-image"
                            width={256}
                            height={268}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
