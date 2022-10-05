import styled, { css } from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 5px 30px;

  > button {
    display: flex;
    background: transparent;
    border: 0;
    font-size: 22px;
  }
`;

export const HeaderOptions = styled.div`
  width: 150px;
  height: 100px;
  box-shadow: 2px 3px 3px 5px #c4c4c4;
  background: #ffffff;

  position: absolute;
  top: 60px;
  right: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: all 0.3s;

  ${(props: { flex: boolean }) =>
    props.flex
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `}

  button {
    margin: 10px;
    width: 140px;
    height: 30px;
    background: #0f0f0f;
    color: #ffffff;
    font-weight: 600;
  }
`;
