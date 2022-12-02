// Action value
const LIST_ADD = "LIST_ADD";
const LIST_REMOVE = "LIST_REMOVE";
const LIST_UPDATE = "LIST_UPDATE";

// Action Creator
export const listAdd = (payload) => {
  return {
    type: LIST_ADD,
    payload,
  };
};
export const removeList = (payload) => {
  return {
    type: LIST_REMOVE,
    payload,
  };
};
export const updateList = (payload) => {
  return {
    type: LIST_UPDATE,
    payload,
  };
};

// 초기값
const initialState = {
  lists: [
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
  ],
};

// reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case LIST_ADD:
      return {
        lists: [...state.lists, action.payload],
      };
    case LIST_REMOVE:
      return {
        lists: [...action.payload],
      };
    case LIST_UPDATE:
      return {
        lists: [...action.payload],
      };
    default:
      return state;
  }
};

export default todos;
