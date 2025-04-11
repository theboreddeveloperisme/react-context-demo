import { useContext } from 'react';
import { ThemeContext } from '../context';

const ComponentA = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <h3>Component A</h3>
      <button onClick={toggleTheme}>
        Toggle Theme (currently: {theme})
      </button>
    </div>
  );
};

export default ComponentA;
