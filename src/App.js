import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <main>
          <Header />
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
