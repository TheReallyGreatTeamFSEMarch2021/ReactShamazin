import logo from './logo.svg';
import './App.css';
import Shamazin from '../src/components/Shamazin/Shamazin';

function App() {
  return (
    <div className="App">
      <Shamazin/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn ReactFei
        </a>
      </header>
    </div>
  );
}

export default App;
