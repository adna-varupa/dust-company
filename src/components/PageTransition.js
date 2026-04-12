import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/PageTransition.css';

export default function PageTransition({ children }) {
  const location = useLocation();
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.remove('page-fade-in');
    void el.offsetWidth;
    el.classList.add('page-fade-in');
  }, [location.pathname]);

  return (
    <div ref={ref} className="page-fade-in">
      {children}
    </div>
  );
}
