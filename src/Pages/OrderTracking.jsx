import React, { useState } from 'react';

function OrderTracking(){
  const [orderNum, setOrderNum] = useState('');
  const [status, setStatus] = useState(null);

  const checkStatus = (e) => {
    e.preventDefault();
    if(!orderNum) return;
    // mock statuses based on last digit
    const last = orderNum.trim().slice(-1);
    const map = {
      '0':'Preparing', '1':'Preparing','2':'Out for delivery','3':'Out for delivery','4':'Delivered','5':'Delivered','6':'Preparing','7':'Preparing','8':'Out for delivery','9':'Delivered'
    };
    setStatus(map[last] || 'Preparing');
  }

  return (
    <section className="container" style={{padding:40}}>
      <h1>Order Tracking</h1>
      <form onSubmit={checkStatus} style={{marginTop:18, display:'flex', gap:12, alignItems:'center'}}>
        <input placeholder="Enter order number" value={orderNum} onChange={(e)=>setOrderNum(e.target.value)} style={{padding:10,borderRadius:8,border:'1px solid #e6e6e6',flex:1}} />
        <button type="submit" style={{background:'var(--brand)',color:'#fff',padding:'10px 14px',borderRadius:8,border:'none'}}>Check</button>
      </form>

      {status && (
        <div style={{marginTop:18, padding:18, borderRadius:12, background:'#fff'}}>
          <p><strong>Order {orderNum}</strong></p>
          <p>Status: <strong>{status}</strong></p>
        </div>
      )}
    </section>
  );
}

export default OrderTracking;
