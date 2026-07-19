import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Checkout({ cart = [], totalPrice = '0.00', clearCart }) {
  const [form, setForm] = useState({ name: '', mobile: '', address: '', payment: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!/^[0-9]{10}$/.test(form.mobile.trim())) e.mobile = 'Enter a valid 10-digit mobile number';
    if (!form.address.trim()) e.address = 'Delivery address is required';
    if (!form.payment) e.payment = 'Select a payment method';
    return e;
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const efs = validate();
    setErrors(efs);
    if (Object.keys(efs).length > 0) return;

    // successful submission
    setSubmitted(true);
    if (typeof clearCart === 'function') clearCart();

    // optionally navigate after a short delay
    setTimeout(() => navigate('/'), 3000);
  };

  if (submitted) {
    return (
      <section className="container checkout-page">
        <div className="order-confirmation">
          <h1>Thank you for your order, {form.name || 'Guest'}!</h1>
          <p>Your order has been placed. We'll notify you on {form.mobile} with updates.</p>
          <p>Delivery to: {form.address}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="container checkout-page">
      <h1>Checkout</h1>

      <div style={{ display: 'flex', gap: 24, marginTop: 18, alignItems: 'flex-start' }}>
        <form onSubmit={handleSubmit} style={{ flex: 1, maxWidth: 680 }}>
          <label style={{display:'block',marginBottom:6}}>Customer Name *</label>
          <input name="name" value={form.name} onChange={handleChange} style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #e6e6e6',marginBottom:10}} />
          {errors.name && <div className="field-error">{errors.name}</div>}

          <label style={{display:'block',marginBottom:6}}>Mobile Number *</label>
          <input name="mobile" value={form.mobile} onChange={handleChange} placeholder="10-digit mobile" style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #e6e6e6',marginBottom:10}} />
          {errors.mobile && <div className="field-error">{errors.mobile}</div>}

          <label style={{display:'block',marginBottom:6}}>Delivery Address *</label>
          <textarea name="address" value={form.address} onChange={handleChange} rows={4} style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #e6e6e6',marginBottom:10}} />
          {errors.address && <div className="field-error">{errors.address}</div>}

          <label style={{display:'block',marginBottom:6}}>Payment Method *</label>
          <select name="payment" value={form.payment} onChange={handleChange} style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #e6e6e6',marginBottom:10}}>
            <option value="">-- choose --</option>
            <option value="cod">Cash on Delivery</option>
            <option value="card">Card / Debit</option>
            <option value="upi">UPI</option>
          </select>
          {errors.payment && <div className="field-error">{errors.payment}</div>}

          <div style={{display:'flex',gap:12,marginTop:8}}>
            <button type="submit" style={{background:'var(--brand)',color:'#fff',padding:'10px 16px',borderRadius:8,border:'none'}}>Place Order</button>
            <button type="button" onClick={() => navigate('/cart')} style={{padding:'10px 14px',borderRadius:8,border:'1px solid #eee'}}>Back to Cart</button>
          </div>
        </form>

        <aside style={{width:320}}>
          <div style={{padding:18,borderRadius:12,background:'#fff',boxShadow:'0 6px 18px rgba(0,0,0,0.04)'}}>
            <p className="eyebrow">Order Summary</p>
            <div style={{marginTop:8}}>
              {cart.length === 0 ? <p>Your cart is empty</p> : (
                <ul style={{listStyle:'none',padding:0,margin:0}}>
                  {cart.map(i=> <li key={i.id} style={{padding:'8px 0',borderBottom:'1px solid #f2f2f2'}}>{i.name || i.title} x{i.quantity}</li>)}
                </ul>
              )}
            </div>
            <div className="summary-row" style={{marginTop:12}}>
              <span>Total</span>
              <strong>${totalPrice}</strong>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Checkout;
