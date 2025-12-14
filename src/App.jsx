import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetailPage from "./pages/UserDetailPage";
import UserCRUD from "./pages/UserCRUD";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:userId" element={<UserDetailPage />} />
        <Route path="/user-crud" element={<UserCRUD />} />
      </Routes>
    </>
  );
}

export default App;
