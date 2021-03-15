import styled from "styled-components";

const Header = ({ text }: { text: string }) => (
  <Wrapper>
    {text} <BetaTag>beta</BetaTag>
  </Wrapper>
);

const Wrapper = styled.div`
  text-transform: uppercase;
  font-family: "Suisse";
  font-size: 142px;
  line-height: 142px;
  height: 100vh;
`;

const BetaTag = styled.span`
  font-family: "MG Mono";
  color: #00ff29;
  font-size: 20px;
  margin-left: -2rem;
`;
export default Header;
