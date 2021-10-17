import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Image from "next/image"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Header() {
  return (
    <div className='Header'>
      <Fragment>
        <Popover>
            <div className='top-header'>
            <div className="grid grid-cols-5 gap-4">
              <div className='synced-block'>
                  <h3>Latest synced block: 
                    <span>13451712</span>
                    <div className='circle'></div>
                  </h3>
              </div>
              <h4>
                ETH Price: <b>$3.82k</b>
              </h4>
              <div className='col-end-7'>
                <h4>V2 Analytics</h4>
                <h4>Docs</h4>
                <h4>App</h4>
              </div>
            </div>
            </div>
          </Popover>
      </Fragment>
      <Popover className="relative bg-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0">
              <a href="#">
                <span className="sr-only">Uniswap</span>
                <Image
                  className="logo"
                  src="https://info.uniswap.org/static/media/logo_white.ff3473ba.svg"
                  layout="fill"
                  alt="Logo"
                />
              </a>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-7 items end" style={{marginLeft:"0"}}>
              <a href="#" className="text-base px-0 py-2 font-medium text-gray-500 hover:text-gray-900">
                Overview
              </a>
              <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-3 py-1 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              style={{borderRadius:"16px"}}
              >
                Pools
              </a>
              <a href="#" className="text-base px-0 py-2 font-medium text-gray-500 hover:text-gray-900">
                Tokens
              </a>
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <div>
                Ethereum
              </div>
            </div>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                Sign in
              </a>
            </div>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                Sign in
              </a>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <Image
                      className="h-8 w-auto"
                      src="https://info.uniswap.org/static/media/logo_white.ff3473ba.svg"
                      alt="Logo"
                      layout="fill"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Pricing
                  </a>

                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Docs
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Sign up
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?{' '}
                    <a href="#" className="text-indigo-600 hover:text-indigo-500">
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}
