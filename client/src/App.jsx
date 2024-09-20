import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './components/Home';
import InstagramTask from './components/Instagram/InstagramTask';
import FacebookTask from './components/Facebook/FacebookTask';
import TwitterTask from './components/Twitter/TwitterTask';
import YoutubeTask from './components/Youtube/YoutubeTask';
import TelegramTask from './components/Telegram/TelegramTask';
import LinkedinTask from './components/Linkedin/LinkedinTask';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/instagram",
    element: <InstagramTask />,
  },
  {
    path: "/facebook",
    element: <FacebookTask />,
  },
  {
    path: "/twitter",
    element: <TwitterTask />,
  },
  {
    path: "/youtube",
    element: <YoutubeTask />,
  },
  {
    path: "/telegram",
    element: <TelegramTask />,
  },
  {
    path: "/linkedin",
    element: <LinkedinTask />,
  },
  
]);

function App() {
  return (
    <>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </>
  );
}

export default App;

