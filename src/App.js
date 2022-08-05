import Navbar from "./Component/Navbar";
import About from "./Component/About";
import Blog from "./Component/Blog";
import Contact from "./Component/Contact";
import Error from "./Component/Error";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Navbar />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
