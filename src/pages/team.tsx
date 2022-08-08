import Layout from '@/components/layout/Layout';

export default function Team() {
  return (
    <Layout>
      <main>
        <section className='layout my-10  rounded-md bg-dark-light bg-opacity-80 text-white '>
          <h1 className='-mt-10 text-center'>Our Team</h1>
          <div className='mr-10  -mt-20 ml-5 flex h-screen items-center justify-center self-stretch'>
            <div className='-mt-24 mr-10 box-content h-80 w-80 space-x-4 rounded-3xl border-4 p-4'>
              <div className='text-center'>Don Diabolic</div>
            </div>
            <div className='w-425.333 -mt-24 mr-10 box-content h-80 w-80 space-x-4 rounded-3xl border-4 p-4 '>
              Anes
            </div>
            <div className='-mt-24 box-content h-80 w-80 rounded-3xl border-4 p-4'>
              Azer
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
