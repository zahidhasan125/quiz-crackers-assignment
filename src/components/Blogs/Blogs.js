import { Accordion } from 'flowbite-react';
import React from 'react';

const Blogs = () => {
  return (
    <div>
      <h3 className='text-3xl text-center font-semibold text-orange-600 underline mb-4'>Asked Questions & Answers</h3>
      <Accordion>
        <Accordion.Panel>
          <Accordion.Title>
            <p className='text-xl font-semibold'>Question 1: What is the purpose of React Router?</p>
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-lg font-semibold text-gray-800 dark:text-gray-400">
              The main purpose of React is to visualize the needed components in anywhere a user interact, client-side routing, allows us to build a Single Page Application. For this kind of Dynamic Routing, Developers uses React Router. React Router uses component structure to call components, which display the components with appropriate information.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
          <p className='text-xl font-semibold'>Question 2: How Does Context API works?</p>
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 font-semibold text-gray-500 dark:text-gray-400">
              ...
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
          <p className='text-xl font-semibold'>Question 3: Describe useRef() .</p>
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 font-semibold text-gray-500 dark:text-gray-400">
              ...
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Blogs;