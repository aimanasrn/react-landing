import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../common/Navbar";

const Page = () => {
  return (
      <Router>
        <Navbar />
        <Routes>
          {/* <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/testimonials" component={Testimonials} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/contact" component={Contact} /> */}
        </Routes>
      </Router>
  );
};

export default Page;
