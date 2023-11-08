import { createBrowserRouter } from "react-router-dom";

import { MainLayout } from "~/layouts/main-layout";
import { DirectPage } from "~/pages/direct-page";
import { ExplorePage } from "~/pages/explore-page";
import { HomePage } from "~/pages/home-page";
import { ProfilePage } from "~/pages/profile-page";

export const routes = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "search",
        element: <h1>adsasd element</h1>,
      },
      {
        path: "explore",
        element: <ExplorePage />,
      },
      {
        path: "direct/inbox/",
        element: <DirectPage />,
      },
      {
        path: "/:currentUser",
        element: <ProfilePage />,
      },
    ],
  },
]);
