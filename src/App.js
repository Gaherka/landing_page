import './App.css';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Planes from './components/Plans';
import Search from './components/Search';
import Desarrolladoras from './components/Desarolladoras';

function App() {
  return (
    <div className="App text-white">
      <Header />
      <Hero />
      <Experience />
      <Search />
      <Planes/>
      <Desarrolladoras/>
      <Footer />
    </div>
  );
}

export default App;
