import React, { useState } from 'react';

function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="container" style={{ padding: 40 }}>
      <h1>Contact Us</h1>
      {!sent ? (
        <form onSubmit={handleSubmit} style={{ maxWidth: 680, marginTop: 18 }}>
          <label style={{display:'block',marginBottom:8}}>Name</label>
          <input name="name" value={form.name} onChange={handleChange} required style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #e6e6e6',marginBottom:12}} />

          <label style={{display:'block',marginBottom:8}}>Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #e6e6e6',marginBottom:12}} />

          <label style={{display:'block',marginBottom:8}}>Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} required rows={6} style={{width:'100%',padding:10,borderRadius:8,border:'1px solid #e6e6e6',marginBottom:12}} />

          <div style={{display:'flex',gap:12}}>
            <button type="submit" style={{background:'var(--brand)',color:'#fff',padding:'10px 16px',borderRadius:8,border:'none'}}>Send Message</button>
            <a href="mailto:orders@foodie.com" style={{alignSelf:'center',color:'var(--muted)'}}>Or email orders@foodie.com</a>
          </div>
        </form>
      ) : (
        <div style={{padding:24, borderRadius:12, background:'#fff', boxShadow:'0 8px 20px rgba(0,0,0,0.05)'}}>
          <h2>Thanks — we received your message</h2>
          <p>We'll respond to <strong>{form.email || 'your email'}</strong> shortly.</p>
        </div>
      )}
    </section>
  );
}

export default Contact;
