import axios from 'axios';
import { useRouter } from 'next/router';
import { FormEvent } from 'react';
import { useEffect, useState } from 'react';

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
  const router = useRouter();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('auth');
    if (loggedInUser) {
      router.push('auth/dashboard');
    }
  }, [router]);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await axios.post('/api/login', {
      email,
      password,
    });

    if (res.data.email) {
      setColor('text-green bg-green-100  ');
      setAlert('Loged in');
      localStorage.setItem('auth', JSON.stringify({ email }));
      router.push('./dashboard');
    } else {
      setColor(
        'p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800'
      );
      setAlert(res.data.message);
    }
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
              <div>
                <SubmitButton title='Login' />
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

                {alert && <Alert title={alert} color={color} />}

                <button
                  type='submit'
                  className='mt-4 w-full rounded bg-blue-500 py-2 text-center text-white hover:bg-blue-900'
                >
                  Login
                </button>
              </form>
            </section>
          </main>
        </div>
      </div>
    </Layout>
  );
}
