import { Provider } from "react-redux";
import "./App.css";
import { store } from "./redux/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes/routesConfig";
import { GlobalContextProvider } from "./context/GlobalContext";

function App() {

  const router = createBrowserRouter([...routes]);

  return (
    <>
      <Provider store={store}>
    <GlobalContextProvider>
        <RouterProvider router={router} />
    </GlobalContextProvider>
      </Provider>
    </>
  );
}

export default App;
