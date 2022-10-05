import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  div.top_crumb {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-transform: capitalize;

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

      p {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        line-height: 30px;
        text-transform: capitalize;

        button {
          color: rgba(255, 0, 0, 0.6);
          font-size: 14px;
        }

        a {
          color: #232323;
          font-size: 14px;
          margin-right: 10px;
        }
      }

      strong:first-child {
        width: 20%;
      }

      strong:nth-child(2) {
        width: 50%;
      }

      strong:nth-child(3),
      strong:nth-child(4) {
        width: 20%;
        text-align: center;
      }

      p:first-child {
        width: 20%;
      }

      p:nth-child(2) {
        width: 50%;
      }

      p:nth-child(3),
      p:nth-child(4) {
        width: 20%;
        text-align: center;
      }
    }
  }
`;

export const ProductForm = styled.form`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 30px;

  div {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 10px;
    }

    input,
    textarea {
      width: 200px;
      border: 1px solid #000000;
      height: 26px;
      padding: 2px 10px 2px 10px;
    }

    textarea {
      width: 350px;
    }
  }

  button {
    width: 100px;
    height: 26px;
    border: 1px solid #000000;
    background: #000000;
    color: #ffffff;
    line-height: 26px;
  }
`;
