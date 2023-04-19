import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import TechStack from './components/TechStack/TechStack';
import Contact from './components/Contact/Contact';
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));

  return (
    <div className={`App ${theme}`}>
      <Intro toggleTheme={toggleTheme} />
      <Projects />
      <TechStack />
      <Contact />
    </div>
  );
}

export default App;
