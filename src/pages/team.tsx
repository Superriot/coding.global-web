import Layout from '@/components/layout/Layout';

export default function Team() {
  return (
    <Layout>
      <main>
        <section className='layout my-10 justify-center rounded-md bg-dark-light bg-opacity-80 p-10 text-white '>
          <h1 className='text-center'>Our Team</h1>
          <div className='mt-8 flex justify-between'>
            <div className='h-90 box-content w-60 rounded-3xl border-4 p-4 hover:drop-shadow-2xl'></div>
            <div className='box-content h-80 w-60 rounded-3xl border-4 p-4'></div>
            <div className='box-content h-80 w-60 rounded-3xl border-4 p-4'></div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
