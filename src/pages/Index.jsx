// component
import Form from "../component/form/Form";
import List from "../component/list/List";

const Index = () => {
  return (
    <div>
      <Form />
      <div className="list_wrap">
        <List listTitle="Working" />
        <div className="listHr"></div>
        <List listTitle="Done" />
      </div>
    </div>
  );
};

export default Index;
