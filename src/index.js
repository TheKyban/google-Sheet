import ReactDOM from "react-dom/client";
import App from "./app";
import "./index.css";
import { Provider } from "react-redux";
import store from "./controllers/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
            <App />
    </Provider>
);