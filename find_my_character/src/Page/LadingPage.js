const LandingPage = () => {
  const onClick = (e) => {
    e.preventDefault();
    console.log("clicked");
  };

  return (
    <div className="App">
      <div>{"드라마&영화로 알아보는 나의 성향테스트(돋보기 이미지)"}</div>
      <div>{"당신은 어떤 컨텐츠 속 주인공인가요?"}</div>

      <form>
        <input type="button" value="테스트 시작하기" onClick={onClick}></input>
      </form>
    </div>
  );
};

export default LandingPage;
