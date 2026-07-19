import './App.css';
import { lazy, Suspense, useCallback, useMemo, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Loading from './Components/Loading';
import Footer from './Components/Footer';
import Toasts from './Components/Toast';

const Home = lazy(() => import('./Pages/Home'));
const FoodList = lazy(() => import('./Pages/FoodList'));
const Cart = lazy(() => import('./Pages/Cart'));
const Checkout = lazy(() => import('./Pages/Checkout'));
const Contact = lazy(() => import('./Pages/Contact'));
const OrderTracking = lazy(() => import('./Pages/OrderTracking'));
const Favorites = lazy(() => import('./Pages/Favorites'));

function App() {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [toasts, setToasts] = useState([]);

  const addToCart = useCallback((food) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === food.id);
      if (existingItem) {
        return prevCart.map((item) => (item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item));
      } else {
        return [...prevCart, { ...food, quantity: 1 }];
      }
    });
    // small toast
    setToasts((t) => [...t, { id: Date.now(), message: `Added ${food.name} to cart`, type: 'success' }]);
  }, []);

  const removeFromCart = useCallback((id) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === id);
      if (!existingItem) return prevCart;
      if (existingItem.quantity > 1) {
        return prevCart.map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item));
      }
      return prevCart.filter((item) => item.id !== id);
    });
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const toggleFavorite = useCallback((id) => {
    setFavorites((prev) => {
      const exists = prev.includes(id);
      const next = exists ? prev.filter((i) => i !== id) : [...prev, id];
      setToasts((t) => [...t, { id: Date.now(), message: exists ? 'Removed from favorites' : 'Added to favorites', type: 'info' }]);
      return next;
    });
  }, []);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((d) => {
      const next = !d;
      try { localStorage.setItem('theme', next ? 'dark' : 'light'); } catch (e) {}
      document.documentElement.classList.toggle('dark', next);
      return next;
    });
  }, []);

  const removeToast = useCallback((id) => setToasts((t) => t.filter(x => x.id !== id)), []);

  const totalPrice = useMemo(() => cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2), [cart]);
  const cartCount = useMemo(() => cart.reduce((s, i) => s + i.quantity, 0), [cart]);

  // persist/load cart, favorites and theme
  useEffect(() => {
    try {
      const raw = localStorage.getItem('cart');
      if (raw) setCart(JSON.parse(raw));
      const fav = localStorage.getItem('favorites');
      if (fav) setFavorites(JSON.parse(fav));
      const theme = localStorage.getItem('theme');
      if (theme === 'dark') { setDarkMode(true); document.documentElement.classList.add('dark'); }
    } catch (e) {}
  }, []);

  useEffect(() => { try { localStorage.setItem('cart', JSON.stringify(cart)); } catch (e) {} }, [cart]);
  useEffect(() => { try { localStorage.setItem('favorites', JSON.stringify(favorites)); } catch (e) {} }, [favorites]);

  return (
    <div className="App">
      <Navbar cartCount={cartCount} favoritesCount={favorites.length} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/foods" element={<FoodList addToCart={addToCart} toggleFavorite={toggleFavorite} favorites={favorites} />} />
          <Route path="/favorites" element={<Favorites addToCart={addToCart} toggleFavorite={toggleFavorite} favorites={favorites} />} />
          <Route path="/cart" element={<Cart cart={cart} totalPrice={totalPrice} removeFromCart={removeFromCart} clearCart={clearCart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} totalPrice={totalPrice} clearCart={clearCart} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tracking" element={<OrderTracking />} />
        </Routes>
      </Suspense>
      
      {/* Footer */}
      <Footer />
      <Toasts toasts={toasts} removeToast={removeToast} />
    </div>
  );
}

export default App;
