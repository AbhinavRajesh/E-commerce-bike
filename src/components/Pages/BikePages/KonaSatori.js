import React, { Component } from "react";

import Footer from "../../Common/Footer";
import PageLayout from "./Common/PageLayout";

// Image
import image from "../../assets/img/konaprocess.jpg";

class KonaSatori extends Component {
  render() {
    return (
      <div>
        <PageLayout
          model="kona satori 153"
          type="mountain"
          price="$3,499"
          image={image}
        />
        <Footer />
      </div>
    );
  }
}

export default KonaSatori;
