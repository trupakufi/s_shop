import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  div.top_crumb {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 14px;
      color: #23232399;
      font-weight: 400;
    }
  }

  div.actions {
    margin-top: 30px;
    width: 100%;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: flex-end;

    button {
      width: 250px;
      height: 36px;
      border: 1px solid #000;
      margin-top: 15px;
      font-size: 16px;
      font-weight: 600;
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
        line-height: 30px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      strong:first-child {
        width: 10%;
      }

      p:first-child {
        width: 10%;
      }

      strong:nth-child(2) {
        width: 25%;
      }

      p:nth-child(2) {
        width: 25%;
      }

      strong:nth-child(3) {
        width: 35%;
      }

      p:nth-child(3) {
        width: 35%;
      }

      strong:nth-child(4) {
        width: 20%;
        text-align: center;
      }

      p:nth-child(4) {
        width: 20%;
        text-align: center;
      }

      strong:last-child {
        width: 15%;
      }

      p:last-child {
        width: 15%;
        text-align: center;
      }
    }
  }
`;

export const FormName = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin-top: 15px;

  label {
    font-size: 14px;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    height: 26px;
    border: 1px solid #000;
    padding: 2px 20px 2px 10px;
  }
`;
