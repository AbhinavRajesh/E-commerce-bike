import React from "react";
import PageWrapper from "./components/PageWrapper";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// Pages
import Home from "./components/Pages/Home";
import Bikes from "./components/Pages/Bikes";

function App() {
  return (
    <Router>
      <PageWrapper>
        <Route exact={true} path="/" component={Home} />
        <Route path="/bikes" component={Bikes} />
      </PageWrapper>
    </Router>
  );
}

export default App;
