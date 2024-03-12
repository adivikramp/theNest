import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Dashboard from "./pages/users/Dashboard";
import Feedback from "./pages/forms/Feedback";
import Order from "./pages/forms/Order";
import Login from "./pages/users/Login";
import Register from "./pages/users/Register";
import AuthRoutes from "./routes/AuthRoutes";
import GuestRoutes from "./routes/GuestRoutes";
import PlantKingdom from "./pages/PlantKingdom";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <main className="h-screen">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="plantkingdom" element={<PlantKingdom />} />

            <Route element={<AuthRoutes />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="order" element={<Order />} />
              <Route path="feedback" element={<Feedback />} />
            </Route>

            <Route element={<GuestRoutes />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
          </Route>
        </Routes>

        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
