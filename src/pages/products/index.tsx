import React, { FormEventHandler, useEffect, useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "../../core/redux/hooks";
import {
  add,
  itemProductState,
  remove,
} from "../../core/redux/reducers/productSlice";
import { Container, ProductForm } from "./styles";

const Products: React.FC = () => {
  const products = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const [newProduct, setNewProduct] = useState<itemProductState>();
  const [product, setProduct] = useState<string>();
  const [desc, setDesc] = useState<string>();
  const [price, setPrice] = useState<number>();

  const handleSubmit = (e: FormEventHandler) => {
    e.preventDefault();

    let id = uuidv4();
    setNewProduct({
      id,
      product,
      desc,
      price,
    });
  };

  useEffect(() => {
    if (product && desc && price) {
      dispatch(add(newProduct || ({} as itemProductState)));
      setProduct("");
      setDesc("");
      setPrice("");
    }
  }, [newProduct]);

  return (
    <Container>
      <div className="top_crumb">
        <strong>admin</strong> <span>&gt;</span> <p> produtos </p>
      </div>

      <ProductForm onSubmit={handleSubmit}>
        <div>
          <label htmlFor="product_name">Produto</label>
          <input
            type="text"
            name="name"
            id="product_name"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="product_description">Descrição</label>
          <textarea
            name="desc"
            id="product_description"
            cols={10}
            rows={1}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label htmlFor="product_price">Preço</label>
          <input
            type="number"
            name="price"
            id="product_price"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>

        <button type="submit">
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

        {products.items.map((item: itemProductState) => (
          <li key={item.id}>
            <p>{item.product}</p>
            <p>{item.desc}</p>
            <p>{item.price}</p>
            <p>
              <button
                type="button"
                onClick={() => dispatch(remove({ id: item.id }))}
              >
                <FaTimes />
              </button>
            </p>
          </li>
        ))}

        {!(products.items.length > 0) && (
          <li>
            <p>lorem ipsun</p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Provident repellendus, maxime cupiditate impedit explicabo minus
              nam voluptate consectetur facilis, saepe commodi dolore porro a
              esse consequatur ad modi earum. Amet!
            </p>
            <p>R$ 3.0</p>
            <p>
              <button>
                <FaTimes />
              </button>
            </p>
          </li>
        )}
      </ul>
    </Container>
  );
};

export default Products;
