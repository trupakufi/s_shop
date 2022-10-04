import React from "react";
import { FaTimes } from "react-icons/fa";
import { Container, FormName } from "./styles";

const Cart: React.FC = () => {
  return (
    <Container>
      <div className="top_crumb">
        <p>cesta</p>
      </div>
      <FormName>
        <label htmlFor="name"> Nome </label>
        <input type="text" name="name" id="name" placeholder="Nome" />
      </FormName>
      <ul>
        <li>
          <strong>QTD</strong>
          <strong>Produto</strong>
          <strong>Descrição</strong>
          <strong>Valor</strong>
          <strong />
        </li>
        <li>
          <p>3</p>
          <p>lorem ipsun</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            doloremque excepturi, quidem labore consectetur perspiciatis animi
            et maxime maiores corrupti quam iure, sequi nobis eligendi aliquid
            officia eos tempore? Quidem.
          </p>
          <p>$ 3.00</p>
          <p>
            <button type="button">
              <FaTimes color="rgba(255, 0, 0, 0.7)" />
            </button>
          </p>
        </li>
        <li>
          <p>3</p>
          <p>lorem ipsun</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            doloremque excepturi, quidem labore consectetur perspiciatis animi
            et maxime maiores corrupti quam iure, sequi nobis eligendi aliquid
            officia eos tempore? Quidem.
          </p>
          <p>$ 3.00</p>
          <p>
            <button type="button">
              <FaTimes color="rgba(255, 0, 0, 0.7)" />
            </button>
          </p>
        </li>
        <li>
          <p>3</p>
          <p>lorem ipsun</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            doloremque excepturi, quidem labore consectetur perspiciatis animi
            et maxime maiores corrupti quam iure, sequi nobis eligendi aliquid
            officia eos tempore? Quidem.
          </p>
          <p>$ 3.00</p>
          <p>
            <button type="button">
              <FaTimes color="rgba(255, 0, 0, 0.7)" />
            </button>
          </p>
        </li>
        <li>
          <p>3</p>
          <p>lorem ipsun</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            doloremque excepturi, quidem labore consectetur perspiciatis animi
            et maxime maiores corrupti quam iure, sequi nobis eligendi aliquid
            officia eos tempore? Quidem.
          </p>
          <p>$ 3.00</p>
          <p>
            <button type="button">
              <FaTimes color="rgba(255, 0, 0, 0.7)" />
            </button>
          </p>
        </li>
        <li>
          <p>3</p>
          <p>lorem ipsun</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            doloremque excepturi, quidem labore consectetur perspiciatis animi
            et maxime maiores corrupti quam iure, sequi nobis eligendi aliquid
            officia eos tempore? Quidem.
          </p>
          <p>$ 3.00</p>
          <p>
            <button type="button">
              <FaTimes color="rgba(255, 0, 0, 0.7)" />
            </button>
          </p>
        </li>
        <li>
          <p>3</p>
          <p>lorem ipsun</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            doloremque excepturi, quidem labore consectetur perspiciatis animi
            et maxime maiores corrupti quam iure, sequi nobis eligendi aliquid
            officia eos tempore? Quidem.
          </p>
          <p>$ 3.00</p>
          <p>
            <button type="button">
              <FaTimes color="rgba(255, 0, 0, 0.7)" />
            </button>
          </p>
        </li>
      </ul>

      <div className="actions">
        <div>
          <strong>Total</strong>
          <span> R$ 9.00 </span>
        </div>
        <button>Finalizar Compra</button>
      </div>
    </Container>
  );
};

export default Cart;
