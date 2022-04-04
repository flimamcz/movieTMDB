import "./assets/styles/Global.css";
import { GlobalDatas } from "./components/GlobalContext";
import { AppRoute } from "./Routes";

function App() {
  return (
    <GlobalDatas>
      <AppRoute />
    </GlobalDatas>
  );
}


// Finalizar Style Components + testar responsive and 2 column
export default App;
