import React, { useState } from "react";
import { Container, HeaderOptions } from "./styles";
import { FaBars } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../core/redux/hooks";
import { change, UserType } from "../../core/redux/reducers/auth";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);

  const handleChangeUser = () => {
    dispatch(change());
    navigate("/");
    setShowOptions(false);
  };

  return (
    <Container>
      <h2>S_Shop</h2>

      <button
        type="button"
        onClick={() => setShowOptions((prevState) => !prevState)}
      >
        <FaBars />
      </button>

      <HeaderOptions flex={showOptions}>
        <strong>Change User</strong>
        <button type="button" onClick={() => handleChangeUser()}>
          Change
        </button>

        <p>Acting Like: {auth.user === UserType.normal ? "Client" : "Admin"}</p>
      </HeaderOptions>
    </Container>
  );
};

export default Header;
