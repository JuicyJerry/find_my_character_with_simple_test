import ladingPageImage from "../assets/images/ladingPageImage.svg";
import { Link } from "react-router-dom";
import search from "../assets/images/search.svg";
import landingPageTitle from "../assets/images/landingPageTitle.svg";
import "../assets/css/App.css";

const LandingPage = () => {
  return (
    <div className="App">
      <div className="LandingPageSubTitle">
        <div className="LandingPageSubTitleHeader"></div>
        <div className="LandingPageSubTitle">
          {"드라마&영화로 알아보는 나의 성향테스트"}
        </div>
        <img id="search" src={search} />
      </div>
      {/* <div id="LandingPageTitle">{"당신은 어떤 컨텐츠 속 주인공인가요?"}</div> */}
      <img
        id="LandingPageTitle"
        src={landingPageTitle}
        alt="landingPageTitle"
      />
      <img id="ladingPageImage" src={ladingPageImage} alt="ladingPageImage" />

      <Link
        to="../page/Questions"
        className="testStartBtn"
        style={{ textDecoration: "none" }}
      >
        테스트 시작하기
      </Link>
    </div>
  );
};

export default LandingPage;
