import React from "react";
import tedProfilePicture from "../assets/images/[ResultPage]tedProfilePicture.svg";
import timProfilePicture from "../assets/images/[ResultPage]timProfilePicture.svg";
import merryProfilePicture from "../assets/images/[ResultPage]merryProfilePicture.svg";
import dweinProfilePicture from "../assets/images/[ResultPage]dweinProfilePicture.svg";
import kakaotalk from "../assets/images/kakaotalk.svg";
import twitter from "../assets/images/twitter.svg";
import share from "../assets/images/share.svg";
import { dataSet } from "../assets/data.json";
import { Link } from "react-router-dom";

const Result3 = () => {
  return (
    <>
      <div>{dataSet[2].title}</div>
      <div>{dataSet[2].name}</div>
      <div>
        <img src={timProfilePicture} alt="timProfilePicture" />
        <div>{dataSet[2].subTitle}</div>
      </div>

      <div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div>{dataSet[2].content}</div>
      </div>

      <div>
        <div>
          <div></div>
          <div></div>
        </div>
        만나면 좋은 캐릭터
        <img src={tedProfilePicture} alt="tedProfilePicture" />
        <div>{dataSet[2].positive}</div>
      </div>

      <div>
        <div>
          <div></div>
          <div></div>
        </div>
        거리두기가 필요해요
        <img src={dweinProfilePicture} alt="dweinProfilePicture" />
        <div>{dataSet[2].negative}</div>
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

export default Result3;
