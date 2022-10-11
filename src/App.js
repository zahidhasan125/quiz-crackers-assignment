import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Quizzes from './components/Quizzes/Quizzes';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './layouts/Main';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Main></Main>,
        loader: async() => fetch('https://openapi.programming-hero.com/api/quiz'),
        errorElement:<ErrorPage></ErrorPage>,
        children: [
          {
            path: '/',
            element: <Topics></Topics>
          },
          {
            path: 'home',
            element: <Topics></Topics>
          },
          {
            path: '/statistics',
            element: <Statistics></Statistics>
          },
          {
            path: '/blogs',
            element: <Blogs></Blogs>
          },
          {
            path: '/about',
            element: <h5>This is About Page</h5>
          },
          {
            path: '/contact',
            element: <h5>This is Contact Page</h5>
          },
          {
            path: '/topic/:topicId',
            loader: async({params})=> fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`),
            element: <Quizzes></Quizzes>
          },
        ]
      }
    ]
  )

  
  return (
    <RouterProvider router={router}>
      <Main></Main>
    </RouterProvider>
  );
}

export default App;
