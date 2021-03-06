import React from "react";
import tedProfilePicture from "../assets/images/[ResultPage]tedProfilePicture.svg";
import timProfilePicture from "../assets/images/[ResultPage]timProfilePicture.svg";
import merryProfilePicture from "../assets/images/[ResultPage]merryProfilePicture.svg";
import kakaotalk from "../assets/images/kakaotalk.svg";
import twitter from "../assets/images/twitter.svg";
import share from "../assets/images/share.svg";
import { dataSet } from "../assets/data.json";
import { Link } from "react-router-dom";

const Result1 = () => {
  console.log();
  //   console.log(title);
  return (
    <>
      <div>{dataSet[0].title}</div>
      <div>{dataSet[0].name}</div>
      <div>
        <img src={tedProfilePicture} alt="tedProfilePicture" />
        <div>"테드 유형들의 영어 한마디"</div>
        <div>{dataSet[0].subTitle}</div>
      </div>

      <div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>{dataSet[0].content}</div>
      </div>

      <div>
        <div>
          <div></div>
          <div></div>
        </div>
        만나면 좋은 캐릭터
        <img src={timProfilePicture} alt="timProfilePicture" />
        <div>{dataSet[0].positive}</div>
      </div>

      <div>
        <div>
          <div></div>
          <div></div>
        </div>
        거리두기가 필요해요
        <img src={merryProfilePicture} alt="merryProfilePicture" />
        <div>{dataSet[0].negative}</div>
      </div>

      <div>
        <div>
          <div></div>
          <div></div>
        </div>
        결과 공유하고, 친구와 궁합 확인하기
        <img src={kakaotalk} alt="kakaotalk" />
        <img src={twitter} alt="twitter" />
        <img src={share} alt="share" />
      </div>
      <Link to="#" style={{ textDecoration: "none" }}>
        테스트 다시하기
      </Link>
    </>
  );
};

export default Result1;
