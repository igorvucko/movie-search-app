import { Provider } from "react-redux";
import { store } from "../store/store";
import AppRouter from "./routes/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
      <ToastContainer position="bottom-center" autoClose={3000} />
    </Provider>
  );
};

export default App;