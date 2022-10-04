import React from "react";
import { Container } from "./styles";

const Shops: React.FC = () => {
  return (
    <Container>
      <div className="top_crumb">
        <strong>admin</strong> <span>&gt;</span> <p> compras </p>
      </div>

      <ul>
        <li>
          <strong>Nome</strong>
          <strong>QTD</strong>
          <strong>Total</strong>
        </li>
        <li>
          <p>mariovarela99</p>
          <p>5</p>
          <p>R$1000</p>
        </li>
        <li>
          <p>mariovarela99</p>
          <p>5</p>
          <p>R$1000</p>
        </li>
        <li>
          <p>mariovarela99</p>
          <p>5</p>
          <p>R$1000</p>
        </li>
        <li>
          <p>mariovarela99</p>
          <p>5</p>
          <p>R$1000</p>
        </li>
        <li>
          <p>mariovarela99</p>
          <p>5</p>
          <p>R$1000</p>
        </li>
      </ul>
    </Container>
  );
};

export default Shops;
