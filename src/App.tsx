import Intro from './components/Intro/Intro';
import Projects from './components/Projects/Projects';
import TechStack from './components/TechStack/TechStack';
import Contact from './components/Contact/Contact';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const toggleTheme = () => {
    if (theme === 'dark') setTheme('light');
    else setTheme('dark');
  };
  
  return (
    <div className={`App ${theme}`}>
      <Intro toggleTheme={toggleTheme} />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
