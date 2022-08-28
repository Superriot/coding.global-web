/* eslint-disable no-console */
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FormEvent, useEffect, useState } from 'react';

import Input from '@/components/auth/Input';
import SubmitButton from '@/components/auth/SubmitButton';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import Alert from '../../components/elements/Alert';

export default function Register() {
  const [email, setEmail] = useState('don@don.com');
  const [password, setPassword] = useState('don123');
  const [confirmPassword, setConfirmedPassword] = useState('don123');
  const [color, setColor] = useState('');
  const [alert1, setAlert] = useState('');
  const router = useRouter();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('auth');
    if (loggedInUser) {
      router.push('auth/dashboard');
    }
  }, [router]);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return alert('Password is not compare');
    }

    const res = await axios.post('/api/register', {
      email,
      password,
      confirmPassword,
    });

    if (res.data.email) {
      setColor('text-green bg-green-100');
      setAlert('Created new User');
    } else {
      setColor('p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg ');
      setAlert(res.data.message);
    }

    console.log(res.data);
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
                <SubmitButton title='Register' />
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
                <Input
                  name='Confirm password'
                  type='password'
                  value={confirmPassword}
                  onChange={setConfirmedPassword}
                />
                {alert1 && <Alert title={alert1} color={color} />}

                <button
                  type='submit'
                  className='mt-3 w-full rounded bg-blue-500 py-2 text-center text-white hover:bg-blue-900'
                  value='submit'
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
