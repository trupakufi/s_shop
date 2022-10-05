import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../core/redux/hooks";
import { UserType } from "../../core/redux/reducers/auth";
import { Container } from "./styles";

const Navbar: React.FC = () => {
  const auth = useAppSelector((state) => state.auth);
  return (
    <Container>
      <ul>
        {auth.user === UserType.normal ? (
          <>
            <li>
              <Link to="/"> Home </Link>
            </li>

            <li>
              <Link to="/cart"> Cesta </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/products"> Produtos </Link>
            </li>

            <li>
              <Link to="/shops"> Compras </Link>
            </li>
          </>
        )}
      </ul>
    </Container>
  );
};

export default Navbar;
