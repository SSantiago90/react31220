import NavBar from "./components/NavBar/NavBar";
import "./app.css";
/* import "bootstrap/dist/css/bootstrap.min.css"; */
import BootstrapExample from "./components/BootstrapExample";
import TailwindExample from "./components/TailwindExample";

function App() {
  return (
    <div className="">
      <header className="App-header">
        <NavBar />
        <img src="/img/coderhouse.jpg" alt="logo"></img>
        <h1 className="title">Bienvenidos a mi app</h1>
      </header>
      <TailwindExample />
      {/*  <BootstrapExample /> */}
    </div>
  );
}

export default App;
