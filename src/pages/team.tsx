import Layout from '@/components/layout/Layout';

export default function Team() {
  return (
    <Layout>
      <main>
        <section className='layout my-10 rounded-md bg-dark-light bg-opacity-80 p-10 text-white'>
          <h1>Team</h1>
          <div className='flex justify-between'>
            <div className=''>01</div>
            <div className=''>02</div>
            <div className=''>03</div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
