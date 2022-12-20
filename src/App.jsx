import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import ContentPage from "./Pages/ContentPage/ContentPage";
import HomeDocument from "./Pages/HomeDocument/HomeDocument";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
       <Sidebar />
       <Routes>
           <Route path="/message" element={<HomePage />} />
           <Route path="/document" element={<HomeDocument />} />
           <Route path="/content" element={<ContentPage />} />
       </Routes>
    </div>
  );
}

export default App;
