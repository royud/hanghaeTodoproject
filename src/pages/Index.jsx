// component
import Form from "../component/form/Form";
import List from "../component/list/List";

import styled from "styled-components";

const Index = () => {
  return (
    <div>
      <Form />
      <ListWrap>
        <List listTitle="Working" />
        <ListHr />
        <List listTitle="Done" />
      </ListWrap>
    </div>
  );
};

const ListWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;
const ListHr = styled.div`
  width: 4px;
  background-color: rgb(86, 48, 121);
  border-radius: 10px;
`;
export default Index;
