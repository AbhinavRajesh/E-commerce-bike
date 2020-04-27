import React from "react";
import PageWrapper from "./components/PageWrapper";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Pages
import Home from "./components/Pages/Home";
import Bikes from "./components/Pages/Bikes";
import Mountain from "./components/Pages/Mountain";
import BMX from "./components/Pages/BMX";
import Electric from "./components/Pages/Electric";

function App() {
  return (
    <Router>
      <PageWrapper>
        <Route exact={true} path="/" component={Home} />
        <Route path="/bikes" component={Bikes} />
        <Route path="/mountain" component={Mountain} />
        <Route path="/bmx" component={BMX} />
        <Route path="/electric" component={Electric} />
      </PageWrapper>
    </Router>
  );
}

export default App;
