import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar'
import Nosotros from './components/Nosotros/Nosotros'
import Galeria from './components/Galeria/Galeria'
import Catalogo from './components/Catalogo/Catalogo';
import Footer from './components/Footer/Footer'
import Contacto from './components/Contacto/Contacto';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Hero />
      </header>
      <main>
        <Nosotros />
        <Galeria />
        <Catalogo />
        <Contacto />
        <Footer />
      </main>
    </div>
  );
}

export default App;
