import Image from 'next/image';

import Layout from '@/components/layout/Layout';

import albo from '../../public/images/Team/albo.png';
import anes from '../../public/images/Team/anes.png';
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
    username: 'Don Diabolic',
    img: don,
  },
  {
    username: 'Paddy',
    img: paddy,
  },
  {
    username: 'en_Pilz',
    img: en_Pilz,
  },
  {
    username: 'albo',
    img: albo,
  },
  {
    username: 'Anes',
    img: anes,
  },
  {
    username: 'DoniiBoyJr',
    img: doniiboy,
  },
  {
    username: 'Jiren',
    img: jiren,
  },
  {
    username: 'Martin',
    img: martin,
  },
  {
    username: 'Matze',
    img: matze,
  },
  {
    username: 'Steffen',
    img: steffen,
  },
];

export default function team() {
  return (
    <>
      <Layout>
        <section className='layout mt-16 grid grid-cols-3 gap-4 rounded-md bg-dark-light bg-opacity-80 p-4 font-secondary text-white'>
          {data.map(({ img, username }) => (
            <div key={username} className=''>
              <div className=' mx-auto mt-10 w-1/2 rounded-3xl border-4 p-4'>
                <Image className='rounded-full' src={img} alt={username} />
                <div className='text-center font-secondary'>{username}</div>
              </div>
            </div>
          ))}
        </section>
      </Layout>
    </>
  );
}
