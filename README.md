### 컴포넌트

크게 header, main으로 구분

main의 반복적인 컴포넌트 -> working과 Done, TodoList
ListBox로 컴포넌트를 지정하여 working, done 부분을 컴포넌트로 나누어 props를 통해 안 데이터가 구분되도록 설정. 공통이 되는 리스트 state도 props를 통해 전달
props로 전달한 listTitle 값에 따라 listBox의 타이틀, 안의 리스트가 다르게 들어가도록 구성

TodoList를 ListBox에서 컴포넌트로 분리, 적용하던 데이터들을 props로 전달
todo.isDone의 상태에 따라 완료하기 버튼과 취소하기 버튼 구분
