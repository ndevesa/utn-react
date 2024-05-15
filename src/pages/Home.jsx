import React from "react";
import { BiLogoCodepen } from "react-icons/bi";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div id="HomeBanner" className="px-4 py-5 mb-5 text-center text-white">
      <div className="w-75 mx-auto">
        <BiLogoCodepen size="100" title="Ecommerce Logo" />

        <h1 className="display-5 fw-bold">Discover the Latest Products</h1>

        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Welcome to our online emporium, where innovation meets convenience.
            Explore a vast array of cutting-edge electronic gadgets and devices
            designed to elevate your lifestyle.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button className="btn-secondary">
              <Link to="/products">See All Products</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
