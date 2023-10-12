import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import MovieDetails from "./pages/MovieDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Homepage />} />
            <Route path={"/movieDetails"} element={<MovieDetails />} />
            <Route path={"*"} element={<Homepage />} />
          </Routes>
        </BrowserRouter>


      <Footer />
    </>
  );
}

export default App;
