import { Accordion } from 'flowbite-react';
import React from 'react';

const Blogs = () => {
    return (
        <div>
            <Accordion>
  <Accordion.Panel>
    <Accordion.Title>
      What is the purpose of React Router?
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
       ...
      </p>
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
      How Does Context API works?
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        ...
      </p>
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
    <Accordion.Title>
      Describe useRef() ?
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
        ...
      </p>      
    </Accordion.Content>
  </Accordion.Panel>
</Accordion>
        </div>
    );
};

export default Blogs;