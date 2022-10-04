import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./core/redux/store";
import DefaultLayout from "./layout/DefaultLayout";
import { Global as GlobalStyles } from "./styles/global";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <DefaultLayout />
          <GlobalStyles />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
