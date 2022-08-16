import React from 'react';

import Sidebar from '@/components/layout/Sidebar';

const Bot: React.FC = () => {
  return (
    <Sidebar>
      <section className='layout my-10 mt-20 rounded-md bg-dark-light bg-opacity-80 p-10 text-white'>
        <div>
          <h1 className=''>Coding.global</h1>
          <br />
          <p className='text-lg'>
            <strong>Description</strong> Coding.global is our main discord
            server bot bot. If you receive any warnings or infractions,
            coding.global will be the one to DM you. Judgebot has a 50-point
            system.{' '}
          </p>
          <p className='mt-5'>
            Each infraction gives you points, and points decay over time.
            Warnings give 5 points. Strikes typically give 10 but can give more
            in exceptional circumstances.
            <br />
          </p>
          <div className='mt-5 ml-8'>
            <li>10 points: 1-hour mute</li>
            <li>20 points: 12-hour mute</li>
            <li>30 points: 24-hour mute</li>
            <li>40 points: 30-day mute</li>
            <li>50 points: permanent ban</li>
          </div>
          <p className='mt-10'>
            <strong className='hover:rgba'>
              Source:{' '}
              <a
                target='_blank'
                className='relative uppercase text-white hover:text-gray-800'
                href='https://github.com/Don-Cryptus/coding.global-bot'
                rel='noreferrer'
              >
                https://github.com/Don-Cryptus/coding.global-bot
              </a>
            </strong>
          </p>
          <h3 className='mt-10'>Commands</h3>
          <br />
          <p>
            <code className=''>
              j!selfhistory - Will DM your infraction history
            </code>
          </p>
          <p>
            <code>:stop_sign: - Reacting to me</code>
          </p>
        </div>
      </section>
    </Sidebar>
  );
};

export default Bot;
