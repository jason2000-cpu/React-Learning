import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { IoMdArrowDropdown } from "react-icons/io";
import { FaMoon } from 'react-icons/fa';
import { MdEdit, MdFavorite, MdLightMode } from 'react-icons/md';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown() {
    const toggleTheme = () =>{
        document.documentElement.classList.toggle('dark');
        }
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        {/* <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Options
          <IoMdArrowDropdown className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button> */}
        <Menu.Button>
            <IoMdArrowDropdown size={"30"}/>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white dark:bg-[#dcdddf] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'flex px-4 py-2 text-sm cursor-pointer'
                  )}
                >
                  <MdEdit  size={20}/>
                  <div className='px-1'>Edit</div>
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'px-4 py-2 text-sm cursor-pointer flex'
                  )}
                >
                    <MdFavorite  size={20}/>
                    <div className='px-1'> Add to favorites</div>
                </a>
              )}
            </Menu.Item>
          </div>
          <div className='py-1 px-1'>
            <Menu.Item>
                {({ active }) => (
                    <div className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'px-2 py-4 text-sm flex cursor-pointer'
                    )}>
                        <MdLightMode size={20}/>
                        <div className='px-1' onClick={toggleTheme}>
                            Toggle Theme
                        </div>
                    </div>
                )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
