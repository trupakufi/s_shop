import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";

const Navbar: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>
          <a href="/"> Home </a>
        </li>

        <li>
          <a href="/cart"> Cesta </a>
        </li>

        <li>
          <a href="/products"> Produtos </a>
        </li>

        <li>
          <a href="/shops"> Compras </a>
        </li>
      </ul>
    </Container>
  );
};

export default Navbar;
