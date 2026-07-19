import foods from '../Data/Foods';
import Fooditem from '../Components/Fooditem';

function Favorites({ addToCart, toggleFavorite, favorites = [] }){
  const items = foods.filter(f=> favorites.includes(f.id));
  return (
    <section className="container">
      <h1>Your Wishlist</h1>
      {items.length === 0 ? (
        <p>You have no items in your wishlist yet.</p>
      ) : (
        <div className="food-grid">
          {items.map(i=> <Fooditem key={i.id} food={i} addToCart={addToCart} toggleFavorite={toggleFavorite} favorited={favorites.includes(i.id)} />)}
        </div>
      )}
    </section>
  );
}

export default Favorites;
