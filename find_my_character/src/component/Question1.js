import React from "react";
import Question1MainImage from "../assets/images/[Question1Page]mainPicture.svg";
import ted from "../assets/images/[QuestionsPage]ted.svg";

const Question1 = () => {
  const onClick = (e) => {
    e.preventDefault();
    console.log("clicked on q1");
  };

  return (
    <>
      <header>
        <div></div>
        <div></div>
      </header>
      <div>1/3</div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <img src={ted} alt="tedImage" />
      <h1>Q</h1>
      <h1>새로운 사람과의 첫 대면.</h1>
      <h1>어색한 정적만 흐르고 있다.</h1>
      <h1>이럴 때 나는?</h1>
      <img src={Question1MainImage} alt="Question1MainImage" />
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
