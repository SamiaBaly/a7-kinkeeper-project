import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './layout/Root.jsx';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';
import HomePage from './Pages/homePage/HomePage.jsx';

import FriendsDetails from './Pages/friendsDetails/FriendsDetails.jsx';
import AllFriends from './Pages/allFriends/AllFriends.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: '/allFriends',
        Component: AllFriends,
      },
      {
        path: '/friendsDetails',
        Component: FriendsDetails,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
);
