import styled from "@emotion/styled";
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(props: { children: ReactNode }) {
  const { children } = props;

  return (
    <StyledLayout>
      <Header />
      <Body>{children}</Body>
      <Footer />
    </StyledLayout>
  );
}

const StyledLayout = styled.div`
  width: 100vw;
`;

const Body = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
