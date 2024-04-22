import React from "react";
import { Routes as Router, Route } from "react-router-dom";
import Loader from "react-js-loader";

const HomePage = React.lazy(() => import('./pages/Home/Home'));
const ListingPage = React.lazy(() => import('./pages/Listing/Listing'));
const ProductPage = React.lazy(() => import('./pages/Product/Product'));
const Contact = React.lazy(() => import('./pages/Contact/Contact'));
const About = React.lazy(() => import('./pages/About/About'));


export default function Routes() {
  return (
    <React.Suspense fallback={
      <div style={{}}>
        <Loader
          type="bubble-loop"
          bgColor={"#15AAA0"}
          size={50}
        />
      </div>}>
      <Router>
        <Route path="/" element={<HomePage />} />
        <Route path="/listing/:room_type_id/:category_id" element={<ListingPage />} />
        <Route path="/listing/:room_type_id" element={<ListingPage />} />
        <Route path="/listing" element={<ListingPage />} />
        <Route path="/product/:product_id" element={<ProductPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Router>
    </React.Suspense>
  );
}
