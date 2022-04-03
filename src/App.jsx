import "./assets/styles/App.css";
import { GlobalDatas } from "./components/GlobalContext";
import { AppRoute } from "./Routes";

function App() {
  return (
    <GlobalDatas>
      <AppRoute />
    </GlobalDatas>
  );
}


// FAZER STYLED COMPONENTS E PAGE + ORGANIZAR ESTRUTURA

export default App;
