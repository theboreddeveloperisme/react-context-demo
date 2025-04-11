import './App.css';
import { ComponentA, ComponentB } from './components';
import { ThemeProvider } from './context';

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <h2>React Context Demo</h2>
        <ComponentA />
        <ComponentB />
      </div>
    </ThemeProvider>
  );
};

export default App;
