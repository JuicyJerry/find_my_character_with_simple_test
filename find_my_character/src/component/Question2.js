import React from "react";
import Question2MainImage from "../assets/images/[Question2Page]mainPicture.svg";
import ted from "../assets/images/[QuestionsPage]ted.svg";

const Question2 = () => {
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
      <div>2/3</div>
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <img src={ted} alt="tedImage" />
      <h1>Q</h1>
      <h1>친구들과 함께 찾은 음악 페스티벌.</h1>
      <h1>옆에 있던 사람들이 같이 놀자며</h1>
      <h1>다가온다. 머릿속에 든 생각은?</h1>
      <img src={Question2MainImage} alt="Question2MainImage" />
      <form>
        <input
          type="button"
          value="그냥 우리끼리 놀면 안 되나?."
          onClick={onClick}
        ></input>
        <input
          type="button"
          value="같이 놀면 더 재미있을 것 같은데!"
          onClick={onClick}
        ></input>
      </form>
    </>
  );
};

export default Question2;
