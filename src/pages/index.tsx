import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='text-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'>
            <UnstyledLink href='https://discord.gg/coding'>
              <div className='mt-5 rounded-full bg-white py-5 px-1 pb-8 text-6xl font-medium md:mt-0'>
                <span className='mb-10 text-red-600'>{'<'}</span>
                <span className='text-black'>/</span>
                <span className='text-red-600'>{'>'}</span>
              </div>
            </UnstyledLink>
            <h1 className='mt-4'>Official Coding Discord Website</h1>
            <p className='mt-2 text-sm text-white'>
              Official{' '}
              <ArrowLink className='underline' href='https://discord.gg/coding'>
                discord.gg/coding
              </ArrowLink>
              Website for the Coding Discord Server
            </p>
            <p className='mt-2 text-sm text-white'>
              <ArrowLink href='https://github.com/Don-Cryptus/discord.global-web'>
                See the repository
              </ArrowLink>
            </p>
            <div className='mt-4 flex items-center space-x-2'>
              <UnstyledLink
                href='https://discord.gg/coding'
                className='w-36 rounded-md bg-discord px-2 py-1 text-2xl font-black'
              >
                <div className='flex items-center'>
                  <NextImage
                    className='mt-0.5 px-1'
                    src='/images/discord.png'
                    width='31'
                    height='24'
                    alt='Discord Logo'
                  />
                  <span>Discord</span>
                </div>
              </UnstyledLink>
              <UnstyledLink
                href='/faq'
                className='cursor-newtab w-32 rounded-md bg-discord py-1 text-2xl font-black'
              >
                FAQ
              </UnstyledLink>
            </div>
            <div className='mt-4 flex items-center space-x-2'>
              <UnstyledLink
                href='/rules'
                className='cursor-newtab w-32 rounded-md bg-discord py-1 text-2xl font-black'
              >
                Rules
              </UnstyledLink>
              <UnstyledLink
                href='/team'
                className='cursor-newtab w-32 rounded-md bg-discord py-1 text-2xl font-black'
              >
                Team
              </UnstyledLink>
            </div>
            <iframe
              src='https://discord.com/widget?id=693908458986143824&theme=dark'
              width='350'
              height='500'
              title='Discord Widget'
              frameBorder='0'
              className='mt-4'
              sandbox='allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts'
            ></iframe>

            {/* <ButtonLink className='mt-6' href='/components' variant='light'>
              See all components
            </ButtonLink> */}

            {/* <UnstyledLink
              href='https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Ftheodorusclarence%2Fts-nextjs-tailwind-starter'
              className='mt-4'
            >
               eslint-disable-next-line @next/next/no-img-element 
              <img
                width='92'
                height='32'
                src='https://vercel.com/button'
                alt='Deploy with Vercel'
              />
            </UnstyledLink> */}

            <footer className='bottom-2 text-white md:absolute '>
              © {new Date().getFullYear()} By{' '}
              <UnderlineLink href='https://github.com/Don-Cryptus'>
                Don Cryptus
              </UnderlineLink>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}
