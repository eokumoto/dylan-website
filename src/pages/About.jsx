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
              Dylan Tawata is a landscape architecture student at California Polytechnic State University in San Luis Obispo. He's originally from Honolulu Hawaii and a high school graduate from Punahou School. In his free time, Dylan enjoys drawing, exploring nature, and spending time with his family, friends, and community.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
