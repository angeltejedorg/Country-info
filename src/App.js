import react from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

// Views
import CountryPage from "./views/CountryPage"


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <CountryPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
