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
  variant:
    | "xl"
    | "paragraph"
    | "glossary"
    | "link"
    | "shareButton"
    | "download";
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

    {variant === "shareButton" && (
      <ColumnInnerWrapper>
        <Body>{body.body}</Body>
        <ButtonLink href={body.button.url} target="_blank">
          {body.button.copy}
        </ButtonLink>
      </ColumnInnerWrapper>
    )}

    {variant === "download" && (
      <ColumnInnerWrapper>
        {body.map((item: { copy: string; url: string }, i: number) => (
          <ButtonLink key={i} href={item.url} download>
            {item.copy}
          </ButtonLink>
        ))}
      </ColumnInnerWrapper>
    )}
  </Wrapper>
);

const ButtonLink = styled.a`
  font-family: "MG Mono";
  color: #00ff29;
  text-decoration: none;
  font-size: 1.458vw;
  font-size: calc(var(--vw, 1vw) * 1.458);
  border: 1px solid #00ff29;
  align-self: flex-start;
  padding: 1rem 2rem;
  margin-top: 1rem;
  margin-bottom: 1rem;

  :hover {
    text-decoration: underline;
  }

  @media (max-width: 549px) {
    font-size: 5vw;
    font-size: calc(var(--vw, 1vw) * 5);
  }

  @media (min-width: 550px) and (max-width: 749px) {
    font-size: 2.9vw;
    font-size: calc(var(--vw, 1vw) * 2.9);
  }

  @media (min-width: 750px) and (max-width: 1249px) {
    font-size: 1.9vw;
    font-size: calc(var(--vw, 1vw) * 1.9);
  }
`;

const BibliographyLink = styled.a<{ variant?: "noLink" }>`
  font-family: "Suisse";
  /* font-family: ${({ variant }) =>
    variant === "noLink" ? "Suisse" : "MG Mono"}; */
  /* font-size: 28px; */
  font-size: 1.458vw;
  font-size: calc(var(--vw, 1vw) * 1.458);
  color: white;
  text-decoration: none;
  /* padding-bottom: 16px; */
  padding-bottom: 0.833vw;
  padding-bottom: calc(var(--vw, 1vw) * 0.833);
  text-decoration: ${({ variant }) => variant !== "noLink" && "underline"};

  @media (max-width: 549px) {
    font-size: 4vw;
    font-size: calc(var(--vw, 1vw) * 4);

    padding-bottom: 4vw;
    padding-bottom: calc(var(--vw, 1vw) * 4);
  }

  @media (min-width: 550px) and (max-width: 749px) {
    font-size: 3vw;
    font-size: calc(var(--vw, 1vw) * 3);

    padding-bottom: 3vw;
    padding-bottom: calc(var(--vw, 1vw) * 3);
  }

  @media (min-width: 750px) and (max-width: 1249px) {
    font-size: 1.9vw;
    font-size: calc(var(--vw, 1vw) * 1.9);

    padding-bottom: 1.5vw;
    padding-bottom: calc(var(--vw, 1vw) * 1.5);
  }

  :hover {
    color: ${({ variant }) => variant !== "noLink" && "#00ff29"};
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

  @media (max-width: 549px) {
    font-size: 5vw;
    font-size: calc(var(--vw, 1vw) * 5);

    padding-bottom: 2vw;
    padding-bottom: calc(var(--vw, 1vw) * 2);
  }

  @media (min-width: 550px) and (max-width: 749px) {
    font-size: 3.5vw;
    font-size: calc(var(--vw, 1vw) * 3.5);

    padding-bottom: 2vw;
    padding-bottom: calc(var(--vw, 1vw) * 2);
  }

  @media (min-width: 750px) and (max-width: 1249px) {
    font-size: 1.9vw;
    font-size: calc(var(--vw, 1vw) * 1.9);
  }
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

  @media (max-width: 549px) {
    font-size: 4vw;
    font-size: calc(var(--vw, 1vw) * 4);

    line-height: 7vw;
    line-height: calc(var(--vw, 1vw) * 7);

    padding-right: 2vw;
    padding-right: calc(var(--vw, 1vw) * 2);
  }

  @media (min-width: 550px) and (max-width: 749px) {
    font-size: 3vw;
    font-size: calc(var(--vw, 1vw) * 3);

    line-height: 5.3vw;
    line-height: calc(var(--vw, 1vw) * 5.3);

    padding-right: 2vw;
    padding-right: calc(var(--vw, 1vw) * 2);
  }

  @media (min-width: 750px) and (max-width: 1249px) {
    font-size: 1.8vw;
    font-size: calc(var(--vw, 1vw) * 1.8);

    line-height: 3.4vw;
    line-height: calc(var(--vw, 1vw) * 3.4);

    padding-right: 1vw;
    padding-right: calc(var(--vw, 1vw) * 1);
  }
`;

const Header = styled.span`
  font-family: "Suisse";
  /* font-size: 54px; */
  font-size: 2.8125vw;
  font-size: calc(var(--vw, 1vw) * 2.8125);

  @media (max-width: 549px) {
    font-size: 6.65vw;
    font-size: calc(var(--vw, 1vw) * 6.65);
  }

  @media (min-width: 550px) and (max-width: 749px) {
    font-size: 5.5vw;
    font-size: calc(var(--vw, 1vw) * 5.5);
  }

  @media (min-width: 750px) and (max-width: 1249px) {
    font-size: 3.7vw;
    font-size: calc(var(--vw, 1vw) * 3.7);
  }
`;
/* font-size: ${({ variant }) => (variant === "xl" ? "36px" : "28px")}; */
const Body = styled.div`
  font-family: "Suisse";

  font-size: 1.458vw;
  font-size: calc(var(--vw, 1vw) * 1.458);
  /* padding-bottom: 32px; */
  padding-bottom: 1.666vw;
  padding-bottom: calc(var(--vw, 1vw) * 1.666);

  @media (max-width: 549px) {
    font-size: 5vw;
    font-size: calc(var(--vw, 1vw) * 5);

    padding-bottom: 6vw;
    padding-bottom: calc(var(--vw, 1vw) * 6);
  }

  @media (min-width: 550px) and (max-width: 749px) {
    font-size: 2.9vw;
    font-size: calc(var(--vw, 1vw) * 2.9);

    padding-bottom: 4vw;
    padding-bottom: calc(var(--vw, 1vw) * 4);
  }

  @media (min-width: 750px) and (max-width: 1249px) {
    font-size: 1.9vw;
    font-size: calc(var(--vw, 1vw) * 1.9);

    padding-bottom: 2vw;
    padding-bottom: calc(var(--vw, 1vw) * 2);
  }
`;

const BodyXL = styled(Body)`
  /* 32px */
  font-size: 1.875vw;
  font-size: calc(var(--vw, 1vw) * 1.875);

  @media (max-width: 549px) {
    font-size: 6vw;
    font-size: calc(var(--vw, 1vw) * 6);
  }

  @media (min-width: 550px) and (max-width: 749px) {
    font-size: 3.7vw;
    font-size: calc(var(--vw, 1vw) * 3.7);
  }

  @media (min-width: 750px) and (max-width: 1249px) {
    font-size: 2.4vw;
    font-size: calc(var(--vw, 1vw) * 2.4);
  }
`;
export default SectionWithHeader;
