import styled from "styled-components";
import Login from "./login";
// import logo from "/loginImg.jpeg";
import logoNobg from "/loginImgNobg.png";
const Container = styled.div`
  user-select: none;

  display: flex;
  justify-content: center;
  align-items: center;
  self-align: center;
  width: 100%;
  height: 100vh;
  // background-color: #c8af9b;
  border: 1px solid #1e1e1e;
  border-radius: 0.5rem;
`;

const Sides = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  @media (max-width: 768px) {
    // opacity: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`;

const LeftSide = styled(Sides)`
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #a3b585;
  @media (max-width: 768px) {
    flex: 0;
  }
`;
const RightSide = styled(Sides)`
  align-items: center;
  flex: 1;
  background-image: url("../public/right.jpeg");
  object-fit: cover;
  background-repeat: no-repeat;

`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  pointer-events: none;
  @media (max-width: 768px && max-width: 425px) {
    opacity: 0;
    background-image: url("../public/loginImgNobg.png");
    // background-repeat: no-repeat;
  }
`;
const LoginPage = () => {
  return (
    <Container>
      <LeftSide>
        <Img src={logoNobg} alt="logo" />

      </LeftSide>

      <RightSide>
        <Login />
      </RightSide>
    </Container>
  );
};

export default LoginPage;
