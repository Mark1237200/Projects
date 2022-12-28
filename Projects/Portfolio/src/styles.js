import styled from "styled-components";

const Section = styled.section`
  margin: 0 auto;
`;

const Career = styled.div`
  font-size: 1px;
`;

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 20px 0px;
  font-size: 50px;
  font-family: "DoHyeon-Regular";
  letter-spacing: 5px;
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
    animation: SlidingWord 2s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
  > span:nth-child(2) {
    opacity: 0;
    animation: SlidingWord 2s;
    animation-delay: 2.5s;
    animation-fill-mode: forwards;
  }
  > span:nth-child(3) {
    opacity: 0;
    animation: SlidingWord 2s;
    animation-delay: 4s;
    animation-fill-mode: forwards;
  }
`;

export { Career, Aside, Section };
