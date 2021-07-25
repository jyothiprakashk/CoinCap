import "./App.css";
import RootRouter from "./Container/Dashboard/Dashboard";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider } from "react-redux";
import _store from "./Store/store";
const { persistor, store } = _store();
function App() {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <div className="App">
          <RootRouter />
        </div>
      </Provider>
    </PersistGate>
  );
}

export default App;
