import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('ybn-wishlist') || '[]');
      return Array.isArray(saved) ? saved : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('ybn-wishlist', JSON.stringify(items));
  }, [items]);

  const toggleItem = (productId) => {
    setItems((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
    );
  };

  const value = useMemo(() => ({ items, toggleItem }), [items]);

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) throw new Error('useWishlist must be used inside WishlistProvider');
  return context;
}
