import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './navbar/navbar';
import Dashboard from './dashboard/dashboard';
import ForAuthors from "./forauthors/forauthors.jsx";
import ImageGallery from './gallery/gallery.jsx';
import GuideLines from './guidelines/GuideLines.jsx';

 

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/gallery" element={<ImageGallery />} />
          <Route path="/forauthors" element={<ForAuthors/>}/>
          <Route path="/guidelines" element={<GuideLines />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
