import React from "react";
import { Route, Routes as Switch } from "react-router-dom";
import { useAppSelector } from "../core/redux/hooks";
import { UserType } from "../core/redux/reducers/auth";
import * as Pages from "../pages";

const Routes: React.FC = () => {
  const auth = useAppSelector((state) => state.auth);
  return (
    <>
      <Switch>
        {auth.user === UserType.normal ? (
          <>
            <Route path="/" element={<Pages.Home />} />
            <Route path="/cart" element={<Pages.Cart />} />
          </>
        ) : (
          <>
            <Route path="/products" element={<Pages.Products />} />
            <Route path="/shops" element={<Pages.Shops />} />
          </>
        )}
        <Route path="*" element={<h1>Got Lost ?</h1>} />
      </Switch>
    </>
  );
};

export default Routes;
