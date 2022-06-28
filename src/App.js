
import './App.css';
import Factorial from './components/factorial';
import Prime from './components/prime';
import City from './components/cities';
import Bname from './components/Bname';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Factorial />
        <Prime />
        <City />
        <Bname />
      </header>
    </div>
  );
}

export default App;
