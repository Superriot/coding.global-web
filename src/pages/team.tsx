import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import Header from '../components/elements/Header';
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
    text: 'lansdfa',
  },
  {
    username: 'Paddy',
    img: paddy,
    text: 'lansdfa',
  },
  {
    username: 'en_Pilz',
    img: en_Pilz,
    text: 'lansdfa',
  },
  {
    username: 'albo',
    img: albo,
    text: 'lansdfa',
  },
  {
    username: 'Anes',
    img: anes,
    text: 'lansdfa',
  },
  {
    username: 'DoniiBoyJr',
    img: doniiboy,
    text: 'lansdfa',
  },
  {
    username: 'Jiren',
    img: jiren,
    text: 'lansdfa',
  },
  {
    username: 'Martin',
    img: martin,
    text: 'lansdfa',
  },
  {
    username: 'Matze',
    img: matze,
    text: 'lansdfa',
  },
  {
    username: 'Steffen',
    img: steffen,
    text: 'lansdfa',
  },
];

export default function team() {
  return (
    <>
      <Seo templateTitle='Team' description='Coding discord Team' />

      <Layout>
        <section className='layout my-10 rounded-md bg-dark-light bg-opacity-80 p-10 text-white'>
          <Header name='Team' />
          iterm my nae
          <div className='grid grid-cols-1 gap-0 md:grid-cols-4'>
            {data.map(({ username }) => (
              <div key={username} className='p-10'>
                <div className='perspective group h-[420px] w-[300px]'>
                  <div className='preserve-3d relative h-full w-full duration-1000 group-hover:my-rotate-y-180'>
                    <div className='absolute h-full w-full border-2 backface-hidden'></div>
                    <div className='absolute h-full w-full overflow-hidden bg-gray-100 my-rotate-y-180 backface-hidden'></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </>
  );
}
