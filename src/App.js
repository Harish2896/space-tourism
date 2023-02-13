import { ThemeProvider } from "styled-components";
import { Route, Routes, useLocation } from "react-router-dom";
import { Global } from "./styles/Global";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Destination from "./components/Destination/Destination";
import Crew from "./components/Crew/Crew";
import Technology from "./components/Technology/Technology";

const theme = {
  colors: {
    grayishBlue: "#d0d6f9",
    darkBlue: "#0b0d17",
    white: "#ffffff",
  },
};

function App() {
  const location = useLocation().pathname;
  const newClassName = location.split("/")[1];
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global />
        <main className={"main-container " + newClassName}>
          <Navbar />
          <Routes>
            <Route path="/space-tourism" element={<Home />} />
            <Route
              className="destination-page"
              path="/destination"
              element={<Destination />}
            />
            <Route className="crew-page" path="/crew" element={<Crew />} />
            <Route
              className="technology-page"
              path="/technology"
              element={<Technology />}
            />
          </Routes>
        </main>
      </ThemeProvider>
    </>
  );
}

export default App;
