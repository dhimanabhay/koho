import Home from "./Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Page404 from "./components/Page404";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Easy from "./components/accounts/type/Easy";
import Essential from "./components/accounts/type/Essential";
import Extra from "./components/accounts/type/Extra";
import Everything from "./components/accounts/type/Everything";

function App() {
  return (
    <Router>
      <div >
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Easy" element={<Easy />} />
          <Route path="/Essential" element={<Essential />} />
          <Route path="/Extra" element={<Extra />} />
          <Route path="/Everything" element={<Everything />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
