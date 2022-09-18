/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable simple-import-sort/imports */
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from 'react';

import DashboardSidebar from '@/components/elements/DashboardSidebar';

import Logout from '../../components/elements/Logout';

import { UnsplashImage, UnsplashResult } from '@/types';

import Image from 'next/image';

export default function Dashboard() {
  const router = useRouter();
  const [query, setQuery] = useState<string>('programming');
  const [unsplashResult, setUnsplashResult] = useState<UnsplashResult>();
  const [detailsImage, setDetailsImage] = useState<UnsplashImage>();
  const myRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      const response = await axios.get<UnsplashResult>(
        `https://api.unsplash.com/search/photos?per_page=30&page=1&query=${query}&client_id=NwZfngFJ6Lcw5p2yHkzY2vmzFvarjC6xm9ph3jRQE_s`
      );
      setUnsplashResult(response.data);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('auth');
    if (!loggedInUser) router.push('/auth/login');
  }, [router]);

  const result = async (pageNumber: any) => {
    setLoading(true);
    const response: any = await axios.get<UnsplashResult>(
      `https://api.unsplash.com/search/photos?page=${pageNumber}&query=${query}&client_id=NwZfngFJ6Lcw5p2yHkzY2vmzFvarjC6xm9ph3jRQE_s`
    );
    setLoading(false);
    setUnsplashResult(response.data);
  };

  // useEffect(() => {
  //   changePhotoHandler(pageNumber);
  // }, [pageNumber]);

  // const loadMore = () => {
  //   setPageNumber((prevPageNumber: any) => prevPageNumber + 1);
  // };

  // const pageEnd = useRef<any>(null);
  // let num = 1
  // useEffect(() => {
  //   if (loading) {
  //     const observer = new IntersectionObserver(
  //       (erntries) => {
  //         if (erntries[0].isIntersecting && loadMore) {
  //           num++
  //           loadMore();
  //           if(num >= 5) {
  //             observer.unobserve(pageEnd.current)
  //           }
  //         }
  //       },
  //       { threshold: 1 }
  //     );
  //     observer.observe(pageEnd.current);
  //   }
  // }, [loading, num]);

  const onScroll = async () => {
    const bottom =
      myRef.current &&
      myRef.current.scrollHeight - myRef.current.scrollTop ===
        myRef.current.clientHeight;

    if (bottom) {
      const response = await axios.get<UnsplashResult>(
        `https://api.unsplash.com/search/photos?per_page=30&page=1&query=${query}&client_id=NwZfngFJ6Lcw5p2yHkzY2vmzFvarjC6xm9ph3jRQE_s`
      );
    }
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
                {/* <button
                  onClick={changePhotoHandler}
                  type='button'
                  className='mr-40'
                >
                  Search
                </button> */}
              </div>
              <Logout />
            </div>
          </div>
        </header>

        <div className='flex flex-1 items-stretch overflow-hidden'>
          <main
            className='flex-1 overflow-y-auto'
            onScroll={onScroll}
            ref={myRef}
          >
            <div className='mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8'>
              <div className='flex'>
                <h1 className='flex-1 text-2xl font-bold text-white'>
                  Photos
                  <div className='unsplash-container'>
                    {unsplashResult?.results.map((image) => (
                      <div
                        key={image.id}
                        className='inline-block duration-1000 hover:scale-150 hover:animate-pulse	'
                      >
                        {/* height 3473 width 5209 */}
                        <Image
                          height={image.height}
                          width={image.width}
                          src={image.urls.regular}
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
        {/* <button
          onClick={loadMore}
          className='rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700'
          ref={pageEnd}
        >
          See More
        </button> */}
      </div>
    </>
  );
}
