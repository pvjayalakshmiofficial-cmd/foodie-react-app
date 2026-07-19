import {memo} from "react";

function Fooditem({ food, addToCart, toggleFavorite, favorited }) {
    return (
        <article className="food-card" aria-label={food.name}>
            <div className="food-image" style={{ backgroundImage: `url(${food.image})` }}>
                <button className={`fav-btn ${favorited ? 'active' : ''}`} onClick={() => toggleFavorite(food.id)} aria-label="Add to wishlist">{favorited ? '♥' : '♡'}</button>
            </div>
            <div className="food-details">
                <h3>{food.name}</h3>
                <small className="muted">{food.category || ''}</small>
                <p>${food.price.toFixed(2)}</p>

                <div className="food-actions">
                    <button onClick={() => addToCart(food)}>Add to Cart</button>
                    <button className="secondary">Quick View</button>
                </div>
            </div>
        </article>
    );
}

export default memo(Fooditem);