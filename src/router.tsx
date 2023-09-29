import { RouteObject } from "react-router-dom"
import App from "./App"
import Blog from "./pages/Blog/Blog"
import Home from "./pages/Home/Home"
import Post from "./pages/Post/Post"

export enum RoutePath {
  HOME = "/",
  BLOG = "blog",
  POST = "post",
}

export enum RouteName {
  HOME = "Home",
  BLOG = "Blog",
  POST = "Post",
}

export const Routes = [
  {
    title: RouteName.HOME,
    route: RoutePath.HOME,
  },
  {
    title: RouteName.BLOG,
    route: RoutePath.BLOG,
  },
  {
    title: RouteName.POST,
    route: RoutePath.POST,
  }
]

export const Router: RouteObject[]  = [
    {
      path: RoutePath.HOME,
      element: <App />,
      children: [
        {
          path: RoutePath.HOME,
          element: <Home />
        },
        {
          path: RoutePath.BLOG,
          element: <Blog />
        },
        {
          path: RoutePath.POST,
          element: <Post />
        }
      ]
    },
  ]