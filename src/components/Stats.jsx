import './Stats.css';

const Stats = () => {
  return (
    <section id="about" className="section stats-section">
      <div className="container stats-container">
        <div className="stats-content animate-fade-in-up">
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
            Нам <span className="text-gradient">Доверяют</span> Лидеры
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'left', margin: '0 0 40px' }}>
            Более десяти лет мы являемся партнерами амбициозных стартапов и компаний из списка Fortune 500, создавая значимые цифровые продукты. Наш подход сочетает инженерную точность с совершенством дизайна.
          </p>
          <ul className="stats-list">
            <li>✓ Сертификация ISO 27001</li>
            <li>✓ Методология Agile</li>
            <li>✓ Награды за Лучший Дизайн</li>
          </ul>
        </div>
        
        <div className="stats-grid">
          <div className="glass-card stat-box animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-gradient">250+</h3>
            <p>Проектов Выполнено</p>
          </div>
          <div className="glass-card stat-box animate-fade-in-up" style={{ animationDelay: '0.2s', transform: 'translateY(20px)' }}>
            <h3 className="text-gradient">40+</h3>
            <p>Крупных Клиентов</p>
          </div>
          <div className="glass-card stat-box animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-gradient">15+</h3>
            <p>Наград Получено</p>
          </div>
          <div className="glass-card stat-box animate-fade-in-up" style={{ animationDelay: '0.4s', transform: 'translateY(20px)' }}>
            <h3 className="text-gradient">8M</h3>
            <p>Активных Пользователей</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
