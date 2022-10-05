import React, { FormEventHandler } from "react";
import { FaSearch } from "react-icons/fa";
import { Container } from "./styles";
import { useAppSelector, useAppDispatch } from "../../core/redux/hooks";
import { itemProductState } from "../../core/redux/reducers/productSlice";
import { add as addToCart } from "../../core/redux/reducers/cartSlice";

const Home: React.FC = () => {
  const products = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEventHandler) => {};

  return (
    <Container>
      <div className="top_crumb">
        <p> home </p>
        <div className="search_container">
          <FaSearch />
          <input
            type="search"
            name="products_search"
            id="input_search_product"
          />
        </div>
      </div>

      <ul>
        <li>
          <strong>Produtos</strong>
          <strong>Descrição</strong>
          <strong></strong>
        </li>
        {products.items.map((item: itemProductState) => (
          <li key={item.id}>
            <p>{item.product}</p>
            <p>{item.desc}</p>
            <div>
              <button type="button"> Quantidade: {item.qtd}</button>
              <button
                type="button"
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: item.id,
                      product: item.product,
                      desc: item.desc,
                      price: item.price,
                      qtd: item.qtd,
                    })
                  )
                }
              >
                Adicionar
              </button>
            </div>
          </li>
        ))}

        {!(products.items.length > 0) && (
          <>
            <p>Nothing to See here</p>
          </>
        )}
      </ul>
    </Container>
  );
};

export default Home;
