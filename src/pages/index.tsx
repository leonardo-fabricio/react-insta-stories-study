import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Content></Content>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
`;
