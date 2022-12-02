import { useSelector } from "react-redux";

import Todo from "../todo/Todo";

const List = ({ listTitle }) => {
  const todoLists = useSelector((state) => state.todos.lists);

  const WorkingBox = todoLists.filter((todo) => !todo.isDone);
  const DoneBox = todoLists.filter((todo) => todo.isDone);

  return (
    <div className="sublistWrap">
      <div className="usblistTitle">{listTitle}</div>
      <ul className="todoLists">
        {listTitle === "Working"
          ? WorkingBox.map((todo) => <Todo key={todo.id} todo={todo} />)
          : DoneBox.map((todo) => <Todo key={todo.id} todo={todo} />)}
      </ul>
    </div>
  );
};
export default List;
