import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ChildDataProvider } from './contexts/ChildDataContext';
import { AppLayout } from './components/layout/AppLayout';
import {
  LoginPage,
  HomePage,
  HistoryPage,
  WeekDetailPage,
  SettingsPage
} from './pages';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to="/login" replace />;
}

function AppRoutes() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route
        path="/login"
        element={user ? <Navigate to="/" replace /> : <LoginPage />}
      />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <ChildDataProvider>
              <AppLayout>
                <HomePage />
              </AppLayout>
            </ChildDataProvider>
          </PrivateRoute>
        }
      />
      <Route
        path="/history"
        element={
          <PrivateRoute>
            <ChildDataProvider>
              <AppLayout>
                <HistoryPage />
              </AppLayout>
            </ChildDataProvider>
          </PrivateRoute>
        }
      />
      <Route
        path="/week/:weekStart"
        element={
          <PrivateRoute>
            <ChildDataProvider>
              <AppLayout>
                <WeekDetailPage />
              </AppLayout>
            </ChildDataProvider>
          </PrivateRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <PrivateRoute>
            <ChildDataProvider>
              <AppLayout>
                <SettingsPage />
              </AppLayout>
            </ChildDataProvider>
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
