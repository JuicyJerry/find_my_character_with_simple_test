import React from "react";

const Question2 = () => {
  const onClick = (e) => {
    e.preventDefault();
    console.log("clicked on q2");
  };

  return (
    <>
      <h1>Q</h1>
      <h1>친구들과 함께 찾은 음악 페스티벌.</h1>
      <h1>옆에 있던 사람들이 같이 놀자며.</h1>
      <h1>다가온다. 머릿속에 드는 생각은?</h1>
      <form>
        <input
          type="button"
          value="그냥 우리끼리 놀면 안 되나?"
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
