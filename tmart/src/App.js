// import { Routes, Route, } from "react-router-dom";
import Home from '../src/pages/Home.jsx';
import './App.css';
import { Routes, Route} from "react-router-dom";
import Shop from './pages/Shop';

function App() {
  return (
    <div className="wrapper fixed__footer">

     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
