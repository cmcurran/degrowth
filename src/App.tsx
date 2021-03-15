import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import Header from "./Components/Header";
import SectionWithHeader from "./Components/SectionWithHeader";
import Degrowth from "./Copy";
const App = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Header text={Degrowth.header} />

        {Degrowth.sections.map((section) => {
          if (
            section.body.variant !== "xl" &&
            section.body.variant !== "paragraph"
          ) {
            return;
          }
          return (
            <SectionWithHeader
              section={section.header.section}
              header={section.header.title}
              variant={section.body.variant}
              body={section.body.copy}
            />
          );
        })}
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-left: 10vw;
  padding-top: 4vh;
  width: 100%;
`;

const InnerWrapper = styled.div`
  width: 55%;
`;

export default App;
