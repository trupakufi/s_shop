import React from "react";
import { useAppDispatch, useAppSelector } from "../../core/redux/hooks";
import { itemShopState } from "../../core/redux/reducers/shopSlice";
import { Container } from "./styles";

const Shops: React.FC = () => {
  const shops = useAppSelector((state) => state.shops);
  const dispatch = useAppDispatch();

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

        {shops.items.map((item: itemShopState) => (
          <li key={item.id}>
            <p> {item.name} </p>
            <p> {item.qtd} </p>
            <p> {item.total} </p>
          </li>
        ))}

        {!(shops.items.length > 0) && <p>Nothing To see Here</p>}
      </ul>
    </Container>
  );
};

export default Shops;
