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


export default App;
