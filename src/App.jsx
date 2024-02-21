import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import ProfilePage from "./pages/ProfilePage";
import NotFoundPage from "./pages/NotFoundPage";
import Menu from "./components/Menu";

const App = () => {
 
  return (
    <div>
      <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/product" element={<ProductPage/>} />
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;