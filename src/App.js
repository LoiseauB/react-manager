import { Provider } from "react-redux";
import store from "./reducers/store";
import { Outlet } from "react-router-dom";
import Layout from "./components/Layout";
import "./App.scss";


function App() {
  return (
    <Provider store={store} >
      <Layout>
        <Outlet />
      </Layout>
    </Provider>
  )
}

export default App;
