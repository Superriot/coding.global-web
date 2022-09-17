/* eslint-disable @next/next/no-img-element */
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import DashboardSidebar from '@/components/elements/DashboardSidebar';

import Logout from '../../components/elements/Logout';

import { UnsplashImage, UnsplashResult } from '@/types';

export default function Dashboard() {
  const router = useRouter();
  const [query, setQuery] = useState<string>('programming');
  const [unsplashResult, setUnsplashResult] = useState<UnsplashResult>();
  const [detailsImage, setDetailsImage] = useState<UnsplashImage>();

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      const response = await axios.get<UnsplashResult>(
        `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=NwZfngFJ6Lcw5p2yHkzY2vmzFvarjC6xm9ph3jRQE_s`
      );
      setUnsplashResult(response.data);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('auth');
    if (!loggedInUser) router.push('/auth/login');
  }, [router]);

  const changePhotoHandler = async () => {
    const response = await axios.get<UnsplashResult>(
      `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=NwZfngFJ6Lcw5p2yHkzY2vmzFvarjC6xm9ph3jRQE_s`
    );
    setUnsplashResult(response.data);
  };

  return (
    <>
      <div className='flex flex-1 flex-col overflow-hidden'>
        <header className='w-full'>
          <div className='relative z-10 flex h-16 flex-shrink-0 border-b border-gray-200 bg-white shadow-sm'>
            <span className='sr-only'>Open sidebar</span>
            <div className='flex flex-1 justify-between px-4 sm:px-6'>
              <div className='flex flex-1'>
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
                    name='desktop-search-field'
                    id='desktop-search-field'
                    className='hidden h-full w-full border-transparent py-2 pl-8 pr-3 text-base text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:block'
                    placeholder='Search all files'
                    type='search'
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
                <button
                  onClick={changePhotoHandler}
                  type='button'
                  className='mr-40'
                >
                  Search
                </button>
              </div>
              <Logout />
            </div>
          </div>
        </header>

        <div className='flex flex-1 items-stretch overflow-hidden'>
          <main className='flex-1 overflow-y-auto'>
            <div className='mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8'>
              <div className='flex'>
                <h1 className='flex-1 text-2xl font-bold text-white'>
                  Photos
                  <div className='grid-template-columns: repeat(auto-fill, minmax(200px,1fr)) grid grid-flow-col grid-rows-3 gap-4'>
                    {unsplashResult?.results.map((image) => (
                      <div key={image.id} className='text-white'>
                        <img
                          src={image.urls.small}
                          alt=''
                          onClick={() => setDetailsImage(image)}
                        />
                      </div>
                    ))}
                  </div>
                </h1>
              </div>

              {/* Tabs */}

              {/* Gallery */}
              <section className='' aria-labelledby='gallery-heading'>
                <h2 id='gallery-heading' className='sr-only'>
                  Recently viewed
                </h2>
              </section>
            </div>
          </main>
          {detailsImage && <DashboardSidebar image={detailsImage} />}
        </div>
      </div>
    </>
  );
}
