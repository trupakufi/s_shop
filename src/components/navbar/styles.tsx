import styled from "styled-components";

export const Container = styled.aside`
  width: 100%;
  height: 100%;

  > ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    li {
      width: 100%;
      display: flex;
      border-bottom: 1px solid #323232;

      a {
        width: 100%;
        height: 50px;
        text-align: center;
        text-transform: uppercase;
        color: #323232;
        line-height: 50px;
        font-weight: 700;

        span {
          height: 40px;
          width: 40px;
          margin-left: 10px;
        }
      }
    }
  }
`;
