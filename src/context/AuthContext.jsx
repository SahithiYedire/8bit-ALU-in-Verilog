import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('ybn-user') || 'null');
      return saved;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) localStorage.setItem('ybn-user', JSON.stringify(user));
    else localStorage.removeItem('ybn-user');
  }, [user]);

  const login = ({ email, password, name }) => {
    const role = email.toLowerCase().includes('admin') ? 'admin' : 'customer';
    const nextUser = {
      name: name || 'Lovely Customer',
      email,
      role,
      password
    };
    setUser(nextUser);
    return nextUser;
  };

  const logout = () => setUser(null);

  const value = useMemo(() => ({ user, login, logout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside AuthProvider');
  return context;
}
