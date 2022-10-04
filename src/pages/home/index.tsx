import React from "react";
import { FaSearch } from "react-icons/fa";
import { Container } from "./styles";

const Home: React.FC = () => {
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
        <li>
          <p>lorem ipsun</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, atque
            aut. Sit molestiae incidunt consectetur. Repellendus dicta,
            asperiores alias assumenda impedit ut voluptatem? Necessitatibus
            aliquid quaerat est neque doloremque nulla.
          </p>
          <div>
            <button type="button">Quantidade</button>
            <button type="button">Adicionar</button>
          </div>
        </li>

        <li>
          <p>lorem ipsun</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, atque
            aut. Sit molestiae incidunt consectetur. Repellendus dicta,
            asperiores alias assumenda impedit ut voluptatem? Necessitatibus
            aliquid quaerat est neque doloremque nulla.
          </p>
          <div>
            <button type="button">Quantidade</button>
            <button type="button">Adicionar</button>
          </div>
        </li>

        <li>
          <p>lorem ipsun</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, atque
            aut. Sit molestiae incidunt consectetur. Repellendus dicta,
            asperiores alias assumenda impedit ut voluptatem? Necessitatibus
            aliquid quaerat est neque doloremque nulla.
          </p>
          <div>
            <button type="button">Quantidade</button>
            <button type="button">Adicionar</button>
          </div>
        </li>

        <li>
          <p>lorem ipsun</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, atque
            aut. Sit molestiae incidunt consectetur. Repellendus dicta,
            asperiores alias assumenda impedit ut voluptatem? Necessitatibus
            aliquid quaerat est neque doloremque nulla.
          </p>
          <div>
            <button type="button">Quantidade</button>
            <button type="button">Adicionar</button>
          </div>
        </li>
      </ul>
    </Container>
  );
};

export default Home;
