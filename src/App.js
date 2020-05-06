import React from "react";
import PageWrapper from "./components/PageWrapper";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//Promotion Pages
import Helmet from "./components/Pages/Helmet";
import Jersey from "./components/Pages/Jersey";

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
import MarinHawk from "./components/Pages/BikePages/MarinHawk";
import GTForce from "./components/Pages/BikePages/GTForce";
import MarinSan from "./components/Pages/BikePages/MarinSan";

function App() {
  return (
    <Router>
      <PageWrapper>
        <Route exact={true} path="/" component={Home} />
        <Route path="/helmet" component={Helmet} />
        <Route path="/jersey" component={Jersey} />
        <Route path="/bikes" component={Bikes} />
        <Route path="/mountain" component={Mountain} />
        <Route path="/bmx" component={BMX} />
        <Route path="/electric" component={Electric} />
        <Route path="/signin" component={Signin} />
        <Route path="/createaccount" component={CreateAccount} />
        <Route path="/konaprocess" component={KonaProcess} />
        <Route path="/konasatori" component={KonaSatori} />
        <Route path="/marinhawk" component={MarinHawk} />
        <Route path="/gtforce" component={GTForce} />
        <Route path="/marinsan" component={MarinSan} />
      </PageWrapper>
    </Router>
  );
}

export default App;
