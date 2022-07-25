import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Writeemail from "./components/Writeemails";

function App(): JSX.Element {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
