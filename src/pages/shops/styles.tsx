import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  div.top_crumb {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    strong {
      color: #00000090;
    }

    span {
      margin: 5px;
    }

    p {
      font-size: 14px;
      color: #23232399;
      font-weight: 400;
    }
  }

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
    max-height: 500px;
    overflow: auto;

    li:first-child {
      margin-bottom: 10px;
    }

    li {
      width: 100%;
      display: flex;
      padding: 3px 10px;
      margin: 3px auto;
      border-bottom: 1px solid #000;
      padding-bottom: 5px;
      text-align: center;

      strong,
      p {
        width: 33.3333333339%;
        text-transform: capitalize;
      }
    }
  }
`;
