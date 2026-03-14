import './App.css'

function App() {
  return (
    <div className="container">

      {/* HERO SECTION */}
      <header className="hero">
        <h1>Embeddify Solutions</h1>
        <p className="tagline">
          Embedded Systems | IoT | Robotics | AI Projects
        </p>
        <p className="description">
          We help students, researchers and institutions build real-world
          engineering projects in Embedded Systems, IoT, Robotics and AI.
        </p>

        <div className="buttons">
          <button>View Projects</button>
          <button className="secondary">Contact Us</button>
        </div>
      </header>

      {/* SERVICES */}
      <section className="section">
        <h2>Our Services</h2>

        <div className="grid">
          <div className="card">
            <h3>Academic Projects</h3>
            <p>
              Final year projects for B.Tech, M.Tech and Diploma students in
              Embedded Systems, IoT, Robotics and AI.
            </p>
          </div>

          <div className="card">
            <h3>Robotics Training</h3>
            <p>
              Hands-on workshops for schools and colleges covering Arduino,
              ESP32, sensors and real robotics applications.
            </p>
          </div>

          <div className="card">
            <h3>IoT Solutions</h3>
            <p>
              Development of smart systems like smart agriculture,
              home automation, energy monitoring and industrial IoT.
            </p>
          </div>

          <div className="card">
            <h3>Custom Hardware Projects</h3>
            <p>
              Prototype development using Raspberry Pi, ESP32, Arduino and
              other embedded platforms.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section">
        <h2>Featured Projects</h2>

        <div className="grid">

          <div className="card">
            <h3>Smart Agriculture System</h3>
            <p>
              IoT based system for monitoring soil moisture, temperature,
              humidity and automated irrigation.
            </p>
            <button>Download Overview</button>
          </div>

          <div className="card">
            <h3>Gesture Controlled Home Automation</h3>
            <p>
              Control home appliances using hand gestures with embedded AI.
            </p>
            <button>Download Overview</button>
          </div>

          <div className="card">
            <h3>GPS Vehicle Tracking System</h3>
            <p>
              Real-time vehicle tracking using GSM and GPS modules.
            </p>
            <button>Download Overview</button>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <h2>Why Embeddify Solutions</h2>

        <ul className="features">
          <li>Real hardware based projects</li>
          <li>Step-by-step documentation</li>
          <li>Support for students and researchers</li>
          <li>Industry level embedded system development</li>
        </ul>
      </section>

      {/* CONTACT */}
      <section className="section contact">
        <h2>Contact Us</h2>
        <p>Email: embeddifysolutions@gmail.com</p>
        <p>Phone: +91 XXXXX XXXXX</p>

        <p>
          Location: Embeddify Solutions
        </p>

        <iframe
          title="location"
          src="https://maps.google.com/maps?q=embeddify%20solutions&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="300"
        ></iframe>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Embeddify Solutions. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default App
