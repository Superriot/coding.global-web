import Image from 'next/image';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import Header from '../components/elements/Header';
import albo from '../../public/images/Team/albo.png';
import anes from '../../public/images/Team/anes.ong.png';
import don from '../../public/images/Team/don.png';
import doniiboy from '../../public/images/Team/doniiboyJr.png';
import en_Pilz from '../../public/images/Team/en_pilz.png';
import jiren from '../../public/images/Team/jiren.gif';
import martin from '../../public/images/Team/martin.png';
import matze from '../../public/images/Team/matze.png';
import paddy from '../../public/images/Team/paddy.png';
import steffen from '../../public/images/Team/steffen.png';

const data = [
  {
    username: 'Paddy',
    img: paddy,
    text: 'Hallo Ich bin Paddy ich Arbeite viel und hab kaum Zeit was für den server zu machen',
  },
  {
    username: 'Don Diabolic ',
    img: don,
    text: 'Hallo Ich bin Don ich bin der Owner dieses servers und kümmer mich um ..',
  },
  {
    username: 'en_Pilz',
    img: en_Pilz,
    text: 'Hallo Ich bin Pilz und bin kaum aktiv auf Discord, weil Discord ein verfluchter ort ist',
  },
  {
    username: 'albo',
    img: albo,
    text: 'Hallo Ich bin albo und bin fast nie da',
  },

  {
    username: 'DoniiBoyJr',
    img: doniiboy,
    text: 'Hey, Ich bin Azer und bin Moderator ich kümmere mich um diese website',
  },
  {
    username: 'Jiren',
    img: jiren,
    text: 'Hey ich bin Jiren und ich mach nix für den server',
  },
  {
    username: 'Martin',
    img: martin,
    text: 'Hey ich bin martin und bin moderator ich passe auf das niemand Scheiße in den chats schreibt',
  },
  {
    username: 'Matze',
    img: matze,
    text: 'Hallo ich bin Matze und helfe wen jemand hilfe braucht',
  },
  {
    username: 'Steffen',
    img: steffen,
    text: 'Heyy Ich bin Steffen und Helfe Sehr oft und gerne!',
  },
  {
    username: 'Anes',
    img: anes,
    text: 'Hey ich bin Anes und habe keine ahnung was ich hier machen soll',
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
