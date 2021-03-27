// import logo from "./logo.svg";
import React, { useState, useMemo } from "react";
import styled from "styled-components";
import Header from "./Components/Header";
import SectionWithHeader from "./Components/SectionWithHeader";
import Nav from "./Components/Nav";
import Degrowth from "./Copy.js";
import { useScrollPosition } from "./UseScrollPosition.js";

//TODO debounce window listeners?

// if on small view and nav open -> resize over 750 px -> setOpen(false)

//hover [1]

//turn off scroll position on larger screens

const App = () => {
  const [hideOnScroll, setHideOnScroll] = useState(true);
  useScrollPosition(
    ({ prevPos, currPos }: { prevPos: any; currPos: any }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll],
    false,
    false,
    300
  );

  return useMemo(
    () => (
      <Wrapper onClick={() => setHideOnScroll(true)}>
        <Nav content={Degrowth.nav} show={hideOnScroll} />

        <Header text={Degrowth.header} navContent={Degrowth.nav} />
        <InnerWrapper>
          {Degrowth.sections.map((section, i) => {
            return (
              <SectionWithHeader
                key={`SectionWithHeader${i}`}
                section={section.header.section}
                header={section.header.title}
                variant={section.body.variant}
                body={section.body.copy}
              />
            );
          })}
        </InnerWrapper>
      </Wrapper>
    ),
    [hideOnScroll]
  );
};

const Wrapper = styled.div`
  padding-left: 10vw;
  padding-left: calc(var(--vw, 1vw) * 10);

  @media (max-width: 749px) {
    padding-right: 10vw;
    padding-right: calc(var(--vw, 1vw) * 10);
  }

  width: 100%;
`;

const InnerWrapper = styled.div`
  width: 55%;

  @media (max-width: 749px) {
    width: 100%;
  }

  @media (min-width: 750px) and (max-width: 1249px) {
    width: 70%;
  }
`;

export default App;
