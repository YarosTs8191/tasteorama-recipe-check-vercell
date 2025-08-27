import { useEffect, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Layout/Layout";
import PublicRoute from "../PublicRoute";
import PrivateRoute from "../PrivateRoute";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { refreshUser } from "../../redux/auth/operations";

const MainPage = lazy(() => import("../../pages/MainPage/MainPage"));
const RecipeViewPage = lazy(() =>
  import("../../pages/RecipeViewPage/RecipeViewPage")
);
const AddRecipePage = lazy(() =>
  import("../../pages/AddRecipePage/AddRecipePage")
);
const ProfilePage = lazy(() => import("../../pages/ProfilePage/ProfilePage"));
const AuthPage = lazy(() => import("../../pages/AuthPage/AuthPage"));
const RegisterPage = lazy(() => import("../../pages/AuthPage/RegisterPage"));
const NotFound = lazy(() => import("../../components/NotFound/NotFound"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return <p>Loading...</p>;
  }

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

          <Route
            path="auth/register"
            element={
              <PublicRoute restricted={true}>
                <RegisterPage />
              </PublicRoute>
            }
          />

          {/* Приватні маршрути */}
          <Route
            path="/auth/logout"
            element={
              <PrivateRoute redirectTo="/auth/login" component={<AuthPage />} />
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
