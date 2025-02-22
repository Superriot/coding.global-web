import Image from 'next/image';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import Header from '../components/elements/Header';
import albo from '../../public/images/Team/albo.png';
import cook from '../../public/images/Team/cook.png';
import don from '../../public/images/Team/don.png';
import doniiboy from '../../public/images/Team/doniiboyJr.png';
import en_Pilz from '../../public/images/Team/en_pilz.png';
import jiren from '../../public/images/Team/jiren.gif';
import matze from '../../public/images/Team/matze.png';
import paddy from '../../public/images/Team/paddy.png';

const data = [
  {
    username: 'Paddy',
    img: paddy,
    text: 'Hello I am Paddy I work a lot and have little time to do what for the server',
  },
  {
    username: 'Don Diabolic ',
    img: don,
    text: 'Hi Im Don Im the owner of this server and I take care of',
  },
  {
    username: 'en_Pilz',
    img: en_Pilz,
    text: 'Hi Im pilz and Im hardly active on Discord because Discord is a cursed place',
  },
  {
    username: 'albo',
    img: albo,
    text: 'Hello I am albo and am almost never therea',
  },

  {
    username: 'DoniiBoyJr',
    img: doniiboy,
    text: 'Hey, I am Azer and I am moderator I take care of this website',
  },
  {
    username: 'Jiren',
    img: jiren,
    text: 'hey i am jiren and i help people on the server',
  },
  {
    username: 'Cook',
    img: cook,
    text: 'Hey Im Cook and Im a moderator I make sure no one writes shit in the chats and I am currently writing my thesis',
  },
  {
    username: 'Matze',
    img: matze,
    text: 'Hello I am Matze and help who someone needs help',
  },
];

export default function team() {
  return (
    <>
      <Seo templateTitle='Team' description='Coding discord Team' />

      <Layout>
        <section className='layout my-10 rounded-md bg-dark-light bg-opacity-80 p-10 text-white'>
          <Header name='Team' />
          <div className='mt-10 grid grid-cols-3 justify-evenly'>
            {data.map(({ username, img, text }) => (
              <div key={username} className='mt-10 flex flex-col items-center'>
                <div className='group h-[150px] w-[150px] rounded-full bg-black text-xs text-white perspective'>
                  <div className='relative duration-1000 preserve-3d group-hover:my-rotate-y-180'>
                    <div className='absolute backface-hidden'>
                      <Image
                        src={img}
                        className='rounded-full'
                        alt={username}
                      />
                    </div>
                    <div className='flex h-[150px] items-center justify-center rounded-full px-4 my-rotate-y-180 backface-hidden'>
                      {text}
                    </div>
                  </div>
                </div>
                {username}
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}
