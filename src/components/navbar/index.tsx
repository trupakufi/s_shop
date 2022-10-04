import React from "react";
import { Link, Router } from "react-router-dom";
import { Container } from "./styles";

const Navbar: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>

        <li>
          <Link to="/cart"> Cesta </Link>
        </li>

        <li>
          <Link to="/products"> Produtos </Link>
        </li>

        <li>
          <Link to="/shops"> Compras </Link>
        </li>
      </ul>
    </Container>
  );
};

export default Navbar;
