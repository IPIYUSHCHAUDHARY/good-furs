import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Header */}
      <nav className="navbar rounded-box shadow">
        <div className="w-full md:flex md:items-center md:gap-2">
          <div className="flex items-center justify-between">
            <div className="navbar-start items-center justify-between max-md:w-full">
              <a href="#" aria-label="Homepage Link">
                <Image
                  src="/images/logo.png" // Path relative to the public folder
                  alt="Good Furs logo"
                  width={200}
                  height={84}
                />
              </a>
              <div className="md:hidden">
                <button type="button" className="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square" data-collapse="#logo-navbar-collapse" aria-controls="logo-navbar-collapse" aria-label="Toggle navigation" >
                  <span className="icon-[tabler--menu-2] collapse-open:hidden size-4"></span>
                  <span className="icon-[tabler--x] collapse-open:block hidden size-4"></span>
                </button>
              </div>
            </div>
          </div>
          <div id="logo-navbar-collapse" className="md:navbar-end collapse hidden grow basis-full overflow-hidden transition-[height] duration-300 max-md:w-full" >
            <div>
              <button className="btn btn-sm btn-text btn-circle size-[2.125rem] md:hidden">
                <span className="icon-[tabler--search] size-[1.375rem]"></span>
              </button>
              <div className="input-group hidden max-w-56 rounded-full md:flex">
                <span className="input-group-text">
                  <span className="icon-[tabler--search] text-base-content/80 size-5"></span>
                </span>
                <label className="sr-only" htmlFor="searchInput">Full Name</label>
                <input type="search" id="searchInput" className="input grow rounded-e-full" placeholder="Search" />
              </div>
            </div>
            <ul className="menu md:menu-horizontal gap-2 p-0 text-base max-md:mt-2">
              <li><a href="#">All Puppies</a></li>
              <li className="dropdown relative inline-flex [--auto-close:inside] [--offset:9] [--placement:bottom-end]">
                <button id="dropdown-nav" type="button" className="dropdown-toggle dropdown-open:bg-base-content/10 dropdown-open:text-base-content" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" >
                  Puppy Breeds
                  <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
                </button>
                <ul className="dropdown-menu dropdown-open:opacity-100 hidden" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-nav" >
                  <li><a className="dropdown-item" href="#">Labrador</a></li>
                  <li><a className="dropdown-item" href="#">German Shepherd</a></li>
                  <li><a className="dropdown-item" href="#">Beagle</a></li>
                  <hr className="border-base-content/25 -mx-2 my-3" />
                  <li><a className="dropdown-item" href="#">Rottweiler</a></li>
                </ul>
              </li>
              <li><a href="#">Sell Puppy</a></li>
              <li className="dropdown relative inline-flex [--auto-close:inside] [--offset:9] [--placement:bottom-end]">
                <button id="dropdown-nav" type="button" className="dropdown-toggle dropdown-open:bg-base-content/10 dropdown-open:text-base-content" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown" >
                  Chandigarh
                  <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
                </button>
                <ul className="dropdown-menu dropdown-open:opacity-100 hidden" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-nav" >
                  <li><a className="dropdown-item" href="#">Mohali</a></li>
                  <li><a className="dropdown-item" href="#">Kharar</a></li>
                  <li><a className="dropdown-item" href="#">Ropar</a></li>
                </ul>
              </li>
            </ul>
            <div className="dropdown relative inline-flex [--auto-close:inside] [--offset:8] [--placement:bottom-end] ms-4">
              <button id="dropdown-scrollable" type="button" className="dropdown-toggle flex items-center" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                <div className="avatar">
                  <div className="size-9.5 rounded-full">
                    <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" alt="avatar 1" />
                  </div>
                </div>
              </button>
              <ul className="dropdown-menu dropdown-open:opacity-100 hidden min-w-52" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-avatar">
                <li className="dropdown-header gap-3 border-0 pt-3">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png" href="#" alt="avatar 1" />
                    </div>
                  </div>
                  <div>
                    <h6 className="text-base-content text-base font-semibold">John Doe</h6>
                    <small className="text-base-content/50">Admin</small>
                  </div>
                </li>
                <li><hr className="border-base-content/25 -mx-2 mb-3" /></li>
                <li>
                  <a className="dropdown-item" href="#">
                    <span className="icon-[tabler--user]"></span>
                    My Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <span className="icon-[tabler--settings]"></span>
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <span className="icon-[tabler--receipt-rupee]"></span>
                    Billing
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <span className="icon-[tabler--help-triangle]"></span>
                    FAQs
                  </a>
                </li>
                <li><hr className="border-base-content/25 -mx-2 my-3" /></li>
                <li>
                  <a className="dropdown-item btn btn-text btn-error" href="#">
                    <span className="icon-[tabler--logout]"></span>
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Carousel */}
      <section>
        <div id="image" data-carousel='{ "loadingClasses": "opacity-0" }' className="relative w-full">
          <div className="carousel">
            <div className="carousel-body h-full opacity-0">

              <div className="carousel-slide">
                <div className="flex h-full justify-center">
                  <img src="https://cdn.flyonui.com/fy-assets/components/carousel/image-22.png" className="size-full object-cover" alt="game" />
                </div>
              </div>

              <div className="carousel-slide">
                <div className="flex h-full justify-center">
                  <img src="https://cdn.flyonui.com/fy-assets/components/carousel/image-15.png" className="size-full object-cover" alt="vrbox" />
                </div>
              </div>

            </div>
          </div>

          <button type="button" className="carousel-prev">
            <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
              <span className="icon-[tabler--chevron-left] size-5 cursor-pointer rtl:rotate-180"></span>
            </span>
            <span className="sr-only">Previous</span>
          </button>

          <button type="button" className="carousel-next">
            <span className="sr-only">Next</span>
            <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
              <span className="icon-[tabler--chevron-right] size-5 cursor-pointer rtl:rotate-180"></span>
            </span>
          </button>
        </div>
      </section>

      {/* Benefits */}
      <section>
        <nav className="tabs space-x-1 rtl:space-x-reverse overflow-x-auto" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
          <button type="button" className="btn btn-text active-tab:bg-primary active-tab:text-white hover:text-primary active hover:bg-primary/20" id="tabs-pill-item-1" data-tab="#tabs-pill-1" aria-controls="tabs-pill-1" role="tab">
            Selling Puppy
          </button>
          <button type="button" className="btn btn-text active-tab:bg-primary active-tab:text-white hover:text-primary hover:bg-primary/20" id="tabs-pill-item-2" data-tab="#tabs-pill-2" aria-controls="tabs-pill-2" role="tab">
            Buying Puppy
          </button>
        </nav>

        <div className="mt-3">
          <div id="tabs-pill-1" role="tabpanel" aria-labelledby="tabs-pill-item-1">
            <h2 className="font-heading">Benefits</h2>
            <div
              id="multi-slide"
              data-carousel='{ "loadingClasses": "opacity-0", "slidesQty": { "xs": 1, "lg": 3 } }'
              className="relative w-full"
            >
              <div className="carousel h-80">
                <div className="carousel-body  h-full opacity-0">

                  <div className="carousel-slide">
                    <div className="bg-base-200/50 flex h-full justify-center p-6">
                      <span className="self-center text-lg">First slide</span>
                    </div>
                  </div>

                  <div className="carousel-slide">
                    <div className="bg-base-200 flex h-full justify-center p-6">
                      <span className="self-center text-lg">Second slide</span>
                    </div>
                  </div>

                  <div className="carousel-slide">
                    <div className="bg-base-300 flex h-full justify-center p-6">
                      <span className="self-center text-lg">Third slide</span>
                    </div>
                  </div>

                  <div className="carousel-slide">
                    <div className="bg-base-200/50 flex h-full justify-center p-6">
                      <span className="self-center text-lg">Fourth slide</span>
                    </div>
                  </div>

                  <div className="carousel-slide">
                    <div className="bg-base-200 flex h-full justify-center p-6">
                      <span className="self-center text-lg">Fifth slide</span>
                    </div>
                  </div>

                  <div className="carousel-slide">
                    <div className="bg-base-300 flex h-full justify-center p-6">
                      <span className="self-center text-lg">Sixth slide</span>
                    </div>
                  </div>
                </div>
              </div>


              <button type="button" className="carousel-prev">
                <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
                  <span className="icon-[tabler--chevron-left] size-5 cursor-pointer rtl:rotate-180"></span>
                </span>
                <span className="sr-only">Previous</span>
              </button>

              <button type="button" className="carousel-next">
                <span className="sr-only">Next</span>
                <span className="size-9.5 bg-base-100 flex items-center justify-center rounded-full shadow">
                  <span className="icon-[tabler--chevron-right] size-5 cursor-pointer rtl:rotate-180"></span>
                </span>
              </button>
            </div>
          </div>
          <div id="tabs-pill-2" className="hidden" role="tabpanel" aria-labelledby="tabs-pill-item-2">
            <p className="text-base-content/80">
              This is your <span className="text-base-content font-semibold">Buying</span> tab, where you can update your personal information and manage your account details.
            </p>
          </div>
        </div>

        <div className='text-center'>
          <a href='#' className="btn btn-primary">Browse & Buy</a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <div className="accordion accordion-shadow">
          <div className="accordion-item active" id="payment-shadow">
            <button className="accordion-toggle inline-flex items-center gap-x-4 px-5 py-4 text-start" aria-controls="payment-shadow-collapse" aria-expanded="true">
              <span className="icon-[tabler--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
              <span className="icon-[tabler--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
              When is payment taken for my order?
            </button>
            <div id="payment-shadow-collapse" className="accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="payment-shadow" role="region">
              <div className="px-5 pb-4">
                <p className="text-base-content/80 font-normal">
                  Payment is taken during the checkout process when you pay for your order. The order number that appears on the
                  confirmation screen indicates payment has been successfully processed.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item" id="delivery-shadow">
            <button className="accordion-toggle inline-flex items-center gap-x-4 px-5 py-4 text-start" aria-controls="delivery-shadow-collapse" aria-expanded="false">
              <span className="icon-[tabler--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
              <span className="icon-[tabler--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
              How would you ship my order?
            </button>
            <div id="delivery-shadow-collapse" className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="delivery-shadow" role="region">
              <div className="px-5 pb-4">
                <p className="text-base-content/80 font-normal">
                  For large products, we deliver your product via a third party logistics company offering you the “room of
                  choice” scheduled delivery service. For small products, we offer free parcel delivery.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item" id="cancel̉-shadow">
            <button className="accordion-toggle inline-flex items-center gap-x-4 px-5 py-4 text-start" aria-controls="cancel̉-shadow-collapse" aria-expanded="false">
              <span className="icon-[tabler--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
              <span className="icon-[tabler--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
              Can I cancel my order?
            </button>
            <div id="cancel̉-shadow-collapse" className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="cancel̉-shadow" role="region">
              <div className="px-5 pb-4">
                <p className="text-base-content/80 font-normal">
                  Scheduled delivery orders can be cancelled 72 hours prior to your selected delivery date for full refund.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="w-full">
        <footer className="footer bg-base-200/60 p-10">
          <form className="gap-6">
            <div className="flex items-center gap-2 text-xl font-bold">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.6745 16.9224L12.6233 10.378C12.2167 9.85117 11.4185 9.8611 11.0251 10.3979L6.45728 16.631C6.26893 16.888 5.96935 17.0398 5.65069 17.0398H3.79114C2.9635 17.0398 2.49412 16.0919 2.99583 15.4336L11.0224 4.90319C11.4206 4.38084 12.2056 4.37762 12.608 4.89668L20.9829 15.6987C21.4923 16.3558 21.024 17.3114 20.1926 17.3114H18.4661C18.1562 17.3114 17.8638 17.1677 17.6745 16.9224ZM12.5866 15.5924L14.8956 18.3593C15.439 19.0105 14.976 20 14.1278 20H9.74075C8.9164 20 8.4461 19.0586 8.94116 18.3994L11.0192 15.6325C11.4065 15.1169 12.1734 15.0972 12.5866 15.5924Z"
                fill="oklch(var(--p))"
              /></svg>
              <span>FlyonUI</span>
            </div>
            <p className="text-base-content">Most developer friendly & highly<br />customisable Tailwind UI Kit.</p>
            <fieldset>
              <label className="label label-text" htmlFor="subscribeNewsletter"> Subscribe to newsletter </label>
              <div className="flex flex-wrap sm:flex-nowrap w-full gap-1">
                <input className="input input-sm" id="subscribeNewsletter" placeholder="johndoe@gmail.com" />
                <button className="btn btn-sm btn-primary">Subscribe</button>
              </div>
            </fieldset>
          </form>
          <nav className="text-base-content">
            <h6 className="footer-title">Services</h6>
            <a href="#" className="link link-hover">Branding</a>
            <span><a href="#" className="link link-hover">Design</a><span className="badge ms-2 badge-sm badge-primary">New</span></span>
            <a href="#" className="link link-hover">Marketing</a>
            <a href="#" className="link link-hover">Advertisement</a>
          </nav>
          <nav className="text-base-content">
            <h6 className="footer-title">Company</h6>
            <a href="#" className="link link-hover">About us</a>
            <a href="#" className="link link-hover">Contact</a>
            <a href="#" className="link link-hover">Jobs</a>
            <a href="#" className="link link-hover">Press kit</a>
          </nav>
          <nav className="text-base-content">
            <h6 className="footer-title">Legal</h6>
            <a href="#" className="link link-hover">Terms of use</a>
            <a href="#" className="link link-hover">Privacy policy</a>
            <a href="#" className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
        <footer className="footer bg-base-200/60 border-base-content/25 border-t px-6 py-4">
          <div className="flex w-full items-center justify-between">
            <aside className="grid-flow-col items-center">
              <p>©2025 <a className="link link-hover font-medium" href="#">Good Furs</a></p>
            </aside>
            <div className="flex h-5 gap-4">
              <a href="#" className="link" aria-label="Github Link">
                <span className="icon-[tabler--brand-github] size-5"></span>
              </a>
              <a href="#" className="link" aria-label="Facebook Link">
                <span className="icon-[tabler--brand-facebook] size-5"></span>
              </a>
              <a href="#" className="link" aria-label="X Link">
                <span className="icon-[tabler--brand-x] size-5"></span>
              </a>
              <a href="#" className="link" aria-label="Google Link">
                <span className="icon-[tabler--brand-google] size-5"></span>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
