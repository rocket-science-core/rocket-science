import React from "react";
import ReactDOM from "react-dom";

import NewComponentTemplate from "./components/NewComponentTemplate";

const App = () => (
  <div>
    <NewComponentTemplate text={"hello world"} />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
