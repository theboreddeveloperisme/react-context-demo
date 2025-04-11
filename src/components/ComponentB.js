import { useContext } from 'react';
import { ThemeContext } from '../context';

const ComponentB = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h3>Component B</h3>
      <p>Current theme is: {theme}</p>
    </div>
  );
};

export default ComponentB;
