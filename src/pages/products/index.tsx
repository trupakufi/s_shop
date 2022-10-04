import React from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import { Container, ProductForm } from "./styles";

const Products: React.FC = () => {
  return (
    <Container>
      <div className="top_crumb">
        <strong>admin</strong> <span>&gt;</span> <p> produtos </p>
      </div>

      <ProductForm>
        <div>
          <label htmlFor="product_name">Produto</label>
          <input type="text" name="name" id="product_name" />
        </div>

        <div>
          <label htmlFor="product_description">Descrição</label>
          <textarea
            name="desc"
            id="product_description"
            cols={10}
            rows={1}
          ></textarea>
        </div>

        <div>
          <label htmlFor="product_price">Preço</label>
          <input type="number" min={0.1} name="price" id="product_price" />
        </div>

        <button>
          <FaPlus />
        </button>
      </ProductForm>

      <ul>
        <li>
          <strong>Produto</strong>
          <strong>Desrição</strong>
          <strong>Preço</strong>
          <strong />
        </li>

        <li>
          <p>lorem ipsun</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            repellendus, maxime cupiditate impedit explicabo minus nam voluptate
            consectetur facilis, saepe commodi dolore porro a esse consequatur
            ad modi earum. Amet!
          </p>
          <p>R$ 3.0</p>
          <p>
            <button>
              <FaTimes />
            </button>
          </p>
        </li>

        <li>
          <p>lorem ipsun</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            repellendus, maxime cupiditate impedit explicabo minus nam voluptate
            consectetur facilis, saepe commodi dolore porro a esse consequatur
            ad modi earum. Amet!
          </p>
          <p>R$ 3.0</p>
          <p>
            <button>
              <FaTimes />
            </button>
          </p>
        </li>

        <li>
          <p>lorem ipsun</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            repellendus, maxime cupiditate impedit explicabo minus nam voluptate
            consectetur facilis, saepe commodi dolore porro a esse consequatur
            ad modi earum. Amet!
          </p>
          <p>R$ 3.0</p>
          <p>
            <button>
              <FaTimes />
            </button>
          </p>
        </li>

        <li>
          <p>lorem ipsun</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            repellendus, maxime cupiditate impedit explicabo minus nam voluptate
            consectetur facilis, saepe commodi dolore porro a esse consequatur
            ad modi earum. Amet!
          </p>
          <p>R$ 3.0</p>
          <p>
            <button>
              <FaTimes />
            </button>
          </p>
        </li>

        <li>
          <p>lorem ipsun</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            repellendus, maxime cupiditate impedit explicabo minus nam voluptate
            consectetur facilis, saepe commodi dolore porro a esse consequatur
            ad modi earum. Amet!
          </p>
          <p>R$ 3.0</p>
          <p>
            <button>
              <FaTimes />
            </button>
          </p>
        </li>

        <li>
          <p>lorem ipsun</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            repellendus, maxime cupiditate impedit explicabo minus nam voluptate
            consectetur facilis, saepe commodi dolore porro a esse consequatur
            ad modi earum. Amet!
          </p>
          <p>R$ 3.0</p>
          <p>
            <button>
              <FaTimes />
            </button>
          </p>
        </li>

        <li>
          <p>lorem ipsun</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            repellendus, maxime cupiditate impedit explicabo minus nam voluptate
            consectetur facilis, saepe commodi dolore porro a esse consequatur
            ad modi earum. Amet!
          </p>
          <p>R$ 3.0</p>
          <p>
            <button>
              <FaTimes />
            </button>
          </p>
        </li>

        <li>
          <p>lorem ipsun</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
            repellendus, maxime cupiditate impedit explicabo minus nam voluptate
            consectetur facilis, saepe commodi dolore porro a esse consequatur
            ad modi earum. Amet!
          </p>
          <p>R$ 3.0</p>
          <p>
            <button>
              <FaTimes />
            </button>
          </p>
        </li>
      </ul>
    </Container>
  );
};

export default Products;
