import { SnackbarProvider } from "notistack";
import ReactRoute from "./reactRoute/ReactRoute";

function App() {
  return (
    <div className="App">
      <SnackbarProvider maxSnack={5}/>
      <ReactRoute />
    </div>
  );
}

export default App;