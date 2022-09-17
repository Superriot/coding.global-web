import Image from 'next/image';

import { UnsplashImage } from '@/types';

interface DashboardSidebarProps {
  image?: UnsplashImage;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ image }) => {
  const currentFile = {
    name: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    information: {
      'Uploaded by': 'Marie Culver',
      Created: '1',

      'Last modified': 'June 8, 2020',
      Dimensions: '4032 x 3024',
      Resolution: '72 x 72',
    },
    sharedWith: [
      {},
      {
        id: 2,
      },
    ],
  };

  return (
    <aside className='hidden h-[1300px] w-96 overflow-y-auto border-l border-gray-200 bg-white p-8 lg:block'>
      <div className='space-y-6 pb-16'>
        <div>
          <div className='aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg'>
            {image && (
              <Image
                width={200}
                height={200}
                src={image.urls.regular}
                alt=''
                className='object-cover'
              />
            )}
          </div>
          <div className='mt-4 flex items-start justify-between'>
            <div>
              <h2 className='text-lg font-medium text-gray-900'>
                <span className='sr-only'>Details for </span>
                {currentFile.name}
              </h2>
              <p className='text-sm font-medium text-gray-500'>
                {currentFile.size}
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className='font-medium text-gray-900'>Information</h3>
          <dl className='mt-2 divide-y divide-gray-200 border-t border-b border-gray-200'>
            <div className='flex justify-between py-3 text-sm font-medium'>
              Created at <div>{image?.created_at}</div>
            </div>
            <div className='flex justify-between py-3 text-sm font-medium'>
              height <div>{image?.height}</div>
            </div>
            <div className='flex justify-between py-3 text-sm font-medium'>
              width <div>{image?.width}</div>
            </div>
            <div className='flex justify-between py-3 text-sm font-medium'>
              updated at <div>{image?.updated_at}</div>
            </div>
            <div className='flex justify-between py-3 text-sm font-medium'>
              {!image?.promoted_at
                ? 'Dont promoted'
                : `Promoted at ${image.promoted_at}`}
            </div>
            <div className='flex justify-between py-3 text-sm font-medium'>
              Likes <div> {image?.likes}</div>
            </div>

            {/* {Object.keys(currentFile.information).map((key) => (
              <div
                key={key}
                className='flex justify-between py-3 text-sm font-medium'
              >
                <dt className='text-gray-500'>{key}</dt>
                <dd className='whitespace-nowrap text-gray-900'>
                  {(currentFile as any).information[key]}
                </dd>
              </div>
            ))} */}
          </dl>
        </div>
      </div>
      <div></div>
    </aside>
  );
};
export default DashboardSidebar;
