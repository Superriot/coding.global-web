import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import SubmitButton from '../../components/auth/SubmitButton';

const register = () => {
  return (
    <Layout>
      <div
        className={`my-5 flex h-screen items-center justify-center text-white md:my-0  `}
      >
        <div className='w-96 md:w-[600px]'>
          <Seo templateTitle='Rules' description='Discord Server Rules' />
          <main>
            <section className='layout my-10 rounded-md bg-dark-light bg-opacity-80 p-10 '>
              <h2 className='text-black'>Log in</h2>
              <p className='mt-2'>
                Or{' '}
                <code className='text-blue-500'>
                  start your 14-day free trial
                </code>
              </p>
              <p className='mt-5'>Sign in with</p>
              <div>
                <SubmitButton />
              </div>
              <div className='relative mt-10'>
                <div className='my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300'>
                  <p className='m-auto mx-4 mb-0 text-center font-semibold'>
                    OR
                  </p>
                </div>
              </div>
              <div className='mt-3'>
                <label
                  htmlFor='exampleEmail0'
                  className='form-label mb-2 inline-block text-gray-700'
                />
                Email address
                <input
                  type='email'
                  className='
        w-full
        rounded-md
       
      '
                  id='exampleEmail0'
                  placeholder='Email input'
                />
              </div>
              <div className='mt-5'>
                {' '}
                <label
                  htmlFor='examplePassword0'
                  className='mb-2 inline-block text-gray-700'
                />
                password
                <input
                  type='email'
                  className='
        w-full
        rounded-md

      '
                  id='exampleEmail0'
                  placeholder='password'
                />
              </div>
              <div className='mb-4 mt-5 flex items-center'>
                <input
                  id='default-checkbox'
                  type='checkbox'
                  value=''
                  className='h-4 w-4 rounded border-gray-300 bg-gray-100   dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 '
                />
                <label
                  htmlFor='default-checkbox'
                  className='ml-2 text-base font-medium text-white dark:text-gray-300'
                >
                  Remember me
                </label>
              </div>
              <div className='mt-5 w-full rounded bg-blue-500 py-2 text-center text-white hover:bg-blue-900'>
                Sign in
              </div>
            </section>
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default register;
