import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '../icons/Icons'

export default function Faq() {
    return (
        <section className="bg-white w-full max-w-container mx-auto py-16 px-4 sm:px-6 lg:px-8 text-[#667479]">
            <h2 className="text-2xl text-[#707E83] font-semibold text-center pb-11">
                Frequently Asked
                <span className="text-3xl font-bold text-[#121212]"> Questions</span>
            </h2>
            <div className="grid grid-cols-1 gap-y-4">
                <Disclosure as="div" className="p-6 bg-[#F5F5F5] rounded-3xl" defaultOpen={true}>
                    <DisclosureButton className="group w-full flex items-center justify-between gap-x-1 text-[#1F1F1F] font-bold text-lg text-start">
                        <span>
                            Q.
                            <span className="ms-1">Lorem ipsum dolor sit amet consectetur. Tortor turpis suspendisse ut ac. Placerat ut egestas ?</span>
                        </span>
                        <ChevronDownIcon width="12" height="12" className="group-data-[open]:rotate-180 flex-none" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-3 text-base text-[#667479]">
                        Lorem ipsum dolor sit amet consectetur. Libero leo risus viverra in ultricies consequat. Cursus ut vulputate risus platea molestie odio pellentesque massa. Lorem elit urna molestie cras placerat felis egestas cursus pellentesque.Lorem ipsum dolor sit amet consectetur. Libero leo risus viverra in ultricies consequat. Cursus ut vulputate risus platea molestie odio pellentesque massa. Lorem elit urna molestie cras placerat felis egestas cursus pellentesque.Lorem ipsum dolor sit amet consectetur. Libero leo risus viverra in ultricies consequat. Cursus ut vulputate risus platea molestie odio pellentesque massa. Lorem elit urna molestie cras placerat felis egestas cursus pellentesque.
                    </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="p-6 bg-[#F5F5F5] rounded-3xl">
                    <DisclosureButton className="group w-full flex items-center justify-between gap-x-1 text-[#1F1F1F] font-bold text-lg text-start">
                        <span>
                            Q.
                            <span className="ms-1">Lorem ipsum dolor sit amet consectetur. Tortor turpis suspendisse ut ac. Placerat ut egestas ?</span>
                        </span>
                        <ChevronDownIcon width="12" height="12" className="group-data-[open]:rotate-180 flex-none" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-3 text-base text-[#667479]">
                        Lorem ipsum dolor sit amet consectetur. Libero leo risus viverra in ultricies consequat. Cursus ut vulputate risus platea molestie odio pellentesque massa. Lorem elit urna molestie cras placerat felis egestas cursus pellentesque.Lorem ipsum dolor sit amet consectetur. Libero leo risus viverra in ultricies consequat. Cursus ut vulputate risus platea molestie odio pellentesque massa. Lorem elit urna molestie cras placerat felis egestas cursus pellentesque.Lorem ipsum dolor sit amet consectetur. Libero leo risus viverra in ultricies consequat. Cursus ut vulputate risus platea molestie odio pellentesque massa. Lorem elit urna molestie cras placerat felis egestas cursus pellentesque.
                    </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="p-6 bg-[#F5F5F5] rounded-3xl">
                    <DisclosureButton className="group w-full flex items-center justify-between gap-x-1 text-[#1F1F1F] font-bold text-lg text-start">
                        <span>
                            Q.
                            <span className="ms-1">Lorem ipsum dolor sit amet consectetur. Tortor turpis suspendisse ut ac. Placerat ut egestas ?</span>
                        </span>
                        <ChevronDownIcon width="12" height="12" className="group-data-[open]:rotate-180 flex-none" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-3 text-base text-[#667479]">
                        Lorem ipsum dolor sit amet consectetur. Libero leo risus viverra in ultricies consequat. Cursus ut vulputate risus platea molestie odio pellentesque massa. Lorem elit urna molestie cras placerat felis egestas cursus pellentesque.Lorem ipsum dolor sit amet consectetur. Libero leo risus viverra in ultricies consequat. Cursus ut vulputate risus platea molestie odio pellentesque massa. Lorem elit urna molestie cras placerat felis egestas cursus pellentesque.Lorem ipsum dolor sit amet consectetur. Libero leo risus viverra in ultricies consequat. Cursus ut vulputate risus platea molestie odio pellentesque massa. Lorem elit urna molestie cras placerat felis egestas cursus pellentesque.
                    </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="p-6 bg-[#F5F5F5] rounded-3xl">
                    <DisclosureButton className="group w-full flex items-center justify-between gap-x-1 text-[#1F1F1F] font-bold text-lg text-start">
                        <span>
                            Q.
                            <span className="ms-1">Lorem ipsum dolor sit amet consectetur. Tortor turpis suspendisse ut ac. Placerat ut egestas ?</span>
                        </span>
                        <ChevronDownIcon width="12" height="12" className="group-data-[open]:rotate-180 flex-none" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-3 text-base text-[#667479]">
                        Lorem ipsum dolor sit amet consectetur. Libero leo risus viverra in ultricies consequat. Cursus ut vulputate risus platea molestie odio pellentesque massa. Lorem elit urna molestie cras placerat felis egestas cursus pellentesque.Lorem ipsum dolor sit amet consectetur. Libero leo risus viverra in ultricies consequat. Cursus ut vulputate risus platea molestie odio pellentesque massa. Lorem elit urna molestie cras placerat felis egestas cursus pellentesque.Lorem ipsum dolor sit amet consectetur. Libero leo risus viverra in ultricies consequat. Cursus ut vulputate risus platea molestie odio pellentesque massa. Lorem elit urna molestie cras placerat felis egestas cursus pellentesque.
                    </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="p-6 bg-[#F5F5F5] rounded-3xl">
                    <DisclosureButton className="group w-full flex items-center justify-between gap-x-1 text-[#1F1F1F] font-bold text-lg text-start">
                        <span>
                            Q.
                            <span className="ms-1">Lorem ipsum dolor sit amet consectetur. Tortor turpis suspendisse ut ac. Placerat ut egestas ?</span>
                        </span>
                        <ChevronDownIcon width="12" height="12" className="group-data-[open]:rotate-180 flex-none" />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-3 text-base text-[#667479]">
                        Lorem ipsum dolor sit amet consectetur. Libero leo risus viverra in ultricies consequat. Cursus ut vulputate risus platea molestie odio pellentesque massa. Lorem elit urna molestie cras placerat felis egestas cursus pellentesque.Lorem ipsum dolor sit amet consectetur. Libero leo risus viverra in ultricies consequat. Cursus ut vulputate risus platea molestie odio pellentesque massa. Lorem elit urna molestie cras placerat felis egestas cursus pellentesque.Lorem ipsum dolor sit amet consectetur. Libero leo risus viverra in ultricies consequat. Cursus ut vulputate risus platea molestie odio pellentesque massa. Lorem elit urna molestie cras placerat felis egestas cursus pellentesque.
                    </DisclosurePanel>
                </Disclosure>
            </div>
        </section>
    )
}
