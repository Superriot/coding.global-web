import axios from 'axios';
import { FormEvent, useState } from 'react';

import Input from '@/components/auth/Input';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import SubmitButton from '../../components/auth/SubmitButton';
import Alert from '../../components/elements/Alert';

export default function Login() {
  const [email, setEmail] = useState('don@don.com');
  const [password, setPassword] = useState('don123');
  const [alert, setAlert] = useState('');
  const [color, setColor] = useState('');

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await axios.post('/api/login', {
      email,
      password,
    });

    if (res.data.email) {
      setColor('text-green bg-green-100');
      setAlert('Loged in');
    } else {
      setColor(
        'p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800'
      );
      setAlert(res.data.message);
    }

    localStorage.setItem('list', JSON.stringify({ email }));
  };

  return (
    <Layout>
      <div
        className={`my-5 flex h-screen items-center justify-center text-white md:my-0  `}
      >
        <div className='w-96 md:w-[600px]'>
          <Seo templateTitle='Rules' description='Discord Server Rules' />
          <main>
            <section className='layout my-10 rounded-md bg-dark-light bg-opacity-80 p-10 '>
              <h2 className='text-white'>Log in</h2>
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
              <form onSubmit={submit}>
                <Input
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
                <div className='mb-0 mt-0 flex items-center'></div>
                {alert && <Alert title={alert} color={color} />}
                <button
                  type='submit'
                  className='mt-1 w-full rounded bg-blue-500 py-2 text-center text-white hover:bg-blue-900'
                >
                  sign in
                </button>
              </form>
            </section>
          </main>
        </div>
      </div>
    </Layout>
  );
}
