import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './components/ErrorPage/ErrorPage';
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
          }
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
