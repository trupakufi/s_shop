import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import * as Pages from "../pages";

const Routes: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/products" element={<Pages.Products />} />
        <Route path="/shops" element={<Pages.Shops />} />
        <Route path="/cart" element={<Pages.Cart />} />
        <Route path="*" element={<h1>Got Lost ?</h1>} />
      </Switch>
    </>
  );
};

export default Routes;
