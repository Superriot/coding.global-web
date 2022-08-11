import { Accordion } from 'flowbite-react';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function Faq() {
  return (
    <Layout>
      <Seo
        templateTitle='Components'
        description='Pre-built components with awesome default'
      />

      <main>
        <section className='layout my-10 rounded-md bg-dark-light bg-opacity-80 p-10 text-white'>
          <h1 className='mb-2'>FAQ</h1>
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title>Javascript/Typescript</Accordion.Title>
              <Accordion.Content>
                <h1 className='text-gray-500 dark:text-gray-400'></h1>
                <br />
                <p className='btn'>
                  JavaScript is a text-based programming language used both on
                  the client-side and server-side that allows you to make web
                  pages interactive. Where HTML and CSS are languages that give
                  structure and style to web pages, JavaScript gives web pages.{' '}
                  <br />
                  interactive elements that engage a user TypeScript is
                  JavaScript with syntax for types. TypeScript is a strongly
                  typed programming language that builds on JavaScript, giving
                  you better tooling at any scale.
                  <br /> you can lern javascript here:
                </p>
                <li>
                  <a
                    href='https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/'
                    rel='nofollow'
                    className='text-blue-600 hover:underline dark:text-blue-500'
                  >
                    Javascript
                  </a>
                </li>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Python</Accordion.Title>
              <Accordion.Content>
                <p className='text-gray-500 dark:text-gray-400'>
                  Python is a computer programming language often used to build
                  websites and software, automate tasks, and conduct data
                  analysis. Python is a general-purpose language, meaning it can
                  be used to create a variety of different programs and isnt
                  specialized for any specific problems.
                  <br /> You Can lern python here:
                </p>
                <li>
                  <a
                    href='https://www.codecademy.com/'
                    rel='nofollow'
                    className='text-blue-600 hover:underline dark:text-blue-500'
                  >
                    python
                  </a>
                </li>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>Java</Accordion.Title>
              <Accordion.Content>
                <p className='text-gray-500 dark:text-gray-400'>
                  Developers use Java to construct applications in laptops, data
                  centres, game consoles, scientific supercomputers, cell
                  phones, and other devices. Java is the worlds third most
                  popular programming language, after Python and C ++ according
                  to the TIOBE index, which evaluates programming language
                  popularity <br />
                  you can lern java here:
                </p>
                <li>
                  <a
                    href='https://www.codecademy.com/'
                    rel='nofollow'
                    className='text-blue-600 hover:underline dark:text-blue-500'
                  >
                    Java
                  </a>
                </li>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>c ++</Accordion.Title>
              <Accordion.Content>
                <p className='text-gray-500 dark:text-gray-400'>
                  C++ is a powerful general-purpose programming language. It can
                  be used to develop operating systems, browsers, games, and so
                  on. C++ supports different ways of programming like
                  procedural, object-oriented, functional, and so on.
                  <br />
                  you can lern java here:
                </p>
                <li>
                  <a
                    href='https://www.codecademy.com/'
                    rel='nofollow'
                    className='text-blue-600 hover:underline dark:text-blue-500'
                  >
                    c ++
                  </a>
                </li>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>c#</Accordion.Title>
              <Accordion.Content>
                <p className='text-gray-500 dark:text-gray-400'>
                  What is C# used for? Like other general-purpose programming
                  languages, C# can be used to create a number of different
                  programs and applications: mobile apps, desktop apps,
                  cloud-based services, websites, enterprise software and games.
                  Lots and lots of games.
                </p>
                <li>
                  <a
                    href='https://docs.microsoft.com/de-de/dotnet/csharp/tour-of-csharp/tutorials/'
                    rel='nofollow'
                    className='text-blue-600 hover:underline dark:text-blue-500'
                  >
                    c#
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.udemy.com/course/complete-csharp-masterclass/'
                    rel='nofollow'
                    className='text-blue-600 hover:underline dark:text-blue-500'
                  >
                    c#
                  </a>
                </li>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </section>
      </main>
    </Layout>
  );
}
