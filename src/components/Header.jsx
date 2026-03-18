import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled glass' : ''}`}>
      <div className="container header-container">
        <a href="#" className="logo">
          Nova<span>Core</span>.
        </a>
        
        <nav className="nav-links">
          <a href="#services">Услуги</a>
          <a href="#about">О компании</a>
          <a href="#contact">Контакты</a>
        </nav>
        
        <div className="header-actions">
          <a href="#contact" className="btn btn-primary">Обсудить проект</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
