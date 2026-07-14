import logo from './myimage.png';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <img src={logo} alt="Gabriel Soriano Varona" className="profile-pic" />
        <h1>Gabriel Soriano Varona</h1>
        <p className="subtitle">INF239 | BSIT - MWA</p>
      </header>

      <section className="card">
        <p>Hi! I'm Gabriel Varona, an IT student with a strong interest in web development. My vision is to keep learning new technologies and improve my skills so I can build useful and innovative web applications in the future. I'm excited to continue growing as a developer.</p>
      </section>

      <hr />

      <section className="card">
        <h3>About Me</h3>
        <p><strong>Age:</strong> 21</p>
        <p><strong>Hometown:</strong> Valenzuela City</p>
        <p><strong>Email:</strong> gabrielvarona06@gmail.com </p>
      </section>

      <hr />

      <section className="card">
        <h3>Hobbies</h3>
        <ul>
          <li>1. Online Games</li>
          <li>2. Playing Guitar</li>
          <li>3. Sports</li>
        </ul>
      </section>
  
    </div>
  );
}

export default App;
