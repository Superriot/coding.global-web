import Image from 'next/image';

import Layout from '@/components/layout/Layout';

import albo from '../../public/images/Team/albo.png';
import anes from '../../public/images/Team/anes.png';
import don from '../../public/images/Team/don.png';
import doniiboy from '../../public/images/Team/doniiboyJr.png';
import en_pilz from '../../public/images/Team/en_pilz.png';
import jiren from '../../public/images/Team/jiren.gif';
import martin from '../../public/images/Team/martin.png';
import matze from '../../public/images/Team/matze.png';
import oliven from '../../public/images/Team/oliven.png';
import paddy from '../../public/images/Team/paddy.png';
import steffen from '../../public/images/Team/steffen.png';

export default function Team() {
  return (
    <Layout>
      <section className='layout mt-16 rounded-md bg-dark-light bg-opacity-80 p-4 font-secondary text-white'>
        <h1 className='text-center text-black'>OUR TEAM</h1>
        <div className='mt-36 flex justify-between space-x-4'>
          <div className='w-1/3 rounded-3xl border-4 p-4'>
            <div className='mx-auto mt-10 w-1/2 rounded-full '>
              <Image className='rounded-full' src={paddy} alt='paddy' />
            </div>
            <div className='text-center'>Paddy</div>
            <p className='text-center font-primary'></p>
          </div>
          <div className='w-1/3 rounded-3xl border-4 p-4'>
            <div className='mt-15 mx-auto mt-10 w-1/2 rounded-full'>
              <Image className='rounded-full' src={don} alt='Don Diabolic' />
            </div>
            <div className='text-center'>Don Diabolic</div>
          </div>
          <div className='w-1/3 rounded-3xl border-4 p-4'>
            <div className='mt-15 mx-auto mt-10 w-1/2 rounded-full'>
              <Image className='rounded-full' src={en_pilz} alt='en_pilz' />
            </div>
            <div className='text-center'>en_Pilz</div>
          </div>
        </div>

        <div className='mt-36 flex justify-between space-x-4'>
          <div className='w-1/3 rounded-3xl border-4 p-4'>
            <div className='mt-15 mx-auto mt-10 w-1/2 rounded-full'>
              <Image className='rounded-full' src={albo} alt='albo' />
            </div>
            <div className='text-center'>albo</div>
          </div>
          <div className='w-1/3 rounded-3xl border-4 p-4'>
            <div className='mt-15 mx-auto mt-10 w-1/2 rounded-full'>
              <Image className='rounded-full' src={anes} alt='anes' />
            </div>
            <div className='text-center'>anes</div>
          </div>
          <div className='w-1/3 rounded-3xl border-4 p-4'>
            <div className='mt-15 mx-auto mt-10 w-1/2 rounded-full'>
              <Image className='rounded-full' src={doniiboy} alt='doniiboy' />
            </div>
            <div className='text-center'>DoniiiboyJr</div>
          </div>
        </div>
        <div className='mt-36 flex justify-between space-x-4'>
          <div className='w-1/3 rounded-3xl border-4 p-4'>
            <div className='mt-15 mx-auto mt-10 w-1/2 rounded-full'>
              <Image className='rounded-full' src={jiren} alt='JirenTheGrey' />
            </div>
            <div className='text-center'>JirenTheGrey</div>
          </div>
          <div className='w-1/3 rounded-3xl border-4 p-4'>
            <div className='mt-15 mx-auto mt-10 w-1/2 rounded-full'>
              <Image className='rounded-full' src={martin} alt='martin' />
            </div>
            <div className='text-center'>Martin</div>
          </div>
          <div className='w-1/3 rounded-3xl border-4 p-4'>
            <div className='mt-15 mx-auto mt-10 w-1/2 rounded-full'>
              <Image className='rounded-full' src={matze} alt='matze' />
            </div>
            <div className='text-center'>MatzeKatze</div>
          </div>
        </div>
        <div className='mt-36 flex justify-between space-x-4'>
          <div className='w-1/3 rounded-3xl border-4 p-4'>
            <div className='mt-15 mx-auto mt-10 w-1/2 rounded-full'>
              <Image className='rounded-full' src={oliven} alt='Oli Ven' />
            </div>
            <div className='text-center'>Oli Ven</div>
          </div>
          <div className='w-1/3 rounded-3xl border-4 p-4'>
            <div className='mt-15 mx-auto mt-10 w-1/2 rounded-full'>
              <Image className='rounded-full' src={steffen} alt='steffen' />
            </div>
            <div className=''>Steffen</div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
