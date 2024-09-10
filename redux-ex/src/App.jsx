import CustomersAdd from "./components/CustomersAdd";
import CustomersView from "./components/CustomersView";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <h1>React Redux Customer Example</h1>
      <CustomersAdd />
      <CustomersView />
    </Provider>
  );
}

export default App;
