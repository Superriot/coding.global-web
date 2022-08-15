import React from 'react';

import Sidebar from '@/components/layout/Sidebar';

const Bot: React.FC = () => {
  return (
    <Sidebar>
      <section className='layout my-10 rounded-md bg-dark-light bg-opacity-80 p-10 text-white'>
        <div>
          <h1>Coding.global</h1>
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
          </p>
          <p className='mt-10'>
            <strong className='hover:rgba'>
              Source:{' '}
              <a
                className=''
                href='https://github.com/Don-Cryptus/coding.global-bot'
              >
                https://github.com/Don-Cryptus/coding.global-bot
              </a>
            </strong>
          </p>
        </div>
      </section>
    </Sidebar>
  );
};

export default Bot;
