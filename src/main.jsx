import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './layout/Root.jsx';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';
import HomePage from './Pages/homePage/HomePage.jsx';
import FriendsDetails from './Pages/friendsDetails/FriendsDetails.jsx';
import TimelineContext from './context/TimelineContext.jsx';
import timeLine from './componants/timeLine/TimeLine.jsx';


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
        path:"/Friends/:friendId",
        loader:async({params})=>{
          const res =await fetch('/data.json');
          const data = await res.json();
          const users=data.find(iteam=>iteam.id==params.friendId);
          return users;
        },
        Component:FriendsDetails,
      },
      {
        path:"/timeLine",
        Component:timeLine,
      }
     
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineContext>

    <RouterProvider router={router} />,
    </TimelineContext>
  </StrictMode>,
);
