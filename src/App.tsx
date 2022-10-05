import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./core/redux/store";
import DefaultLayout from "./layout/DefaultLayout";
import { Global as GlobalStyles } from "./styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <DefaultLayout />
          <GlobalStyles />
          <ToastContainer />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
