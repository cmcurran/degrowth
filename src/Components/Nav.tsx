import React, { useRef, useState, useLayoutEffect } from "react";
import styled from "styled-components";

const Nav = ({
  content,
  betaBottom,
}: {
  content: { section: string; title: string }[];
  betaBottom: number | null;
}) => {
  const [height, setHeight] = useState<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!window) {
      return;
    }
    const handleResize = () => {
      if (wrapperRef.current === null) {
        return;
      }
      setHeight(wrapperRef.current.getBoundingClientRect().height);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };

    console.log(height);
  }, [wrapperRef]);

  return (
    <Wrapper top={betaBottom} height={height} ref={wrapperRef}>
      <Header>nav</Header>

      {content.map((item) => (
        <NavLink href={`#${item.title}`} key={item.title}>
          <SectionTag>{item.section}</SectionTag>
          {item.title}
        </NavLink>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ top: number | null; height: number | null }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  /* right: 350px;
  top: 430px; */
  right: 18.229vw;
  right: calc(var(--vw, 1vw) * 18.299);
  top: 45.31vh;
  top: calc(var(--vh, 1vh) * 45.31);
  top: ${({ top, height }) =>
    top && height ? `${top - height}px` : "491.515625px"};
`;

const Header = styled.div`
  color: #00ff29;
  font-family: "MG Mono";
  text-transform: uppercase;
  /* font-size: 12px; */
  font-size: 0.625vw;
  font-size: calc(var(--vw, 1vw) * 0.625);
  /* padding-bottom: 4px; */
  padding-bottom: 0.208vw;
  padding-bottom: calc(var(--vw, 1vw) * 0.208);
`;

const SectionTag = styled(Header)`
  position: absolute;
  /* left: -19.2px; */
  left: -1vw;
  left: calc(var(--vw, 1vw) * -1);
  /* top: 4.512px; */
  top: 0.475vh;
  top: calc(var(--vh, 1vh) * 0.475);
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-family: "Suisse";
  /* font-size: 24px; */
  font-size: 1.25vw;
  font-size: calc(var(--vw, 1vw) * 1.25);
  text-transform: uppercase;
  position: relative;

  :hover {
    color: #00ff29;
    text-decoration: underline;
  }
`;

export default Nav;
