import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar'
import Home from './Home'

function App() {
  // React tries to convert variables to string - but can't for booleans and objects
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
