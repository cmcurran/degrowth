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
      body.map((item: string, i: number) => (
        <Body key={i} variant={variant}>
          {item}
        </Body>
      ))}

    {variant === "glossary" && (
      <ColumnInnerWrapper>
        {body.map((item: { word: string; definition: string }) => (
          <ColumnInnerWrapper key={item.word}>
            <GlossaryHeader>{item.word}</GlossaryHeader>
            <Body variant={variant}>{item.definition}</Body>
          </ColumnInnerWrapper>
        ))}
      </ColumnInnerWrapper>
    )}

    {variant === "link" && (
      <ColumnInnerWrapper>
        {body.map((item: { text: string; url?: string }, i: number) =>
          item.url ? (
            <BibliographyLink href={item.url} target="_blank">
              {item.text}
            </BibliographyLink>
          ) : (
            <BibliographyLink as="div" variant="noLink">
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
  font-size: 28px;
  color: white;
  text-decoration: none;
  padding-bottom: 1rem;

  :hover {
    color: ${({ variant }) => variant !== "noLink" && "#00ff29"};
    text-decoration: ${({ variant }) => variant !== "noLink" && "underline"};
  }
`;

const GlossaryHeader = styled.div`
  font-family: "MG Mono";
  color: #00ff29;
  font-size: 28px;
  padding-bottom: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 6rem;
`;

const ColumnInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
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

const Body = styled.div<{ variant: "xl" | "paragraph" | "glossary" }>`
  font-family: "Suisse";
  font-size: ${({ variant }) => (variant === "xl" ? "36px" : "28px")};
  padding-bottom: 2rem;
`;

export default SectionWithHeader;
