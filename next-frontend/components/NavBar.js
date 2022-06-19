import React from 'react'

const NavBar = () => {
  return (
    <div className='bg-[#5540af]'>
       <div className="w-full z-50 top-0 py-3 sm:py-5  bg-primary ">
          <div className="container flex items-center justify-between mx-auto">
            <div className=''>
              <a href="/">
                <img src="/assets/img/logo.svg" className="w-24 lg:w-48" alt="logo image" />
              </a>
            </div>
            <div className="hidden lg:block">
              <ul className="flex items-center">
                <li className="group pl-6">
                  <a href="/#about" className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">About</a>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
                </li>
                <li className="group pl-6">
                  <a href="/#services" className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Services</a>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
                </li>
                <li className="group pl-6">
                  <a href="/#portfolio" className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Portfolio</a>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
                </li>
                <li className="group pl-6">
                  <a href="/#clients" className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Clients</a>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
                </li>
                <li className="group pl-6">
                  <a href="/#work" className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Work</a>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
                </li>
                <li className="group pl-6">
                  <a href="/#statistics" className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Statistics</a>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
                </li>
                <li className="group pl-6">
                  <a href="/#blog" className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Blog</a>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
                </li>
                <li className="group pl-6">
                  <a href="/#contact" className="cursor-pointe pt-0.5 font-header font-semibold uppercase text-white">Contact</a>
                  <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow" />
                </li>
              </ul>
            </div>
            <div className="block lg:hidden">
              <button >
                <i className="bx bx-menu text-4xl text-white" />
              </button>
            </div>
          </div>
        </div>
        <div className="pointer-events-none fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 opacity-0 transition-opacity lg:hidden" >
          <div className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3">
            <button className="absolute top-0 right-0 mt-4 mr-4" >
              <img src="/assets/img/icon-close.svg" className="h-10 w-auto" alt="" />
            </button>
            <ul className="mt-8 flex flex-col">
              <li className="py-2">
                <a href="/#about" className="pt-0.5 font-header font-semibold uppercase text-white">About</a>
              </li>
              <li className="py-2">
                <a href="/#services" className="pt-0.5 font-header font-semibold uppercase text-white">Services</a>
              </li>
              <li className="py-2">
                <a href="/#portfolio" className="pt-0.5 font-header font-semibold uppercase text-white">Portfolio</a>
              </li>
              <li className="py-2">
                <a href="/#clients" className="pt-0.5 font-header font-semibold uppercase text-white">Clients</a>
              </li>
              <li className="py-2">
                <a href="/#work" className="pt-0.5 font-header font-semibold uppercase text-white">Work</a>
              </li>
              <li className="py-2">
                <a href="/#statistics" className="pt-0.5 font-header font-semibold uppercase text-white">Statistics</a>
              </li>
              <li className="py-2">
                <a href="/#blog" className="pt-0.5 font-header font-semibold uppercase text-white">Blog</a>
              </li>
              <li className="py-2">
                <a href="/#contact" className="pt-0.5 font-header font-semibold uppercase text-white">Contact</a>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default NavBar