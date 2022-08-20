// import axios from 'axios';
import Link from 'next/link';

// import React, { useState } from 'react';
// import Input from '@/components/auth/Input';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function Register() {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmedPassword] = useState('');

  // const onClickHandler = () => {
  //   const data = axios
  //     .post('/newUser', {
  //       email,
  //       password,
  //       confirmPassword,
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  // console.log(email);
  // console.log(password);
  // console.log(confirmPassword);

  return (
    <Layout>
      <div
        className={`my-5 flex h-screen items-center justify-center text-white md:my-0  `}
      >
        <div className='w-96 md:w-[600px]'>
          <Seo templateTitle='Rules' description='Discord Server Rules' />
          <main>
            <section className='layout my-10 rounded-md bg-dark-light bg-opacity-80 p-10 '>
              <div>
                <h2>Create an account</h2>
              </div>
              <form>
                {/* <Input
                  name='Email'
                  type='email'
                  value={email}
                  onChange={setEmail}
                />
                <Input
                  name='Password'
                  type='password'
                  value={password}
                  onChange={setPassword}
                />
                <Input
                  name='Confirm password'
                  type='password'
                  value={confirmPassword}
                  onChange={setConfirmedPassword}
                /> */}

                <div className='mb-4 mt-5 flex items-center'>
                  <input
                    id='default-checkbox'
                    type='checkbox'
                    className='mt-1 h-4 w-4 rounded border-gray-300 bg-gray-100  dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 '
                  />
                  <label
                    htmlFor='default-checkbox'
                    className='ml-2 text-base font-medium text-white dark:text-gray-300'
                  >
                    <div className='mt-1'>
                      I accept the{' '}
                      <code className='text-blue-500 hover:text-blue-700'>
                        <Link href='/rules'>Terms and Conditions</Link>
                      </code>
                    </div>
                  </label>
                </div>
                <button
                  type='submit'
                  className='mt-1 w-full rounded bg-blue-500 py-2 text-center text-white hover:bg-blue-900'
                  // onClick={onClickHandler}
                >
                  Register
                </button>
              </form>
              <div className='mt-5'>
                <p>
                  Already have an account{' '}
                  <code className='text-blue-500 hover:text-blue-700'>
                    <Link href='/auth/login'>Login here</Link>
                  </code>
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </Layout>
  );
}
