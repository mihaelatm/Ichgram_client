import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login/login";
// import Register from "./Pages/Register/register";
// import ResetPassword from "./Pages/ResetPassword/resetPassword";
// import Home from "./Pages/Home/home";
// import Footer from "./ui/Footer/footer";
// import Header from "./ui/Header/header";
// import MyProfile from "./Pages/MyProfile/myProfile";
// import EditProfile from "./Pages/EditProfile/editProfile";

function App() {
  const location = useLocation();

  const excludedRoutes = ["/", "/register", "/password_reset"];

  return (
    <div className="App">
      {!excludedRoutes.includes(location.pathname) && <Header />}
      <div className="content">
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/register" element={<Register />} />
          <Route path="/password_reset" element={<ResetPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/edit_profile" element={<EditProfile />} /> */}
        </Routes>
      </div>
      {!excludedRoutes.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
