import "./App.css";
import Final from "./Final_home";
import Model from './components/xr-gallery/XrGalleryContainer'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Final/>}/>
      <Route path="/model1" element={<Model/>}/>
      <Route path="/model2" element={<Model/>}/>
      <Route path="/model3" element={<Model/>}/>
    </Routes>
      
    </>
  );
}

export default App;
