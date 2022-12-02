import Header from "../header/Header";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <Wrap>
      <Header />
      <div>{children}</div>
    </Wrap>
  );
};

const Wrap = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

export default Layout;
