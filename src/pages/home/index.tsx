import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../core/redux/hooks";
import { add as addToCart } from "../../core/redux/reducers/cartSlice";
import { itemProductState } from "../../core/redux/reducers/productSlice";
import { Container } from "./styles";

const Home: React.FC = () => {
  const products = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState<string>();

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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <ul>
        <li>
          <strong>Produtos</strong>
          <strong>Descrição</strong>
          <strong></strong>
        </li>
        {!search
          ? products.items.map((item: itemProductState) => (
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
            ))
          : products.items.map(
              (item: itemProductState) =>
                item.product.toLowerCase().includes(search.toLowerCase()) && (
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
                )
            )}

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
