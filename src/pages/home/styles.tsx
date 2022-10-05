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
      text-transform: capitalize;
    }

    div.search_container {
      width: 240px;
      height: 26px;
      border: 1px solid #000;
      display: flex;
      align-items: center;
      padding: 5px;

      input[type="search"] {
        width: 225px;
        height: 26px;
        margin-left: 5px;
      }
    }
  }

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;

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

      strong {
        width: 33.333333%;
      }

      p {
        width: 33.333333%;
        line-height: 30px;

        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-transform: capitalize;
      }

      div {
        width: 33.333333%;
        display: flex;
        align-items: center;
        justify-content: center;

        button {
          border: 2px solid #000;
          width: 120px;
          margin: 3px;
          height: 26px;
        }
      }
    }
  }
`;
