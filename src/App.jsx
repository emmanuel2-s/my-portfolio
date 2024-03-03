import "./App.css";
import RouterPage from "./Routes/RouterPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <div>
        <ToastContainer />
        <RouterPage />
      </div>
    </>
  );
}

export default App;
