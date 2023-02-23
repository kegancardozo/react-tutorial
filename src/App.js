import Navbar from './Navbar'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './Create'

function App() {
  // React tries to convert variables to string - but can't for booleans and objects
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/create" element={ <Create />} />
      </Routes>
    </div></div>
    </Router>
  );
}

export default App;
