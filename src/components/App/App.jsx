// App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import PublicRoute from '../PublicRoute';
import PrivateRoute from '../PrivateRoute';

// Lazy load сторінок для code-splitting
import { lazy, Suspense } from 'react';
const MainPage = lazy(() => import('../../pages/MainPage/MainPage'));
const RecipeViewPage = lazy(() => import('../../pages/RecipeViewPage/RecipeViewPage'));
const AddRecipePage = lazy(() => import('../../pages/AddRecipePage/AddRecipePage'));
const ProfilePage = lazy(() => import('../../pages/ProfilePage/ProfilePage'));
const AuthPage = lazy(() => import('../../pages/AuthPage/AuthPage'));
const NotFound = lazy(() => import('../../components/NotFound/NotFound'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Загальний Layout */}
        <Route path="/" element={<Layout />}>

          {/* Публічні маршрути */}
          <Route 
            index 
            element={
              <PublicRoute restricted={false}>
                <MainPage />
              </PublicRoute>
            } 
          />
          <Route 
            path="recipes/:recipeId" 
            element={
              <PublicRoute restricted={false}>
                <RecipeViewPage />
              </PublicRoute>
            } 
          />
          <Route 
            path="auth/login" 
            element={
              <PublicRoute restricted={true}>
                <AuthPage />
              </PublicRoute>
            } 
          />

          {/* Приватні маршрути */}
          <Route
            path="auth/login"
            element={
              <PrivateRoute redirectTo="/" component={<AuthPage />} />
            }
          />

          {/* Catch all 404 */}
          <Route path="*" element={<NotFound />} />

        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
