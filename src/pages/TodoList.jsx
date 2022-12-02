import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { useSelector } from "react-redux";

const TodoListPage = () => {
  const navigate = useNavigate();

  const param = useParams();
  const todos = useSelector((state) => state.todos.lists).find(
    (todo) => todo.id === parseInt(param.id)
  );

  return (
    <Wrap>
      <Padding>
        <button
          onClick={() => {
            navigate(`/`);
          }}
        >
          이전으로
        </button>
        <Title>
          {todos.title}
          <div>페이지 번호 : {todos.id}</div>
        </Title>

        <div>{todos.desc}</div>
      </Padding>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  color: #454545;
  border: 1px solid rgb(86, 48, 121);
  border-radius: 10px;
  button {
    border: none;
    padding: 5px;
    border-radius: 5px;
    background-color: rgb(86, 48, 121);
    color: white;
    cursor: pointer;
  }
`;
const Padding = styled.div`
  margin: 20px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  border-bottom: 1px solid rgb(213, 213, 213);
  padding-bottom: 20px;
  margin-bottom: 20px;
  div {
    font-size: 13px;
    font-weight: normal;
  }
`;
export default TodoListPage;
