import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import "./App.css";
import LoginPage from "./components/LoginPage/LoginPage";
const GlobalStyle = createGlobalStyle`



body {
  font-family: 'Kodchasan';
  font-weight: 400;
}

h1, h2, h3, h4, h5 {
  font-family: 'Kodchasan';
  font-weight: 700;
}

html {font-size: 100%;} /* 16px */

h1 {font-size: 4.210rem; /* 67.36px */}

h2 {font-size: 3.158rem; /* 50.56px */}

h3 {font-size: 2.369rem; /* 37.92px */}

h4 {font-size: 1.777rem; /* 28.48px */}

h5 {font-size: 1.333rem; /* 21.28px */}

small {font-size: 0.750rem; /* 12px */}
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  flex-direction: column;
  object-fit: cover;
  @media (max-width: 768px) {
    background-color: #c8af9b;
    background-image: none;
  }
  @media (max-width: 820px) {
    background-color: #c8af9b;
  }
  @media (max-width: 320px) {
    background-color: #c8af9b;
  }
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <LoginPage />
      </Container>
    </>
  );
}

export default App;
