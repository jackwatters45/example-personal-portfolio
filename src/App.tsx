import './App.css';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import TechStack from './components/TechStack';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <TechStack />
        <Projects />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
