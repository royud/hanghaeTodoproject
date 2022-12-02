import { useDispatch, useSelector } from "react-redux";
import { removeList, updateList } from "../redux/modules/todos";

import { Link } from "react-router-dom";

import styled from "styled-components";

// component
import Form from "../component/form/Form";

const TodoList = ({ todo }) => {
  const dispatch = useDispatch();
  const todoLists = useSelector((state) => state.todos.lists);

  //삭제하기
  const listDelete = (num) => {
    let todoRetouched = [...todoLists];
    todoRetouched = todoRetouched.filter((todo) => todo.id !== num);

    dispatch(removeList(todoRetouched));
  };

  //완료하기
  const completed = (num) => {
    const newToodo = todoLists.map((todo) =>
      todo.id === num ? { ...todo, isDone: true } : todo
    );
    dispatch(updateList(newToodo));
  };
  //취소하기
  const todoCancel = (num) => {
    const newToodo = todoLists.map((todo) =>
      todo.id === num ? { ...todo, isDone: false } : todo
    );
    dispatch(updateList(newToodo));
  };
  return (
    <li className="todoList">
      <Link to={`/list/${todo.id}`}>
        <DetailPageMove>{"<"} 상세보기</DetailPageMove>
      </Link>
      <div className="todoListTitle">{todo.title}</div>
      <div className="todoListDesc">{todo.desc}</div>
      <div className="btnWrap">
        {!todo.isDone ? (
          <button
            onClick={() => {
              completed(todo.id);
            }}
          >
            완료하기
          </button>
        ) : (
          <button
            onClick={() => {
              todoCancel(todo.id);
            }}
          >
            취소하기
          </button>
        )}
        <button
          onClick={() => {
            listDelete(todo.id);
          }}
          className="listDeleteBtn"
        >
          삭제하기
        </button>
      </div>
    </li>
  );
};

const ListBox = ({ listTitle }) => {
  const todoLists = useSelector((state) => state.todos.lists);

  const WorkingBox = todoLists.filter((todo) => !todo.isDone);
  const DoneBox = todoLists.filter((todo) => todo.isDone);

  return (
    <div className="sublistWrap">
      <div className="usblistTitle">{listTitle}</div>
      <ul className="todoLists">
        {listTitle === "Working"
          ? WorkingBox.map((todo) => <TodoList key={todo.id} todo={todo} />)
          : DoneBox.map((todo) => <TodoList key={todo.id} todo={todo} />)}
      </ul>
    </div>
  );
};

const Index = () => {
  return (
    <div>
      <Form />
      <div className="list_wrap">
        <ListBox listTitle="Working" />
        <div className="listHr"></div>
        <ListBox listTitle="Done" />
      </div>
    </div>
  );
};

const DetailPageMove = styled.div`
  font-size: 13px;
  margin-bottom: 10px;
`;

export default Index;