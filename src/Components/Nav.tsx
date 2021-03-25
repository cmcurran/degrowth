import React, { useRef, useState, useLayoutEffect } from "react";
import styled from "styled-components";
import { IconHamburger, IconX } from "./NavIcons";

const Nav = ({
  content,
  betaBottom,
  show,
}: {
  content: { section: string; title: string }[];
  betaBottom: number | null;
  show: boolean;
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
  }, [wrapperRef]);

  return (
    <>
      <NavSmall content={content} />
      <NavLarge
        betaBottom={betaBottom}
        height={height}
        wrapperRef={wrapperRef}
        content={content}
      />
    </>
  );
};

const NavSmall = ({
  content,
}: {
  content: {
    section: string;
    title: string;
  }[];
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      {!isOpen && (
        <IconWrapper onClick={() => setIsOpen(true)}>
          <IconHamburger />
        </IconWrapper>
      )}
      <WrapperSmall open={isOpen}>
        <InnerWrapperSmall>
          <NavWrapperSmall>
            <Header>nav</Header>
            {content.map((item) => (
              <NavLink
                href={`#${item.title}`}
                key={item.title}
                onClick={() => setIsOpen(false)}
              >
                <SectionTag>{item.section}</SectionTag>
                {item.title}
              </NavLink>
            ))}
          </NavWrapperSmall>
        </InnerWrapperSmall>
        <IconWrapper onClick={() => setIsOpen(false)}>
          <IconX />
        </IconWrapper>
      </WrapperSmall>
      {/* {isOpen && (
     
      )} */}
    </>
  );
};

const NavLarge = ({
  betaBottom,
  height,
  wrapperRef,
  content,
}: {
  betaBottom: number | null;
  height: number | null;
  wrapperRef: React.RefObject<HTMLDivElement>;
  content: {
    section: string;
    title: string;
  }[];
}) => (
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

const WrapperSmall = styled.div<{ open: boolean }>`
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition: all 0.2s ease-in;
  pointer-events: ${({ open }) => !open && "none"};

  padding: 2vw;
  padding: calc(var(--vw, 1vw) * 2);

  background-color: black;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;

  @media (min-width: 750px) {
    display: none;
  }
`;

const InnerWrapperSmall = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #00ff29;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavWrapperSmall = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconWrapper = styled.div`
  /* background-color: magenta; */
  background-color: black;
  position: fixed;
  cursor: pointer;

  top: 6.1vw;
  top: calc(var(--vw, 1vw) * 6.1);

  right: 6.1vw;
  right: calc(var(--vw, 1vw) * 6.1);

  width: 9vw;
  width: calc(var(--vw, 1vw) * 9);

  height: 9vw;
  height: calc(var(--vw, 1vw) * 9);

  @media (min-width: 750px) {
    display: none;
  }
`;

const Wrapper = styled.div<{ top: number | null; height: number | null }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  /* right: 350px;
  top: 430px; */
  right: 18.229vw;
  right: calc(var(--vw, 1vw) * 18.229);
  /* top: 45.31vh;
  top: calc(var(--vh, 1vh) * 45.31); */
  top: ${({ top, height }) =>
    top && height ? `${top - height}px` : "491.515625px"};

  @media (max-width: 749px) {
    display: none;
  }

  @media (max-width: 1249px) {
    right: 3vw;
    right: calc(var(--vw, 1vw) * 3);
    top: ${({ top, height }) =>
      top && height ? `${top - height}px` : "470px"};
  }
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

  @media (max-width: 749px) {
    font-size: 4vw;
    font-size: calc(var(--vw, 1vw) * 4);
  }

  @media (min-width: 750px) and (max-width: 1249px) {
    font-size: 1vw;
    font-size: calc(var(--vw, 1vw) * 1);
    padding-bottom: 0vw;
  }
`;

const SectionTag = styled(Header)`
  position: absolute;
  /* left: -19.2px; */
  left: -1vw;
  left: calc(var(--vw, 1vw) * -1);
  /* top: 4.512px; */
  top: 0.475vh;
  top: calc(var(--vh, 1vh) * 0.475);

  @media (max-width: 749px) {
    font-size: 3vw;
    font-size: calc(var(--vw, 1vw) * 3);

    left: -5vw;
    left: calc(var(--vw, 1vw) * -5);

    top: 1.2vh;
    top: calc(var(--vw, 1vw) * 1.2);
  }

  @media (min-width: 750px) and (max-width: 1249px) {
    left: -1.5vw;
    left: calc(var(--vw, 1vw) * -1.5);
    top: 0.3vh;
    top: calc(var(--vh, 1vh) * 0.3);
  }
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

  @media (max-width: 749px) {
    font-size: 7vw;
    font-size: calc(var(--vw, 1vw) * 7);
  }

  @media (min-width: 750px) and (max-width: 1249px) {
    font-size: 1.7vw;
    font-size: calc(var(--vw, 1vw) * 1.7);
  }

  :hover {
    color: #00ff29;
    text-decoration: underline;
  }
`;

export default Nav;
