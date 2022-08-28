/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-children-prop */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Bars4Icon,
  MagnifyingGlassIcon,
  Squares2X2Icon as Squares2X2IconMini,
} from '@heroicons/react/20/solid';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import DashboardSidebar from '@/components/elements/DashboardSidebar';

import Logout from '../../components/elements/Logout';

const files = [
  {
    name: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    current: true,
  },
  // More files...
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function dashboard() {
  const router = useRouter();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('auth');
    if (!loggedInUser) {
      router.push('auth/login');
    }
  }, [router]);

  return (
    <>
      {/* Mobile menu */}

      {/* Content area */}
      <div className='flex flex-1 flex-col overflow-hidden'>
        <header className='w-full'>
          <div className='relative z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white shadow-sm'>
            <span className='sr-only'>Open sidebar</span>
            <div className='flex flex-1 justify-between px-4 sm:px-6'>
              <div className='flex flex-1'>
                <form className='flex w-full md:ml-0' action='#' method='GET'>
                  <label htmlFor='desktop-search-field' className='sr-only'>
                    Search all files
                  </label>

                  <label htmlFor='mobile-search-field' className='sr-only'>
                    Search all files
                  </label>

                  <div className='relative w-full text-gray-400 focus-within:text-gray-600'>
                    <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center'>
                      <div>
                        <MagnifyingGlassIcon
                          className='h-5 w-5 flex-shrink-0'
                          aria-hidden='true'
                        />
                      </div>
                    </div>

                    <input
                      name='mobile-search-field'
                      id='mobile-search-field'
                      className='h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:hidden'
                      placeholder='Search'
                      type='search'
                    />
                    <input
                      name='desktop-search-field'
                      id='desktop-search-field'
                      className='hidden h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:block'
                      placeholder='Search all files'
                      type='search'
                    />
                  </div>
                </form>
              </div>
              <Logout />
            </div>
          </div>
        </header>

        {/* Main content */}
        <div className='flex flex-1 items-stretch overflow-hidden'>
          <main className='flex-1 overflow-y-auto'>
            <div className='mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8'>
              <div className='flex'>
                <h1 className='flex-1 text-2xl font-bold text-white'>Photos</h1>
                <div className='ml-6 flex items-center rounded-lg bg-gray-100 p-0.5 sm:hidden'>
                  <button
                    type='button'
                    className='rounded-md p-1.5 text-gray-400 hover:bg-white hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                  >
                    <Bars4Icon className='h-5 w-5' aria-hidden='true' />
                    <span className='sr-only'>Use list view</span>
                  </button>

                  <button
                    type='button'
                    className='ml-0.5 rounded-md bg-white p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'
                  >
                    <Squares2X2IconMini
                      className='h-5 w-5'
                      aria-hidden='true'
                    />
                    <span className='sr-only'>Use grid view</span>
                  </button>
                </div>
              </div>

              {/* Tabs */}

              {/* Gallery */}
              <section className='mt-8 pb-16' aria-labelledby='gallery-heading'>
                <h2 id='gallery-heading' className='sr-only'>
                  Recently viewed
                </h2>
                <ul
                  role='list'
                  className='grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'
                >
                  {files.map((file) => (
                    <li key={file.name} className='relative'>
                      <div
                        className={classNames(
                          file.current
                            ? 'ring-2 ring-indigo-500 ring-offset-2'
                            : 'focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100',
                          'aspect-w-10 aspect-h-7 group block w-full overflow-hidden rounded-lg bg-gray-100'
                        )}
                      >
                        <img
                          src={file.source}
                          alt=''
                          className={classNames(
                            file.current ? '' : 'group-hover:opacity-75',
                            'pointer-events-none object-cover'
                          )}
                        />
                        <button
                          type='button'
                          className='absolute inset-0 focus:outline-none'
                        >
                          <span className='sr-only'>
                            View details for {file.name}
                          </span>
                        </button>
                      </div>
                      <p className='pointer-events-none mt-2 block truncate text-sm font-medium text-white'>
                        {file.name}
                      </p>
                      <p className='pointer-events-none block text-sm font-medium text-white'>
                        {file.size}
                      </p>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </main>

          {/* Details sidebar */}
          <DashboardSidebar />
        </div>
      </div>
    </>
  );
}
