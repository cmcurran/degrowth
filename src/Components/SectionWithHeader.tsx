import styled from "styled-components";

const SectionWithHeader = ({
  section,
  header,
  body,
  variant,
}: {
  section: string;
  header: string;
  body: string[];
  variant: "xl" | "paragraph";
}) => (
  <Wrapper>
    <HeaderWrapper>
      <Section>{section}</Section>
      <Header>{header}</Header>
    </HeaderWrapper>
    {body.map((item) => (
      <Body variant={variant}>{item}</Body>
    ))}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 6rem;
`;

const HeaderWrapper = styled.div`
  text-transform: uppercase;
  display: flex;
  align-items: flex-start;
  padding-bottom: 4rem;
`;

const Section = styled.span`
  font-family: "MG Mono";
  color: #00ff29;
  font-size: 26px;
  line-height: 47px;
  padding-right: 0.75rem;
`;

const Header = styled.span`
  font-family: "Suisse";
  font-size: 54px;
`;

const Body = styled.div<{ variant: "xl" | "paragraph" }>`
  font-family: "Suisse";
  font-size: ${({ variant }) => (variant === "xl" ? "36px" : "28px")};
  padding-bottom: 2rem;
`;

export default SectionWithHeader;
