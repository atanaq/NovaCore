import './Hero.css';

const Hero = () => {
  return (
    <section className="hero section">
      {/* Background elements */}
      <div className="bg-glow bg-glow-blue hero-glow-1"></div>
      <div className="bg-glow bg-glow-purple hero-glow-2"></div>
      
      <div className="container hero-container">
        <div className="hero-content animate-fade-in-up">
          <div className="hero-badge">Новое: Интеграция с Nova AI ✨</div>
          <h1 className="hero-title">
            Проектируем <span className="text-gradient">Цифровое Будущее</span> для Бизнеса
          </h1>
          <p className="hero-subtitle">
            NovaCore — это студия цифровых продуктов премиум-класса. Мы создаем масштабируемые SaaS-решения, высоконагруженные веб-приложения и потрясающие интерфейсы для роста вашей компании.
          </p>
          <div className="hero-cta-group">
            <a href="#contact" className="btn btn-primary">Начать Проект</a>
            <a href="#services" className="btn btn-outline">Наши Услуги</a>
          </div>
          
          <div className="hero-stats">
            <div className="stat-item">
              <h3>$2M+</h3>
              <p>Прибыли Клиентов</p>
            </div>
            <div className="stat-item">
              <h3>99.9%</h3>
              <p>Надежность Систем</p>
            </div>
          </div>
        </div>
        
        <div className="hero-visual animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {/* Abstract visual representation of a dashboard/app */}
          <div className="glass-card hero-dashboard">
            <div className="dash-header">
              <span className="dot dot-close"></span>
              <span className="dot dot-min"></span>
              <span className="dot dot-max"></span>
            </div>
            <div className="dash-body">
              <div className="dash-sidebar"></div>
              <div className="dash-main">
                <div className="dash-widget skeleton"></div>
                <div className="dash-row">
                  <div className="dash-widget half skeleton"></div>
                  <div className="dash-widget half skeleton"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
