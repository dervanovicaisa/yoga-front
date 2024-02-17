// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login/Login";
import HomePage from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="login" element={<Login />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
