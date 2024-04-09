import { StyledApp } from "./App.styled";
import GlobalStyle from "./globalStyles";
import Container from "./Components/Container/Container";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Sidebar />
        <Container>
          <Header />
          <Content />
        </Container>
      </StyledApp>
    </>
  );
}

export default App;
