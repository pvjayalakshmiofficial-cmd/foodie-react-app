import React, { useEffect } from 'react';

function Toasts({ toasts = [], removeToast }) {
  useEffect(() => {
    const timers = toasts.map(t => {
      const id = setTimeout(() => removeToast(t.id), 3000);
      return id;
    });
    return () => timers.forEach(clearTimeout);
  }, [toasts, removeToast]);

  if (!toasts.length) return null;

  return (
    <div className="toasts-root">
      {toasts.map(t => (
        <div key={t.id} className={`toast ${t.type || 'info'}`} onClick={() => removeToast(t.id)}>
          <div className="toast-message">{t.message}</div>
        </div>
      ))}
    </div>
  );
}

export default Toasts;
