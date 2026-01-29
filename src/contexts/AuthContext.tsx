import { createContext, useContext, useState, type ReactNode } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const stored = localStorage.getItem('parent_user');
    return stored ? JSON.parse(stored) : null;
  });
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, _password: string) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const mockUser: User = {
      id: '1',
      email,
      name: '민지 부모님'
    };

    localStorage.setItem('parent_user', JSON.stringify(mockUser));
    setUser(mockUser);
    setIsLoading(false);
  };

  const logout = () => {
    localStorage.removeItem('parent_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
