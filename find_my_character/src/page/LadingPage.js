import LadingPageImage from "../assets/images/LadingPageImage.svg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="App">
      <div>{"드라마&영화로 알아보는 나의 성향테스트(돋보기 이미지)"}</div>
      <div>{"당신은 어떤 컨텐츠 속 주인공인가요?"}</div>
      <img src={LadingPageImage} alt="LadingPageImage" />

      <Link to="../page/Questions" style={{ textDecoration: "none" }}>
        테스트 시작하기
      </Link>
    </div>
  );
};

export default LandingPage;
