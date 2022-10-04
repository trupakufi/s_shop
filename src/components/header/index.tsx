import React from "react";
import { Container } from "./styles";
import { FaBars } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <Container>
      <h2>S_Shop</h2>

      <button>
        <FaBars />
      </button>
    </Container>
  );
};

export default Header;
