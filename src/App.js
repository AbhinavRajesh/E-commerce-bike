import React from "react";
import PageWrapper from "./components/PageWrapper";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Pages
import Signin from "./components/Pages/Signin";
import CreateAccount from "./components/Pages/CreateAccount";
import Home from "./components/Pages/Home";
import Bikes from "./components/Pages/Bikes";
import Mountain from "./components/Pages/Mountain";
import BMX from "./components/Pages/BMX";
import Electric from "./components/Pages/Electric";

//Bike Pages
import KonaProcess from "./components/Pages/BikePages/KonaProcess";
import KonaSatori from "./components/Pages/BikePages/KonaSatori";

function App() {
  return (
    <Router>
      <PageWrapper>
        <Route exact={true} path="/" component={Home} />
        <Route path="/bikes" component={Bikes} />
        <Route path="/mountain" component={Mountain} />
        <Route path="/bmx" component={BMX} />
        <Route path="/electric" component={Electric} />
        <Route path="/signin" component={Signin} />
        <Route path="/createaccount" component={CreateAccount} />
        <Route path="/konaprocess" component={KonaProcess} />
        <Route path="/konasatori" component={KonaSatori} />
      </PageWrapper>
    </Router>
  );
}

export default App;
