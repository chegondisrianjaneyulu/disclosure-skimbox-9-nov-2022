import React from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

export default function DisclousureExample() {
  return (
   <div className="w-full h-screen px-4 pt-16 bg-black">
    <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
       
       <ul>
         <li className=' w-full text-sm font-medium text-purple-900 rounded-lg text-left bg-purple-100 px-4 py-2 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>What's New</li>
         
         <li className='mt-2'> <Disclosure>
          {({open}) => (
             <> 
             <Disclosure.Button className='flex w-full  justify-between text-sm font-medium text-purple-900 rounded-lg text-left bg-purple-100 px-4 py-2 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
                <span>Get Started</span>
                <ChevronRightIcon className={`h-5 w-5 text-purple-500 ${open ? 'rotate-90 transform' : ''}`}/>
             </Disclosure.Button>

             <Disclosure.Panel className='px-4 pt-4 pb-2 text:sm text-gray-500'> 
               Designer
            </Disclosure.Panel>
             </>)}
              </Disclosure>
         </li>

         <li><Disclosure as="div" className='mt-2'>
         {({open}) => (
            <>
            <Disclosure.Button className='flex w-full bg-purple-100 text:sm font-medium text-purple-900 text-left px-4 py-2 hover:bg-purple-200 rounded-md justify-between focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
            <span>Color</span>
            <ChevronRightIcon className={`h-5 w-5 text-purple-500 ${open ? 'rotate-90 transform' : ''}`}/>
         </Disclosure.Button>
         <Disclosure.Panel className='px-4 pb-2 pt-4 text-sm text-gray-500'>Dark Mode</Disclosure.Panel>
            </>)}
       </Disclosure>
         </li>


         <li><Disclosure as="div" className='mt-2'>
         {({open}) => (
            <>
            <Disclosure.Button className='flex w-full bg-purple-100 text:sm font-medium text-purple-900 text-left px-4 py-2 hover:bg-purple-200 rounded-md justify-between focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
            <span>Color</span>
            <ChevronRightIcon className={`h-5 w-5 text-purple-500 ${open ? 'rotate-90 transform' : ''}`}/>
         </Disclosure.Button>

         <ul>
            <li><Disclosure.Panel className='px-4 pb-2 pt-4 text-sm text-gray-500'><li><Disclosure as="div" className='mt-2'>
         {({open}) => (
            <>
            <Disclosure.Button className='flex w-full bg-purple-100 text:sm font-medium text-purple-900 text-left px-4 py-2 hover:bg-purple-200 rounded-md justify-between focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'>
            <span>Color</span>
            <ChevronRightIcon className={`h-5 w-5 text-purple-500 ${open ? 'rotate-90 transform' : ''}`}/>
         </Disclosure.Button>
         <Disclosure.Panel className='px-4 pb-2 pt-4 text-sm text-gray-500'>Dark Mode</Disclosure.Panel></>)}
       </Disclosure>
         </li>
         </Disclosure.Panel>
            </li>
         </ul>
         </>)}

       </Disclosure>
      </li>
    </ul>

       
        
       
       
    </div>
   </div>
  )
}
