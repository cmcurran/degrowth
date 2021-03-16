import styled from "styled-components";

const SectionWithHeader = ({
  section,
  header,
  body,
  variant,
}: {
  section: string;
  header: string;
  body: any;
  variant: "xl" | "paragraph" | "glossary" | "link";
}) => (
  <Wrapper>
    <HeaderWrapper id={header}>
      <Section>{section}</Section>
      <Header>{header}</Header>
    </HeaderWrapper>

    {(variant === "xl" || variant === "paragraph") &&
      body.map((item: string, i: number) =>
        variant === "xl" ? (
          <BodyXL key={i}>{item}</BodyXL>
        ) : (
          <Body key={i}>{item}</Body>
        )
      )}

    {variant === "glossary" && (
      <ColumnInnerWrapper>
        {body.map((item: { word: string; definition: string }) => (
          <ColumnInnerWrapper key={item.word}>
            <GlossaryHeader>{item.word}</GlossaryHeader>
            <Body>{item.definition}</Body>
          </ColumnInnerWrapper>
        ))}
      </ColumnInnerWrapper>
    )}

    {variant === "link" && (
      <ColumnInnerWrapper>
        {body.map((item: { text: string; url?: string }, i: number) =>
          item.url ? (
            <BibliographyLink href={item.url} target="_blank" key={item.text}>
              {item.text}
            </BibliographyLink>
          ) : (
            <BibliographyLink as="div" variant="noLink" key={item.text}>
              {item.text}
            </BibliographyLink>
          )
        )}
      </ColumnInnerWrapper>
    )}
  </Wrapper>
);

const BibliographyLink = styled.a<{ variant?: "noLink" }>`
  font-family: "Suisse";
  /* font-size: 28px; */
  font-size: 1.458vw;
  font-size: calc(var(--vw, 1vw) * 1.458);
  color: white;
  text-decoration: none;
  /* padding-bottom: 16px; */
  padding-bottom: 0.833vw;
  padding-bottom: calc(var(--vw, 1vw) * 0.833);

  :hover {
    color: ${({ variant }) => variant !== "noLink" && "#00ff29"};
    text-decoration: ${({ variant }) => variant !== "noLink" && "underline"};
  }
`;
// line-height: 7.395vw;
//   line-height: calc(var(--vw, 1vw) * 7.395);
const GlossaryHeader = styled.div`
  font-family: "MG Mono";
  color: #00ff29;
  /* font-size: 28px; */
  font-size: 1.458vw;
  font-size: calc(var(--vw, 1vw) * 1.458);
  /* padding-bottom: 16px; */
  padding-bottom: 0.833vw;
  padding-bottom: calc(var(--vw, 1vw) * 0.833);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* padding-bottom: 96px; */
  padding-bottom: 5vw;
  padding-bottom: calc(var(--vw, 1vw) * 5);
`;

const ColumnInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderWrapper = styled.div`
  text-transform: uppercase;
  display: flex;
  align-items: flex-start;
  /* padding-bottom: 64px; */
  padding-bottom: 3.333vw;
  padding-bottom: calc(var(--vw, 1vw) * 3.333);
`;

const Section = styled.span`
  font-family: "MG Mono";
  color: #00ff29;
  /* font-size: 26px; */
  font-size: 1.354vw;
  font-size: calc(var(--vw, 1vw) * 1.354);
  /* line-height: 47px; */
  line-height: 2.447vw;
  line-height: calc(var(--vw, 1vw) * 2.447);
  /* padding-right: 12px; */
  padding-right: 0.625vw;
  padding-right: calc(var(--vw, 1vw) * 0.625);
`;

const Header = styled.span`
  font-family: "Suisse";
  /* font-size: 54px; */
  font-size: 2.8125vw;
  font-size: calc(var(--vw, 1vw) * 2.8125);
`;
/* font-size: ${({ variant }) => (variant === "xl" ? "36px" : "28px")}; */
const Body = styled.div`
  font-family: "Suisse";

  font-size: 1.458vw;
  font-size: calc(var(--vw, 1vw) * 1.458);
  /* padding-bottom: 32px; */
  padding-bottom: 1.666vw;
  padding-bottom: calc(var(--vw, 1vw) * 1.666);
`;

const BodyXL = styled(Body)`
  /* 32px */
  font-size: 1.875vw;
  font-size: calc(var(--vw, 1vw) * 1.875);
`;
export default SectionWithHeader;
