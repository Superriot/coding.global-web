import { Accordion } from 'flowbite-react';
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
          <Accordion>
            <Accordion.Panel>
              <Accordion.Title>Herzlich Willkommen auf unserem Coding Server!</Accordion.Title>
              <Accordion.Content>
                <p className='mb-2 text-gray-500 dark:text-gray-400'>
                Wir sind engagierte Member, die sich beruflich und in ihrer Freizeit mit dem Programmieren und weiteren IT Themen beschäftigen. 
                </p>
                <p className='mb-2 text-gray-500 dark:text-gray-400'>
                Wir sind kein IT-Helpdesk, beantworten aber gerne zwischendurch eine ernst gemeinte und niveauvolle Frage.
                </p>
                <p className='text-gray-500 dark:text-gray-400'>
                Wir mögen es generell nicht so sehr, wenn der einzige Zweck des Aufenthalts der Beantwortung einer Frage dient und der Server danach wieder verlassen wird, sobald die Frage beantwortet wurde.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                Welcome to our Coding Server!
              </Accordion.Title>
              <Accordion.Content>
                <p className='mb-2 text-gray-500 dark:text-gray-400'>
                  We are dedicated members, who are professionally and in their spare time engaged in programming and other IT topics.<br/>
                  Most of the programmers here are trainees, students, apprentices or have started their own business in IT.
                </p>
                <p className='text-gray-500 dark:text-gray-400'>
                We are not an IT helpdesk, but we are happy to answer a serious and level-headed question in between.
We generally don't like it so much when the sole purpose of being here is to answer a question and then leave the server once the question has been answered.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </section>
      </main>
    </Layout>
  );
}
