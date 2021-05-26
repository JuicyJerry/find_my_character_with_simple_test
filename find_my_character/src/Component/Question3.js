import React from "react";

const Question3 = () => {
  const onClick = (e) => {
    e.preventDefault();
    console.log("clicked on q1");
  };

  return (
    <>
      <h1>Q</h1>
      <h1>날씨 좋은 어느 날,</h1>
      <h1>일찍 퇴근하게 되었다.</h1>
      <h1>이 때 나는?</h1>
      <form>
        <input
          type="button"
          value="이런 날 그냥 집에 갈 수 없지! 만날 친구를 찾는다."
          onClick={onClick}
        ></input>
        <input
          type="button"
          value="기분좋게 집에 간다."
          onClick={onClick}
        ></input>
      </form>
    </>
  );
};

export default Question3;
