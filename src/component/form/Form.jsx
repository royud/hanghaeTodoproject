import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listAdd } from "../../redux/modules/todos";

const Form = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const dispatch = useDispatch();
  const todoLists = useSelector((state) => state.todos.lists);

  // 제목 작성 state에 저장
  const titleWriting = (e) => {
    setTitle(e.target.value);
  };
  // 내용 작성 state에 저장
  const descWriting = (e) => {
    setDesc(e.target.value);
  };

  // 제목이랑 내용 둘 다 작성이 되어있을 때 todo배열에 넘김
  const listAdded = () => {
    if ((title !== "", desc !== "")) {
      const newList = {
        id: todoLists[todoLists.length - 1].id + 1,
        title: title,
        desc: desc,
        isDone: false,
      };
      //기존 배열에 newList 추가
      dispatch(listAdd(newList));

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
          onClick={listAdded}
          type="submit"
          value="추가하기"
        />
      </div>
    </div>
  );
};
export default Form;
