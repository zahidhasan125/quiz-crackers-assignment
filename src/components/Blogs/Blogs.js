import { Accordion } from 'flowbite-react';
import React from 'react';

const Blogs = () => {
  return (
    <div className='mx-10'>
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
            <div className="mb-2 font-semibold text-gray-800 dark:text-gray-400">
              Context API used to share data with multiple components, without having to pass data through props manually by props Drilling. At first we need to do is create a context using the createContext function from React to start with the Context API.
              <p><br /><code>const ExampleContext = createContext([]);</code></p>
              <br />
              The createContext function accepts an initial value, but this initial value is not required.
              <br />
              The Provider component is going to be used to wrap the components that are going to have access to our context.

              <br />The Provider component receives a prop called value, which can be accessed from all the components that are wrapped inside Provider, and it will be responsible to grant access to the context data.
              <p>The useContext hook receives a single argument, which is the context that you want to have access to. The useContext is way better and cleaner than the Consumer component—we can easily understand what’s going on and increase the maintainability of our application.</p>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>
            <p className='text-xl font-semibold'>Question 3: Describe useRef() .</p>
          </Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 font-semibold text-gray-800 dark:text-gray-400">
              The useRef Hook allows to store a mutable value that does not cause a re-render when updated.
              It can be used to access a DOM element directly. If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. To avoid this, we can use the useRef Hook.
              <br />
              useRef() only returns one item. It returns an Object called current.
              When we initialize useRef we set the initial value: useRef(0).
              It's like doing this: const count = useRef(0). We can access the count by using count.current.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  );
};

export default Blogs;