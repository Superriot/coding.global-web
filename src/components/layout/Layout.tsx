import * as React from 'react';

import NextImage from '@/components/NextImage';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <NextImage
        useSkeleton
        className='img-fade relative h-[50vh] object-top opacity-20 md:h-[100vh]'
        imgClassName='object-top'
        src='/images/banner.gif'
        width='100%'
        objectFit='cover'
        layout='fill'
        priority={false}
        alt='Icon'
      />

      <div className='absolute top-0 left-0 bottom-0 right-0'>{children}</div>
    </>
  );
}
