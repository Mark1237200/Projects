import styled from "styled-components";

const Main = styled.main`
  margin: 0 auto;
  padding-top: 100px;
`;

const Section = styled.section`
  font-family: "DoHyeon-Regular";
`;

const FirstInfo = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 100px;
  @media (max-width: 1050px) {
    justify-content: center;
  }
`;

const SecondInfo = styled.article`
  display: flex;
`;

const Side = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  min-width: 200px;
  gap: 20px 0px;
  font-size: 50px;
  letter-spacing: 5px;
  justify-content: center;
  @keyframes SlidingWord {
    0% {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
  > span:nth-child(1) {
    opacity: 0;
    animation: SlidingWord 1s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
  > span:nth-child(2) {
    opacity: 0;
    animation: SlidingWord 1s;
    animation-delay: 2s;
    animation-fill-mode: forwards;
  }
  > span:nth-child(3) {
    opacity: 0;
    animation: SlidingWord 1s;
    animation-delay: 3s;
    animation-fill-mode: forwards;
  }
`;

const Career = styled.div`
  width: 680px;
  opacity: 0;
  animation: SlidingCareer 2s;
  animation-delay: 4s;
  animation-fill-mode: forwards;
  > div {
    padding: 20px 10px;
    border: 3px solid black;
    border-radius: 20px;
  }
  > h1 {
    font-size: 30px;
    margin: 0;
    padding: 10px;
    text-align: center;
  }
  @keyframes SlidingCareer {
    0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
`;

const Skills = styled.div`
  display: flex;
  gap: 15%;
  > :last-child {
    text-align: center;
    > h4 {
      margin: 0px;
      padding: 5px;
    }
    > img {
      display: flex;
      padding: 3px;
    }
  }
  > div > div > img {
    padding: 3px;
  }
`;

export { Career, Side, Section, Main, Skills, FirstInfo, SecondInfo };
