import './CSS/main.scss';
import Home from './Pages/Home';
import About from './Pages/Episodes';
import Links from './Pages/Links';
import Error404 from './Pages/Error404';

import{ BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/epizode" element={<About/>} />
        <Route path="/linkovi" element={<Links/>} />
        <Route path="*" element={<Error404/>} />
      </Routes>
    </Router>
  );
}

export default App;
