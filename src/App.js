import './App.css';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Planes from './components/Plans';
import Search from './components/Search';

function App() {
  return (
    <div className="App text-white">
      <Header />
      <Hero />
      <Experience />
      <Search />
      <Planes/>
      <Footer />
    </div>
  );
}

export default App;
