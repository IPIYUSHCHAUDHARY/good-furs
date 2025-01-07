import Image from "next/image";
import ViewAll from "../view-all-btn/ViewAllBtn";

export default function Blogs() {
    return (
        <section className="bg-white w-full max-w-container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-[#707E83] font-semibold text-center pb-11">
                Good Furs
                <span className="text-3xl font-bold text-[#121212]"> Blogs</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-3">
                <div className="blog-width-wrapper">
                    <div className=" relative overflow-hidden blog-card-wrapper pb-[12px] rounded-[24px] bg-[#A339FF]">
                        <div className="blog-card">
                            <Image
                                width={300}
                                height={300}
                                src="/images/blog-image.png"
                                alt="blog-image"
                                className="w-full"
                            />
                        </div>
                        <div className="blog-content text-white p-[34px]">
                            <h5 className="blog-heading">Lorem Ispum dummy text</h5>
                            <p className="blog-desc">
                                If you&lsquo;re not satisfied with your purchase, simply return it within 14 days for a refund. If you&lsquo;re not satisfied with your purchase, simply return.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="blog-width-wrapper">
                    <div className=" relative overflow-hidden blog-card-wrapper pb-[12px] rounded-[24px] bg-[#DF3054]">
                        <div className="blog-card">
                            <Image
                                width={300}
                                height={300}
                                src="/images/blog-image.png"
                                alt="blog-image"
                                className="w-full"
                            />
                        </div>
                        <div className="blog-content text-white p-[34px]">
                            <h5 className="blog-heading">Lorem Ispum dummy text</h5>
                            <p className="blog-desc">
                                If you&lsquo;re not satisfied with your purchase, simply return it within 14 days for a refund. If you&lsquo;re not satisfied with your purchase, simply return.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="blog-width-wrapper">
                    <div className=" relative overflow-hidden blog-card-wrapper pb-[12px] rounded-[24px] bg-[#FF8436]">
                        <div className="blog-card">
                            <Image
                                width={300}
                                height={300}
                                src="/images/blog-image.png"
                                alt="blog-image"
                                className="w-full"
                            />
                        </div>
                        <div className="blog-content text-white p-[34px]">
                            <h5 className="blog-heading">Lorem Ispum dummy text</h5>
                            <p className="blog-desc">
                                If you&lsquo;re not satisfied with your purchase, simply return it within 14 days for a refund. If you&lsquo;re not satisfied with your purchase, simply return.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ViewAll />
        </section>
    )
}
