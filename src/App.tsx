import './App.css'
import { Routes, Route } from 'react-router-dom';
import { publicRoutes } from '@router/index';
import ProtectedRoute from '@router/ProtectedRoute';


const App = () => {

  return (
    <Routes>
      {publicRoutes.map((route, index) => (
        <Route 
          key={index} 
          path={route.path} element={
            route.meta?.requiresAuth ? (
              <ProtectedRoute requiresAuth={route.meta.requiresAuth}>
                {route.element}
              </ProtectedRoute>
            ) : (
              route.element
            )
          } />
      ))}
      {/* You can add other routes here if needed */}
    </Routes>
  )
};

export default App
