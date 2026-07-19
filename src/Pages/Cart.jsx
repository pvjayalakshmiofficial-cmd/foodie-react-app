import { useNavigate } from 'react-router-dom';

function Cart({ cart, totalPrice, removeFromCart, clearCart }) {
    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/checkout');
    };

    return (
        <section className="container cart-page">
            <div className="cart-header">
                <div>
                    <p className="eyebrow">Your Order</p>
                    <h1>Food Cart</h1>
                </div>
                <p className="cart-count">{cart.length} item{cart.length === 1 ? '' : 's'}</p>
            </div>

            {cart.length === 0 ? (
                <div className="cart-empty">
                    <p>Your cart is empty. Browse the menu and add your favorites.</p>
                </div>
            ) : (
                <div className="cart-grid">
                    <div className="cart-items">
                        {cart.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <div>
                                    <h3>{item.name || item.title}</h3>
                                    <p className="cart-item-meta">Qty: {item.quantity} &middot; ${item.price.toFixed(2)}</p>
                                </div>
                                <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>

                    <aside className="cart-summary">
                        <div>
                            <p className="eyebrow">Order summary</p>
                            <h2>Total</h2>
                        </div>
                        <div className="summary-row">
                            <span>Subtotal</span>
                            <strong>${totalPrice}</strong>
                        </div>
                        <button className="checkout-button" onClick={handleCheckout}>Proceed to Checkout</button>
                    </aside>
                </div>
            )}
        </section>
    );
}

export default Cart;
