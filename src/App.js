import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css';
import { ThemeProvider } from './context/themeContext';
import Canvas from "./pages/canvas/Canvas";
import Documentation from "./pages/documentation/Documentation";
import Home from "./pages/home/Home"
import ParticleEffect from "./pages/demo"

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/canvas" element={<Canvas />}></Route>
            <Route exact path="/documentation" element={<Documentation />}></Route>
            <Route exact path="/demo" element={<ParticleEffect />}></Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
