import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import store from "./redux/config/configStore";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";

const root = ReactDOM.createRoot(document.getElementById("root"));

// store의 내용에 따라 리덕스 데이터를 유지
let persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* 유지시킬 데이터가 정상적으로 저장되고 불러와지도록 UI 렌더링을 지연 */}
      {/* loading = 지연 시간. ms단위 */}
      {/* app을 감싸는 형태 */}
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
