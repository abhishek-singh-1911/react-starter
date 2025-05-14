import { type RouteObject, useParams, useNavigate } from 'react-router-dom';
import User from '@pages/User/User';
import Counter from '@pages/Counter/Counter';
import NotFound from '@pages/NotFound/NotFound';
import ThemeSwitch from '@pages/ThemeSwitch/ThemeSwitch';

// Define our custom RouteObject type
export type CustomRouteObject = RouteObject & {
  meta?: {
    requiresAuth?: boolean;
    // Add other custom meta properties here if needed
  };
};

// Define your route objects using the CustomRouteObject type
export const publicRoutes: CustomRouteObject[] = [
  { path: '/', element: <Counter /> },
  { path: '/users/:id', element: <User />, meta: { requiresAuth: true } }, // Now 'meta' is allowed
  { path: '/themes', element: <ThemeSwitch /> },
  { path: '*', element: <NotFound /> },
];

// Custom hook to get route parameters with type safety
export function useRouteParams<T extends Record<string, string | undefined>>(): T {
  return useParams<T>() as T;
}

// Custom hook for navigation with optional parameters
export function useRouterNavigate() {
  const navigate = useNavigate();

  return (
    (to: string, options?: { replace?: boolean; state?: unknown }) => {
      navigate(to, options);
    }
  );
}

// Define the expected parameters for this route
export type UserRouteParams = {
  [key: string]: string | undefined;
  id: string;
};