import React, { Fragment } from "react";
import SlidingWord from "./components/SlidingWord";
import { Career, Aside, Section } from "./styles";

function App() {
  return (
    <Fragment>
      <Section>
        <Aside>
          <SlidingWord word="프론트엔드" />
          <SlidingWord word="김재원 주니어" />
          <SlidingWord word="포트폴리오 입니다" />
        </Aside>
        <article>
          <Career>
            <div>경력</div>
            <div></div>
          </Career>
        </article>
      </Section>
    </Fragment>
  );
}

export default App;
