import * as React from "react";

import styled from "styled-components";

/**
 * This is a the main React component for the pageds.
 */
const playground = () => (
  <Page>
    <Header>
      <HeaderContainer>
        <Logo />
      </HeaderContainer>
    </Header>
    <Content>
      <Form>
        <Text kind="heading">
          Welcome back,
          <br /> let’s log in
        </Text>
        <Input label="Email" />
        <Input label="Password" />
        <Button>
          <Text kind="label">Log me in please</Text>
        </Button>
      </Form>
    </Content>
    <Footer>Made with ❤️ by Dom</Footer>
  </Page>
);

// The input
// ==========================================================

interface InputProps {
  label: string;
}

const Input: React.FC<InputProps> = (props) => {
  const { label } = props;
  return (
    <Label>
      <Text kind="label">{label}</Text>
      <BaseInput />
    </Label>
  );
};

const BaseInput = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  margin-top: 5px;
  padding: 5px 10px;
  box-sizing: border-box;
  border: 1px solid lightsalmon;
  color: lightsalmon;
  background: transparent;
  outline: none;
`;

const Label = styled.label`
  display: block;
  width: 100%;
`;

// Just a bunch of building block components for the page
// ==========================================================
const Page = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  overflow-x: auto;
  box-sizing: border-box;
  background: hsl(220, 50%, 2%);
  color: lightsalmon;
  border: 7px solid lightsalmon;

  font-family: Helvetica;
  -webkit-font-smoothing: antialiased;
`;

const Header = styled.div`
  flex: none;
`;

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1320px;
  padding: 0 30px;
  box-sizing: border-box;
  margin: auto;
`;

const Logo = styled.span`
  display: block;
  width: 50px;
  height: 50px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 70px 60px 0 0;
  border-color: lightsalmon transparent transparent transparent;
`;

const Content = styled.div`
  flex: auto;
  overflow-y: auto;
  overflow-x: none;
`;

const Footer = styled.div`
  flex: none;
  color: hsl(220, 10%, 70%);
  font-size: 14px;
  text-align: center;
  padding: 10px 0 40px;
`;

const Form = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 30px;
  margin: 100px auto 0px;

  display: grid;
  grid-row-gap: 40px;

  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 15px 20px;
  background: lightsalmon;
  color: black;
  border: none;
  cursor: pointer;
`;

// Text
// ==========================================================

const typo = {
  heading: {
    fontFamily: "Helvetica",
    fontSize: "70px",
    fontWeight: "bold",
    element: "h1",
    textTransform: "none",
  },
  system: {
    fontFamily: "Helvetica",
    fontSize: "14px",
    fontWeight: "bold",
    element: "p",
    textTransform: "none",
  },
  label: {
    fontFamily: "Helvetica",
    fontSize: "12px",
    fontWeight: "bold",
    element: "p",
    textTransform: "uppercase",
  },
};

interface Props {
  /** Typography kind */
  kind: "heading" | "system" | "label";
}

const Text = styled.span.attrs((props: Props) => ({
  as: typo[props.kind].element,
}))<Props>`
  font-family: ${(p) => typo[p.kind].fontFamily};
  font-size: ${(p) => typo[p.kind].fontSize};
  font-weight: ${(p) => typo[p.kind].fontWeight};
  text-transform: ${(p) => typo[p.kind].textTransform};

  margin: 0;

  /* Relative positioning for Hat placement */
  position: relative;
`;

export default playground;
