import "./App.css";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ViewProductPage from "./pages/ViewProductPage";
import EditProductPage from "./pages/EditProductPage";
import CreateProductPage from "./pages/CreateProductPage";


function App() {
  return  (         
  <Router>
  <Routes>
    <Route path="/product" element={<HomePage />} />
    <Route path="/view/:id" element={<ViewProductPage />} />
    <Route path="/product/:id" element={<EditProductPage />} />
    <Route path="/product/create" element={<CreateProductPage />} />
  </Routes>
</Router>
  );
}

export default App;
