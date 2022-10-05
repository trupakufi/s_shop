import React, { FormEvent, useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../core/redux/hooks";
import {
  edit,
  itemProductState,
} from "../../../core/redux/reducers/productSlice";
import { Container, ProductForm } from "../styles";

const EditProduct: React.FC = () => {
  const products = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const [newProduct, setNewProduct] = useState<itemProductState>();
  const [product, setProduct] = useState<string>();
  const [desc, setDesc] = useState<string>();
  const [price, setPrice] = useState<number>();
  const { id } = useParams();

  useEffect(() => {
    const [productToEdit] = products.items.filter(
      (item: itemProductState) => item.id === id
    );
    setProduct(productToEdit.product);
    setDesc(productToEdit.desc);
    setPrice(productToEdit.price);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setNewProduct({
      id: id || "",
      product: product || "",
      desc: desc || "",
      price: price || 0.99,
      qtd: 1,
    });
  };

  useEffect(() => {
    if (product && desc && price) {
      dispatch(edit({ id, newProduct }));
      setProduct("");
      setDesc("");
      setPrice(0);
    }
  }, [newProduct]);
  return (
    <>
      <Container>
        <div className="top_crumb">
          <strong>admin</strong> <span>&gt;</span> <p> produtos </p>{" "}
          <span>&gt;</span> <p>editar</p>
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
            <FaEdit />
          </button>
        </ProductForm>
      </Container>
    </>
  );
};

export default EditProduct;
