import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import WeatherHistory from "./components/WeatherHistory";
import Admin from "./components/Admin";
import { GlobalContextProvider } from "./context/GlobalState";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <GlobalContextProvider>
              <Header />
              <Home />
            </GlobalContextProvider>
          }
        />
        <Route
          path="/weatherhistory"
          element={
            <GlobalContextProvider>
              <Header />
              <WeatherHistory />
            </GlobalContextProvider>
          }
        />
        <Route
          path="/admin"
          element={
            <GlobalContextProvider>
              <Header />
              <Admin />
            </GlobalContextProvider>
          }
        />
        <Route
          path="/login"
          element={
            <GlobalContextProvider>
              <Header />
              <Login />
            </GlobalContextProvider>
          }
        />
        <Route
          path="/signup"
          element={
            <GlobalContextProvider>
              <Header />
              <SignUp />
            </GlobalContextProvider>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
