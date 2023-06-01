import "./App.css";
import { database } from "./service/firebase";
import PostuladosContainer from "./components/postulados/PostuladosContainer/PostuladosContainer";
import FiltrosContainer from "./components/filtros/FiltrosContainer/FiltrosContainer";

console.log(database.app.name);
function App() {
  return (
    <>
      <PostuladosContainer />
    </>
  );
}

export default App;
