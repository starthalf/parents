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
            <AppLayout>
              <HomePage />
            </AppLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/history"
        element={
          <PrivateRoute>
            <AppLayout>
              <HistoryPage />
            </AppLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/week/:weekStart"
        element={
          <PrivateRoute>
            <AppLayout>
              <WeekDetailPage />
            </AppLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <PrivateRoute>
            <AppLayout>
              <SettingsPage />
            </AppLayout>
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
        <ChildDataProvider>
          <AppRoutes />
        </ChildDataProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}