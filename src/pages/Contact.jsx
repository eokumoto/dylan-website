// src/pages/Contact.jsx
function Contact() {
  return (
    <main className="page">
      <section className="section contact-section">
        <h1 className="page-title">Contact</h1>

        <p className="contact-intro">
          For further inquiries, please get in touch.
        </p>

        <div className="contact-list">
          <div className="contact-item">
            <span className="contact-label">Email</span>
            <a href="mailto:dtawata@calpoly.edu">
              dtawata@calpoly.edu
            </a>
          </div>

          {/* Optional extra rows if you want them later */}
          {/* 
          <div className="contact-item">
            <span className="contact-label">Phone</span>
            <span>+1 (000) 000-0000</span>
          </div>

          <div className="contact-item">
            <span className="contact-label">Instagram</span>
            <a href="https://instagram.com/username" target="_blank" rel="noreferrer">
              @username
            </a>
          </div>
          */}
        </div>
      </section>
    </main>
  );
}

export default Contact;
