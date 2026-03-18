import { useState } from 'react';
import './CTA.css';

const CTA = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section cta-section">
      <div className="bg-glow bg-glow-purple" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div>
      <div className="container contact-container">
        <div className="cta-content animate-fade-in-up">
          <h2 className="section-title" style={{textAlign: 'left', marginBottom: '24px'}}>
            Готовы <span className="text-gradient">Масштабировать</span> Бизнес?
          </h2>
          <p className="section-subtitle" style={{textAlign: 'left', marginBottom: '40px'}}>
            Давайте обсудим, как NovaCore может помочь вам создать цифровые платформы и продукты следующего поколения. Наши эксперты готовы воплотить ваше видение в реальность.
          </p>
          <div className="contact-info">
            <div className="info-item">
              <h4>Email</h4>
              <p>hello@novacore.ru</p>
            </div>
            <div className="info-item">
              <h4>Телефон</h4>
              <p>+7 (495) 123-45-67</p>
            </div>
            <div className="info-item">
              <h4>Адрес</h4>
              <p>Москва, Пресненская наб., 12</p>
            </div>
          </div>
        </div>
        
        <div className="glass-card form-card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          {submitted ? (
            <div className="success-message">
              <h3>Спасибо за заявку! ✨</h3>
              <p>Мы свяжемся с вами в ближайшее время для обсуждения деталей.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Ваше Имя</label>
                <input 
                  type="text" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Иван Иванов"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="ivan@company.ru"
                />
              </div>
              <div className="form-group">
                <label>О проекте</label>
                <textarea 
                  required 
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Опишите ваши задачи..."
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary form-submit">Отправить Заявку</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTA;
