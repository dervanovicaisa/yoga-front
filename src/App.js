// import "./App.css";
import HeaderComponent from "./header/Header";
import HomeComponent from "./home/Home";
import Services from "./services/Services";

function App() {
  return (
    <div className="w-95">
      <HeaderComponent />
      <HomeComponent />
      <Services />
    </div>
  );
}

export default App;
