import React from "react";
import HeroSlider from "../components/sliders/HeroSlider";
import FeaturedSlider from "../components/sliders/FeaturedSlider";
import SectionsHead from "../components/common/SectionsHead";
import TopProducts from "../components/product/TopProducts";
import Services from "../components/common/Services";

const Home = () => {
  return (
    <main  >
      <section id="hero" className="section">
        <HeroSlider />
      </section>

      <section id="featured" className="section">
        <div className="margin10">
          <SectionsHead heading="Featured Products" />
          {/* <div className="sub-container glow-on-hover padding2050 "> */}
          <div className="sub-container  padding2050 ">
            <FeaturedSlider />
          </div>
        </div>
      </section>

      <section id="products" className="section">
        <div className="container">
          <SectionsHead heading="Top Products" />
          {/* <div className="sub-container glow-on-hover padding2050"> */}
          <div className="sub-container padding2050">
            <TopProducts />
          </div>
        </div>
      </section>

      <Services />
    </main>
  );
};

export default Home;
