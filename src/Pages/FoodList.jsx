import Fooditem from '../Components/Fooditem';
import foods from '../Data/Foods';
import { useMemo, useState } from 'react';

function FoodList({ addToCart, toggleFavorite, favorites = [] }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('none');

  const categories = useMemo(() => ['all', ...Array.from(new Set(foods.map(f => f.category).filter(Boolean)))], []);

  const filtered = useMemo(() => {
    let list = foods.slice();
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(f => f.name.toLowerCase().includes(q) || (f.category || '').toLowerCase().includes(q));
    }
    if (category !== 'all') list = list.filter(f => f.category === category);
    if (sort === 'asc') list.sort((a,b)=>a.price-b.price);
    if (sort === 'desc') list.sort((a,b)=>b.price-a.price);
    return list;
  }, [query, category, sort]);

  return (
    <section className="container">
      <h1>Popular Foods</h1>

      <div className="list-controls">
        <input placeholder="Search foods..." value={query} onChange={e=>setQuery(e.target.value)} />
        <select value={category} onChange={e=>setCategory(e.target.value)}>
          {categories.map(c=> <option key={c} value={c}>{c}</option>)}
        </select>
        <select value={sort} onChange={e=>setSort(e.target.value)}>
          <option value="none">Sort</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      <div className="food-grid">
        {filtered.map((f) => (
          <Fooditem key={f.id} food={f} addToCart={addToCart} toggleFavorite={toggleFavorite} favorited={favorites.includes(f.id)} />
        ))}
      </div>
    </section>
  );
}

export default FoodList;
