import React from "react";
import styled from "styled-components";
import { AppContent, Header, Navbar } from "../components";

const Layout = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;

  div.header {
    border: 1px solid #000;
  }

  div.container-2 {
    display: flex;
    flex-grow: 1;
    min-height: 90vh;
    width: 100%;

    > div.navbar {
      width: 20%;
      border: 1px solid #000;
    }

    > div.appcontent {
      width: 80%;
      border: 1px solid #000;
      padding: 20px;
    }
  }
`;

const DefaultLayout: React.FC = () => {
  return (
    <>
      <Layout>
        <div className="header">
          <Header />
        </div>
        <div className="container-2">
          <div className="navbar">
            <Navbar />
          </div>
          <div className="appcontent">
            <AppContent />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default DefaultLayout;
