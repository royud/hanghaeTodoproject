import { useState } from "react";
import "./App.css";

const Header = () => {
  return (
    <header>
      <div>My Todo List</div>
      <div>royud</div>
    </header>
  );
};

const ListAddBox = ({ todos, setTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // 제목 작성 state에 저장
  const titleWriting = (e) => {
    setTitle(e.target.value);
  };
  // 내용 작성 state에 저장
  const descWriting = (e) => {
    setDesc(e.target.value);
  };

  // 제목이랑 내용 둘 다 작성이 되어있을 때 todo배열에 넘김
  const listAdd = () => {
    if ((title !== "", desc !== "")) {
      const newList = {
        id: todos[todos.length - 1].id + 1,
        title: title,
        desc: desc,
        isDone: false,
      };
      //기존 배열에 newList 추가
      setTodo([...todos, newList]);

      //초기화
      setTitle("");
      setDesc("");
    } else {
      alert("제목과 내용을 모두 입력해주세요");
    }
  };
  return (
    <div className="listAddBoxWrap">
      <div className="listAddBoxTitle">
        M<span>y</span> Todo List
      </div>
      <div className="listAddBox">
        <div className="listAddBoxInput">
          <div className="titleBox">
            <label htmlFor="title">제목</label>
            <input
              type="text"
              id="title"
              onChange={titleWriting}
              value={title}
            />
          </div>
          <div className="titleBox">
            <label htmlFor="desc">내용</label>
            <textarea
              id="desc"
              rows="2"
              onChange={descWriting}
              value={desc}
            ></textarea>
          </div>
        </div>
        <input
          className="formBtn"
          onClick={listAdd}
          type="submit"
          value="추가하기"
        />
      </div>
    </div>
  );
};

const TodoList = ({ todos, setTodo, todo }) => {
  //삭제하기
  const listDelete = (num) => {
    let todoRetouched = [...todos];
    todoRetouched = todoRetouched.filter((todo) => todo.id !== num);

    setTodo(todoRetouched);
  };

  //완료하기
  const completed = (num) => {
    const newToodo = todos.map((todo) =>
      todo.id === num ? { ...todo, isDone: true } : todo
    );
    setTodo(newToodo);
  };
  //취소하기
  const todoCancel = (num) => {
    const newToodo = todos.map((todo) =>
      todo.id === num ? { ...todo, isDone: false } : todo
    );
    setTodo(newToodo);
  };
  return (
    <li key={todos.indexOf(todo)} className="todoList">
      <div className="todoListTitle">{todo.title}</div>
      <div className="todoListDesc">{todo.desc}</div>
      <div className="btnWrap">
        <button
          onClick={() => {
            listDelete(todo.id);
          }}
          className="listDeleteBtn"
        >
          삭제하기
        </button>
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
      </div>
    </li>
  );
};

const ListBox = ({ listTitle, todos, setTodo }) => {
  return (
    <div className="sublistWrap">
      <div className="usblistTitle">{listTitle}</div>
      <ul className="todoLists">
        {todos.map((todo) => {
          if (listTitle === "Working") {
            return !todo.isDone ? (
              <TodoList
                key={todo.id}
                todos={todos}
                setTodo={setTodo}
                todo={todo}
              />
            ) : null;
          } else {
            return todo.isDone ? (
              <TodoList
                key={todo.id}
                todos={todos}
                setTodo={setTodo}
                todo={todo}
              />
            ) : null;
          }
        })}
      </ul>
    </div>
  );
};
const Main = () => {
  // ----------------------------------------------------------------------------
  const [todos, setTodo] = useState([
    {
      id: 1,
      title: "씻기",
      desc: "몸을 맛깔나게 씻기",
      isDone: false,
    },
    {
      id: 2,
      title: "놀기",
      desc: "오락을 맛깔나게 하기",
      isDone: true,
    },
    {
      id: 3,
      title: "쉬기",
      desc: "쉼을 맛깔나게 쉬기",
      isDone: false,
    },
    {
      id: 4,
      title: "춤추기",
      desc: "춤을 맛깔나게 추기",
      isDone: true,
    },
    {
      id: 5,
      title: "밥먹기",
      desc: "밥을 맛깔나게 먹기",
      isDone: false,
    },
    {
      id: 6,
      title: "자기",
      desc: "잠을 맛깔나게 자기",
      isDone: true,
    },
  ]);
  // ----------------------------------------------------------------------------
  return (
    <main>
      <ListAddBox todos={todos} setTodo={setTodo} />
      <div className="list_wrap">
        <ListBox listTitle="Working" todos={todos} setTodo={setTodo} />
        <div className="listHr"></div>
        <ListBox listTitle="Done" todos={todos} setTodo={setTodo} />
      </div>
    </main>
  );
};

const App = () => {
  return (
    <div className="wrap">
      <Header />
      <Main />
    </div>
  );
};

export default App;
