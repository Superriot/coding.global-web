import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function Faq() {
  return (
    <Layout>
      <Seo
        templateTitle='Components'
        description='Pre-built components with awesome default'
      />

      <main>
        <section className='layout my-10 rounded-md bg-dark-light bg-opacity-80 p-10 text-white'>
          <h1>FAQ</h1>
          <p>Test</p>
        </section>
      </main>
    </Layout>
  );
}
