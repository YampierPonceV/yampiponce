import "./App.css";
import Footer from "./Components/Footer/main";
import Header from "./Components/Header/main";
import About from "./Components/Profile/main";
import Recientes from "./Components/Recientes/main";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Recientes />
      <Footer />
    </div>
  );
}

export default App;
