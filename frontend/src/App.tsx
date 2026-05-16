
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import AppzetBillingPage from "./pages/products/AppzetBillingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/products/appzetbilling"
          element={<AppzetBillingPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

