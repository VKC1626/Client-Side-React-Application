import React from "react";
import Leftnav from "./leftnav";
import Content from "./content";
import Rightnav from "./rightnav";
import banner from "./images/banner.jpg";

function PageWithColumns() {
  return (
    <div className="container">
      <img src={banner} alt="Banner" height={100} width={900} />
      <br />

      <div className="row">
        <div className="col-md-12 main">
          <div className="col-md-3 box">
            <Leftnav />
          </div>

          <div className="col-md-6 box">
            <Content />
          </div>

          <div className="col-md-3 box">
            <Rightnav />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageWithColumns;
