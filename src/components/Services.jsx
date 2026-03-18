import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Разработка ПО",
      description: "Масштабируемая и безопасная enterprise-архитектура на современных фреймворках для решения сложных бизнес-задач.",
      icon: "⚡"
    },
    {
      id: 2,
      title: "UI/UX Дизайн",
      description: "Ориентированные на пользователя интерфейсы, которые вовлекают аудиторию и повышают конверсию цифровых продуктов.",
      icon: "🎨"
    },
    {
      id: 3,
      title: "Облачная Инфраструктура",
      description: "Надежные облачные решения с гарантией доступности 99.9%, масштабируемостью и высокой безопасностью.",
      icon: "☁️"
    },
    {
      id: 4,
      title: "ИИ и Машинное Обучение",
      description: "Интеграция интеллектуальной автоматизации и предиктивных моделей для конкурентного преимущества вашего бизнеса.",
      icon: "🧠"
    }
  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">Наша <span className="text-gradient">Экспертиза</span></h2>
          <p className="section-subtitle">
            Мы предоставляем полный цикл цифровой разработки и дизайна для стартапов и корпораций.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="glass-card service-card animate-fade-in-up" 
              style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="service-link">
                Узнать больше <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
