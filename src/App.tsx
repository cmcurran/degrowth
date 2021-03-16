import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import Header from "./Components/Header";
import SectionWithHeader from "./Components/SectionWithHeader";
import Nav from "./Components/Nav";
import Degrowth from "./Copy";

const App = () => {
  return (
    <Wrapper>
      <Nav content={Degrowth.nav} />

      <InnerWrapper>
        <Header text={Degrowth.header} />

        {Degrowth.sections.map((section, i) => {
          if (
            section.body.variant !== "xl" &&
            section.body.variant !== "paragraph" &&
            section.body.variant !== "glossary" &&
            section.body.variant !== "link"
          ) {
            return;
          }
          return (
            <SectionWithHeader
              key={i}
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
