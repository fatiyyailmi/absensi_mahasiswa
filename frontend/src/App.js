import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";

function App() {
  return (
    <div className="font-sans">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tambah" element={<Form />} />
          <Route path="/edit/:id" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
