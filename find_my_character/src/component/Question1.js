import React from "react";

const Question1 = () => {
  const onClick = (e) => {
    e.preventDefault();
    console.log("clicked on q1");
  };

  return (
    <>
      <h1>Q</h1>
      <h1>새로운 사람과의 첫 대면.</h1>
      <h1>어색한 정적만 흐르고 있다.</h1>
      <h1>이럴 때 나는?</h1>
      <form>
        <input
          type="button"
          value="상대가 말을 꺼낼 때까지 기다린다."
          onClick={onClick}
        ></input>
        <input type="button" value="먼저 말을 꺼낸다" onClick={onClick}></input>
      </form>
    </>
  );
};

export default Question1;
