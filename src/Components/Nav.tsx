import styled from "styled-components";

const Nav = ({
  content,
}: {
  content: { section: string; title: string }[];
}) => (
  <Wrapper>
    <Header>nav</Header>
    {console.log(content)}
    {content.map((item) => (
      <NavLink href={`#${item.title}`}>
        <SectionTag>{item.section}</SectionTag>
        {item.title}
        {console.log(item.title)}
      </NavLink>
    ))}
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 350px;
  top: 430px;
`;

const Header = styled.div`
  color: #00ff29;
  font-family: "MG Mono";
  text-transform: uppercase;
  font-size: 12px;
  padding-bottom: 0.25rem;
`;

const SectionTag = styled(Header)`
  position: absolute;
  left: -1.2rem;
  top: 0.282rem;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  font-family: "Suisse";
  font-size: 24px;
  text-transform: uppercase;
  position: relative;

  :hover {
    color: #00ff29;
    text-decoration: underline;
    /* border-bottom: 1px solid #00ff29; */
  }
`;

export default Nav;
