import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../core/redux/hooks";
import {
  clear as ClearCart,
  itemCartState,
  remove,
} from "../../core/redux/reducers/cartSlice";
import {
  add as addToShops,
  itemShopState,
} from "../../core/redux/reducers/shopSlice";
import { Container, FormName } from "./styles";
import { v4 as uuidv4 } from "uuid";

const Cart: React.FC = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const [total, setTotal] = useState<number>();
  const [qtd, setQtd] = useState<number>();
  const [name, setName] = useState<string>();
  const [shop, setShop] = useState<itemShopState>();

  useEffect(() => {
    let sum = 0;
    let _qtd = 0;
    cart.items.map((item) => {
      sum += item.price;
      _qtd += item.qtd;
    });
    setTotal(sum);
    setQtd(_qtd);
  }, [cart]);

  const checkOut = () => {
    let id = uuidv4();
    setShop({
      id,
      name,
      qtd,
      total,
    });
  };

  useEffect(() => {
    if (name && cart.items.length > 0) {
      dispatch(addToShops(shop || ({} as itemShopState)));

      setName("");
      setQtd(0);
      setTotal(0);
      setShop({} as itemShopState);
      dispatch(ClearCart());
    }
  }, [shop]);

  return (
    <Container>
      <div className="top_crumb">
        <p>cesta</p>
      </div>
      <FormName>
        <label htmlFor="name"> Nome </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </FormName>
      <ul>
        <li>
          <strong>QTD</strong>
          <strong>Produto</strong>
          <strong>Descrição</strong>
          <strong>Valor</strong>
          <strong />
        </li>

        {cart.items.map((item: itemCartState) => (
          <li key={item.id}>
            <p> {item.qtd} </p>
            <p> {item.product} </p>
            <p> {item.desc} </p>
            <p> {item.price} </p>
            <p>
              <button
                type="button"
                onClick={() => dispatch(remove({ id: item.id }))}
              >
                <FaTimes color="rgba(255, 0, 0, 0.7)" />
              </button>
            </p>
          </li>
        ))}

        {!(cart.items.length > 0) && (
          <>
            <p>Nothing To See here</p>
          </>
        )}
      </ul>

      <div className="actions">
        <div>
          <strong>Total</strong>
          <span> R$ {total} </span>
        </div>
        <button type="button" onClick={() => checkOut()}>
          Finalizar Compra
        </button>
      </div>
    </Container>
  );
};

export default Cart;
