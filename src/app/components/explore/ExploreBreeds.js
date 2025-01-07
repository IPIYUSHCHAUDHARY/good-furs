import Image from 'next/image';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import ViewAll from '../view-all-btn/ViewAllBtn';
import { LocationPinIcon } from '../icons/Icons';

export default function ExploreBreeds() {
    return (
        <section className="bg-white w-full max-w-container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-[#707E83] font-semibold text-center pb-11">
                Explore Puppies
                <span className="text-3xl font-bold text-[#121212]"> By Breeds</span>
            </h2>

            <div className="text-center">
                <TabGroup defaultIndex={1}>
                    <TabList className="inline-flex gap-2 bg-[#F7F7F7] rounded-xl p-1">
                        <Tab className="rounded-lg py-3 px-12 font-bold text-[#696C70] focus:outline-none data-[selected]:text-white data-[selected]:bg-[#FE7A27] data-[hover]:bg-[#FE7A27] data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
                            German Shepherd
                        </Tab>
                        <Tab className="rounded-lg py-3 px-12 font-bold text-[#696C70] focus:outline-none data-[selected]:text-white data-[selected]:bg-[#FE7A27] data-[hover]:bg-[#FE7A27] data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
                            Labrador
                        </Tab>
                        <Tab className="rounded-lg py-3 px-12 font-bold text-[#696C70] focus:outline-none data-[selected]:text-white data-[selected]:bg-[#FE7A27] data-[hover]:bg-[#FE7A27] data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
                            Bulldog
                        </Tab>
                    </TabList>
                    <TabPanels className="bg-white mt-11 text-start">
                        <TabPanel className="px-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-3 mt-6">
                                <div className="relative rounded-xl border border-[#E8E8E8] overflow-hidden">
                                    <Image
                                        src="/images/placeholder.png" // Path relative to the public folder
                                        alt="background"
                                        width={310}
                                        height={230}
                                        className="object-cover max-w-full w-full"
                                    />
                                    <div className="text-[#00171F] pt-4 p-5">
                                        <h3 className="text-xl/5 font-bold">Richie</h3>
                                        <p className='flex items-center gap-x-5 text-sm/5 pt-2'>
                                            <span>Beagle</span>
                                            <span>Male</span>
                                            <span>2y 3m</span>
                                        </p>
                                        <p className="flex items-center gap-x-1 pt-3">
                                            <LocationPinIcon width="16" height="16" className="text-[#ED1C53]" />
                                            <span>Krishna Market, Sector 15, C...</span>
                                        </p>
                                        <p className="text-lg/5 text-[#04C001] font-extrabold pt-3">₹14,000</p>
                                    </div>
                                </div>
                                <div className="relative rounded-xl border border-[#E8E8E8] overflow-hidden">
                                    <Image
                                        src="/images/placeholder.png" // Path relative to the public folder
                                        alt="background"
                                        width={310}
                                        height={230}
                                        className="object-cover max-w-full w-full"
                                    />
                                    <div className="text-[#00171F] pt-4 p-5">
                                        <h3 className="text-xl/5 font-bold">Richie</h3>
                                        <p className='flex items-center gap-x-5 text-sm/5 pt-2'>
                                            <span>Beagle</span>
                                            <span>Male</span>
                                            <span>2y 3m</span>
                                        </p>
                                        <p className="flex items-center gap-x-1 pt-3">
                                            <LocationPinIcon width="16" height="16" className="text-[#ED1C53]" />
                                            <span>Krishna Market, Sector 15, C...</span>
                                        </p>
                                        <p className="text-lg/5 text-[#04C001] font-extrabold pt-3">₹14,000</p>
                                    </div>
                                </div>
                                <div className="relative rounded-xl border border-[#E8E8E8] overflow-hidden">
                                    <Image
                                        src="/images/placeholder.png" // Path relative to the public folder
                                        alt="background"
                                        width={310}
                                        height={230}
                                        className="object-cover max-w-full w-full"
                                    />
                                    <div className="text-[#00171F] pt-4 p-5">
                                        <h3 className="text-xl/5 font-bold">Richie</h3>
                                        <p className='flex items-center gap-x-5 text-sm/5 pt-2'>
                                            <span>Beagle</span>
                                            <span>Male</span>
                                            <span>2y 3m</span>
                                        </p>
                                        <p className="flex items-center gap-x-1 pt-3">
                                            <LocationPinIcon width="16" height="16" className="text-[#ED1C53]" />
                                            <span>Krishna Market, Sector 15, C...</span>
                                        </p>
                                        <p className="text-lg/5 text-[#04C001] font-extrabold pt-3">₹14,000</p>
                                    </div>
                                </div>
                                <div className="relative rounded-xl border border-[#E8E8E8] overflow-hidden">
                                    <Image
                                        src="/images/placeholder.png" // Path relative to the public folder
                                        alt="background"
                                        width={310}
                                        height={230}
                                        className="object-cover max-w-full w-full"
                                    />
                                    <div className="text-[#00171F] pt-4 p-5">
                                        <h3 className="text-xl/5 font-bold">Richie</h3>
                                        <p className='flex items-center gap-x-5 text-sm/5 pt-2'>
                                            <span>Beagle</span>
                                            <span>Male</span>
                                            <span>2y 3m</span>
                                        </p>
                                        <p className="flex items-center gap-x-1 pt-3">
                                            <LocationPinIcon width="16" height="16" className="text-[#ED1C53]" />
                                            <span>Krishna Market, Sector 15, C...</span>
                                        </p>
                                        <p className="text-lg/5 text-[#04C001] font-extrabold pt-3">₹14,000</p>
                                    </div>
                                </div>
                            </div>
                            <ViewAll />
                        </TabPanel>
                        <TabPanel className="px-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-3 mt-6">
                                <div className="relative rounded-xl border border-[#E8E8E8] overflow-hidden">
                                    <Image
                                        src="/images/placeholder.png" // Path relative to the public folder
                                        alt="background"
                                        width={310}
                                        height={230}
                                        className="object-cover max-w-full w-full"
                                    />
                                    <div className="text-[#00171F] pt-4 p-5">
                                        <h3 className="text-xl/5 font-bold">Richie</h3>
                                        <p className='flex items-center gap-x-5 text-sm/5 pt-2'>
                                            <span>Beagle</span>
                                            <span>Male</span>
                                            <span>2y 3m</span>
                                        </p>
                                        <p className="flex items-center gap-x-1 pt-3">
                                            <LocationPinIcon width="16" height="16" className="text-[#ED1C53]" />
                                            <span>Krishna Market, Sector 15, C...</span>
                                        </p>
                                        <p className="text-lg/5 text-[#04C001] font-extrabold pt-3">₹14,000</p>
                                    </div>
                                </div>
                                <div className="relative rounded-xl border border-[#E8E8E8] overflow-hidden">
                                    <Image
                                        src="/images/placeholder.png" // Path relative to the public folder
                                        alt="background"
                                        width={310}
                                        height={230}
                                        className="object-cover max-w-full w-full"
                                    />
                                    <div className="text-[#00171F] pt-4 p-5">
                                        <h3 className="text-xl/5 font-bold">Richie</h3>
                                        <p className='flex items-center gap-x-5 text-sm/5 pt-2'>
                                            <span>Beagle</span>
                                            <span>Male</span>
                                            <span>2y 3m</span>
                                        </p>
                                        <p className="flex items-center gap-x-1 pt-3">
                                            <LocationPinIcon width="16" height="16" className="text-[#ED1C53]" />
                                            <span>Krishna Market, Sector 15, C...</span>
                                        </p>
                                        <p className="text-lg/5 text-[#04C001] font-extrabold pt-3">₹14,000</p>
                                    </div>
                                </div>
                                <div className="relative rounded-xl border border-[#E8E8E8] overflow-hidden">
                                    <Image
                                        src="/images/placeholder.png" // Path relative to the public folder
                                        alt="background"
                                        width={310}
                                        height={230}
                                        className="object-cover max-w-full w-full"
                                    />
                                    <div className="text-[#00171F] pt-4 p-5">
                                        <h3 className="text-xl/5 font-bold">Richie</h3>
                                        <p className='flex items-center gap-x-5 text-sm/5 pt-2'>
                                            <span>Beagle</span>
                                            <span>Male</span>
                                            <span>2y 3m</span>
                                        </p>
                                        <p className="flex items-center gap-x-1 pt-3">
                                            <LocationPinIcon width="16" height="16" className="text-[#ED1C53]" />
                                            <span>Krishna Market, Sector 15, C...</span>
                                        </p>
                                        <p className="text-lg/5 text-[#04C001] font-extrabold pt-3">₹14,000</p>
                                    </div>
                                </div>
                                <div className="relative rounded-xl border border-[#E8E8E8] overflow-hidden">
                                    <Image
                                        src="/images/placeholder.png" // Path relative to the public folder
                                        alt="background"
                                        width={310}
                                        height={230}
                                        className="object-cover max-w-full w-full"
                                    />
                                    <div className="text-[#00171F] pt-4 p-5">
                                        <h3 className="text-xl/5 font-bold">Richie</h3>
                                        <p className='flex items-center gap-x-5 text-sm/5 pt-2'>
                                            <span>Beagle</span>
                                            <span>Male</span>
                                            <span>2y 3m</span>
                                        </p>
                                        <p className="flex items-center gap-x-1 pt-3">
                                            <LocationPinIcon width="16" height="16" className="text-[#ED1C53]" />
                                            <span>Krishna Market, Sector 15, C...</span>
                                        </p>
                                        <p className="text-lg/5 text-[#04C001] font-extrabold pt-3">₹14,000</p>
                                    </div>
                                </div>
                            </div>
                            <ViewAll />
                        </TabPanel>
                        <TabPanel className="px-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-3 mt-6">
                                <div className="relative rounded-xl border border-[#E8E8E8] overflow-hidden">
                                    <Image
                                        src="/images/placeholder.png" // Path relative to the public folder
                                        alt="background"
                                        width={310}
                                        height={230}
                                        className="object-cover max-w-full w-full"
                                    />
                                    <div className="text-[#00171F] pt-4 p-5">
                                        <h3 className="text-xl/5 font-bold">Richie</h3>
                                        <p className='flex items-center gap-x-5 text-sm/5 pt-2'>
                                            <span>Beagle</span>
                                            <span>Male</span>
                                            <span>2y 3m</span>
                                        </p>
                                        <p className="flex items-center gap-x-1 pt-3">
                                            <LocationPinIcon width="16" height="16" className="text-[#ED1C53]" />
                                            <span>Krishna Market, Sector 15, C...</span>
                                        </p>
                                        <p className="text-lg/5 text-[#04C001] font-extrabold pt-3">₹14,000</p>
                                    </div>
                                </div>
                                <div className="relative rounded-xl border border-[#E8E8E8] overflow-hidden">
                                    <Image
                                        src="/images/placeholder.png" // Path relative to the public folder
                                        alt="background"
                                        width={310}
                                        height={230}
                                        className="object-cover max-w-full w-full"
                                    />
                                    <div className="text-[#00171F] pt-4 p-5">
                                        <h3 className="text-xl/5 font-bold">Richie</h3>
                                        <p className='flex items-center gap-x-5 text-sm/5 pt-2'>
                                            <span>Beagle</span>
                                            <span>Male</span>
                                            <span>2y 3m</span>
                                        </p>
                                        <p className="flex items-center gap-x-1 pt-3">
                                            <LocationPinIcon width="16" height="16" className="text-[#ED1C53]" />
                                            <span>Krishna Market, Sector 15, C...</span>
                                        </p>
                                        <p className="text-lg/5 text-[#04C001] font-extrabold pt-3">₹14,000</p>
                                    </div>
                                </div>
                                <div className="relative rounded-xl border border-[#E8E8E8] overflow-hidden">
                                    <Image
                                        src="/images/placeholder.png" // Path relative to the public folder
                                        alt="background"
                                        width={310}
                                        height={230}
                                        className="object-cover max-w-full w-full"
                                    />
                                    <div className="text-[#00171F] pt-4 p-5">
                                        <h3 className="text-xl/5 font-bold">Richie</h3>
                                        <p className='flex items-center gap-x-5 text-sm/5 pt-2'>
                                            <span>Beagle</span>
                                            <span>Male</span>
                                            <span>2y 3m</span>
                                        </p>
                                        <p className="flex items-center gap-x-1 pt-3">
                                            <LocationPinIcon width="16" height="16" className="text-[#ED1C53]" />
                                            <span>Krishna Market, Sector 15, C...</span>
                                        </p>
                                        <p className="text-lg/5 text-[#04C001] font-extrabold pt-3">₹14,000</p>
                                    </div>
                                </div>
                                <div className="relative rounded-xl border border-[#E8E8E8] overflow-hidden">
                                    <Image
                                        src="/images/placeholder.png" // Path relative to the public folder
                                        alt="background"
                                        width={310}
                                        height={230}
                                        className="object-cover max-w-full w-full"
                                    />
                                    <div className="text-[#00171F] pt-4 p-5">
                                        <h3 className="text-xl/5 font-bold">Richie</h3>
                                        <p className='flex items-center gap-x-5 text-sm/5 pt-2'>
                                            <span>Beagle</span>
                                            <span>Male</span>
                                            <span>2y 3m</span>
                                        </p>
                                        <p className="flex items-center gap-x-1 pt-3">
                                            <LocationPinIcon width="16" height="16" className="text-[#ED1C53]" />
                                            <span>Krishna Market, Sector 15, C...</span>
                                        </p>
                                        <p className="text-lg/5 text-[#04C001] font-extrabold pt-3">₹14,000</p>
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
