import "./App.css";
import CarVendor from "./Components/CarVendor";
import { Provider } from "mobx-react";
import CarStore from "./Common/CarStore";

const carStore = new CarStore();

function App() {
  return (
    <Provider carStore={carStore}>
      <main>
        <CarVendor />
      </main>
    </Provider>
  );
}

export default App;
