import Image from 'next/image';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import ViewAll from '../view-all-btn/ViewAllBtn';

export default function Benefits() {
    return (
        <section className="bg-white w-full max-w-container mx-auto py-16 px-4 sm:px-6 lg:px-8 benefits-container">

            <div className="">
                <TabGroup>
                    <TabList className="inline-flex gap-2 bg-[#E5EFF6] rounded-t-2xl p-2">
                        <Tab className="rounded-xl py-4 px-8 font-medium text-[#002842] focus:outline-none data-[selected]:text-white data-[selected]:bg-[#002842] data-[hover]:bg-[#002842] data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
                            Selling Puppy
                        </Tab>
                        <Tab className="rounded-xl py-4 px-8 font-medium text-[#002842] focus:outline-none data-[selected]:text-white data-[selected]:bg-[#002842] data-[hover]:bg-[#002842] data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
                            Buying Puppy
                        </Tab>
                    </TabList>
                    <TabPanels className="bg-white rounded-b-3xl rounded-tr-3xl shadow-[0_6px_34px_-2px_#0000000F]">
                        <TabPanel className="px-8 py-10">
                            <h2 className="text-3xl font-bold text-[#121212]">Benefits</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-3 mt-6">
                                <div className="relative rounded-3xl overflow-hidden">
                                    <Image
                                        src="/images/benefits-1.png" // Path relative to the public folder
                                        alt="benefits background"
                                        width={306}
                                        height={420}
                                        className="object-cover max-w-full w-full"
                                    />
                                    <div className="absolute bottom-3 left-3 right-3 rounded-3xl bg-[#FF8436] text-white text-center pt-6 pb-8 px-6">
                                        <h3 className="text-xl/6 font-bold">Healthy and Vaccinated Pets</h3>
                                        <p className="text-sm pt-2">All puppies come with completed vaccinations to safeguard their </p>
                                    </div>
                                </div>
                                <div className="relative rounded-3xl overflow-hidden">
                                    <Image
                                        src="/images/benefits-2.png" // Path relative to the public folder
                                        alt="benefits background"
                                        width={306}
                                        height={420}
                                        className="object-cover max-w-full w-full"
                                    />
                                    <div className="absolute bottom-3 left-3 right-3 rounded-3xl bg-[#A339FF] text-white text-center pt-6 pb-8 px-6">
                                        <h3 className="text-xl/6 font-bold">Purebred Certificate</h3>
                                        {/* <p className="text-sm pt-2">All puppies come with completed vaccinations to safeguard their </p> */}
                                    </div>
                                </div>
                                <div className="relative rounded-3xl overflow-hidden">
                                    <Image
                                        src="/images/benefits-3.png" // Path relative to the public folder
                                        alt="benefits background"
                                        width={306}
                                        height={420}
                                        className="object-cover max-w-full w-full"
                                    />
                                    <div className="absolute bottom-3 left-3 right-3 rounded-3xl bg-[#9093F8] text-white text-center pt-6 pb-8 px-6">
                                        <h3 className="text-xl/6 font-bold ">Health Guarantee</h3>
                                        {/* <p className="text-sm pt-2">All puppies come with completed vaccinations to safeguard their </p> */}
                                    </div>
                                </div>
                                <div className="relative rounded-3xl overflow-hidden">
                                    <Image
                                        src="/images/benefits-4.png" // Path relative to the public folder
                                        alt="benefits background"
                                        width={306}
                                        height={420}
                                        className="object-cover max-w-full w-full"
                                    />
                                    <div className="absolute bottom-3 left-3 right-3 rounded-3xl bg-[#DF3054] text-white text-center pt-6 pb-8 px-6">
                                        <h3 className="text-xl/6 font-bold">Free Veterinary Assistance</h3>
                                        {/* <p className="text-sm pt-2">All puppies come with completed vaccinations to safeguard their </p> */}
                                    </div>
                                </div>
                            </div>
                            <ViewAll />
                        </TabPanel>
                        <TabPanel className="px-8 py-10">
                            <h2 className="text-3xl font-bold text-[#121212]">Benefits</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-3 mt-6">
                            <div className="relative rounded-3xl overflow-hidden">
                                    <Image
                                        src="/images/benefits-4.png" // Path relative to the public folder
                                        alt="benefits background"
                                        width={306}
                                        height={420}
                                        className="object-cover max-w-full w-full"
                                    />
                                    <div className="absolute bottom-3 left-3 right-3 rounded-3xl bg-[#DF3054] text-white text-center pt-6 pb-8 px-6">
                                        <h3 className="text-xl/6 font-bold">Free Veterinary Assistance</h3>
                                        {/* <p className="text-sm pt-2">All puppies come with completed vaccinations to safeguard their </p> */}
                                    </div>
                                </div>
                                <div className="relative rounded-3xl overflow-hidden">
                                    <Image
                                        src="/images/benefits-3.png" // Path relative to the public folder
                                        alt="benefits background"
                                        width={306}
                                        height={420}
                                        className="object-cover max-w-full w-full"
                                    />
                                    <div className="absolute bottom-3 left-3 right-3 rounded-3xl bg-[#9093F8] text-white text-center pt-6 pb-8 px-6">
                                        <h3 className="text-xl/6 font-bold ">Health Guarantee</h3>
                                        {/* <p className="text-sm pt-2">All puppies come with completed vaccinations to safeguard their </p> */}
                                    </div>
                                </div>
                                <div className="relative rounded-3xl overflow-hidden">
                                    <Image
                                        src="/images/benefits-2.png" // Path relative to the public folder
                                        alt="benefits background"
                                        width={306}
                                        height={420}
                                        className="object-cover max-w-full w-full"
                                    />
                                    <div className="absolute bottom-3 left-3 right-3 rounded-3xl bg-[#A339FF] text-white text-center pt-6 pb-8 px-6">
                                        <h3 className="text-xl/6 font-bold">Purebred Certificate</h3>
                                        {/* <p className="text-sm pt-2">All puppies come with completed vaccinations to safeguard their </p> */}
                                    </div>
                                </div>
                                <div className="relative rounded-3xl overflow-hidden">
                                    <Image
                                        src="/images/benefits-1.png" // Path relative to the public folder
                                        alt="benefits background"
                                        width={306}
                                        height={420}
                                        className="object-cover max-w-full w-full"
                                    />
                                    <div className="absolute bottom-3 left-3 right-3 rounded-3xl bg-[#FF8436] text-white text-center pt-6 pb-8 px-6">
                                        <h3 className="text-xl/6 font-bold">Healthy and Vaccinated Pets</h3>
                                        <p className="text-sm pt-2">All puppies come with completed vaccinations to safeguard their </p>
                                    </div>
                                </div>                                
                            </div>
                            <ViewAll />
                        </TabPanel>

                    </TabPanels>
                </TabGroup>
            </div>

        </section>
    )
}
