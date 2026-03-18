import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <a href="#" className="logo" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }}>
            Nova<span>Core</span>.
          </a>
          <p className="footer-desc">Премиальные цифровые решения для дальновидных брендов.</p>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h4>Компания</h4>
            <a href="#about">О нас</a>
            <a href="#careers">Карьера</a>
            <a href="#news">Новости</a>
          </div>
          <div className="link-group">
            <h4>Услуги</h4>
            <a href="#services">Веб-разработка</a>
            <a href="#services">Сложные системы</a>
            <a href="#services">UI/UX Дизайн</a>
          </div>
          <div className="link-group">
            <h4>Связь</h4>
            <a href="https://t.me/example" target="_blank" rel="noreferrer">Telegram</a>
            <a href="https://vk.com/example" target="_blank" rel="noreferrer">ВКонтакте</a>
            <a href="https://dribbble.com/example" target="_blank" rel="noreferrer">Dribbble</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} Агентство NovaCore. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
