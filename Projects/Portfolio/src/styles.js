import styled from "styled-components";

const Career = styled.div`
  font-size: 1px;
`;

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 20px 0px;
  font-size: 30px;
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
  > span:nth-of-type(1) {
    animation-delay: 0.5s;
    animation: SlidingWord 2s;
  }
  > span:nth-of-type(2) {
    animation-delay: 1.5s;
    animation: SlidingWord 2s;
  }
`;

export { Career, Aside };
