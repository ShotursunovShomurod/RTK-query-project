import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
import Suspense from "../utils";

const Home = lazy(() => import("./home/Home"));
const Auth = lazy(() => import("./auth/Auth"));
const Otp = lazy(() => import("./auth/otp/Otp"));
const Signup = lazy(() => import("./auth/sign-up/signup"));
const Signin = lazy(() => import("./auth/sign-in/signin"));

const RouteController = () => {
  return useRoutes([
    {
      path: "/",
      element: (
        <Suspense>
          <Home />
        </Suspense>
      ),
    },
    {
      path: "/auth",
      element: (
        <Suspense>
          <Auth />
        </Suspense>
      ),
      children: [
        {
          path: "/auth/otp",
          element: (
            <Suspense>
              <Otp />
            </Suspense>
          ),
        },
        {
          path: "/auth/sign-in",
          element: (
            <Suspense>
              <Signin />
            </Suspense>
          ),
        },
        {
          path: "/auth/sign-up",
          element: (
            <Suspense>
              <Signup />
            </Suspense>
          ),
        },
      ],
    },
  ]);
};

export default RouteController;
