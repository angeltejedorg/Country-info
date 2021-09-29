import react from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Views
import CountryPage from "./views/CountryPage"
import CountryDetails from "./views/CountryDetails"
import FetchError from "./components/FetchError";
import Home from "./views/Home";
import NotFound from "./components/NotFound";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/search" exact>
          <CountryPage/>
        </Route>
        <Route path="/details/:country" exact>
          <CountryDetails/>
        </Route>
        
        <Route component={NotFound}/>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
