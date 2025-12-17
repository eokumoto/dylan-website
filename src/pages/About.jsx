// src/pages/About.jsx
function About() {
  return (
    <main className="page">
      <section className="section about-section">
        <h1 className="page-title">About</h1>

        <div className="about-layout">
          <div className="about-image-wrapper">
            {/* Put an image at public/about.jpg or change the src path */}
            <img src="/about.jpg" alt="DYLAN TAWATA" />
          </div>

          <div className="about-text">
            <p>
              Dylan Tawata is... [insert glaze here].
            </p>
            <p>
              More glaze here.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
