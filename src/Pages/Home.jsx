import { useEffect } from 'react';
import { Link } from "react-router-dom";

function Home() {
    useEffect(() => {
        document.body.classList.add('home-page');
        return () => document.body.classList.remove('home-page');
    }, []);

    return (
        <section className="home container">
            <div className="hero-banner">
                <div className="hero-content">
                    <p className="eyebrow">"Every Bite Brings Happiness"</p>
                    <h1>Welcome to Foodie</h1>
                    <p className="lead">Discover delicious dishes from your favorite restaurants and have them delivered straight to your doorstep. Whether you're craving pizza, burgers, biryani, desserts, or healthy meals, Foodie brings the best flavors to you with lightning-fast delivery.</p>
                    <div style={{display:'flex',gap:12,marginTop:18}}>
                        <Link to="/foods"><button>Order Now</button></Link>
                        <Link to="/cart"><button className="secondary">View Cart</button></Link>
                    </div>
                </div>
                <div className="hero-image" aria-hidden="true" />
            </div>
        </section>
    );
}

export default Home;