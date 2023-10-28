import styled from "styled-components";
import { FcGoogle } from "react-icons/Fc";
import { AiFillGithub } from "react-icons/ai";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 80%;
  // background-color: #1e1e1f;
  // border: 1px solid #1e1e1e;s
  // padding: 2rem;

  @media (max-width: 768px && max-height: 1024px && max-width: 425px && portrait) {
    padding: 0;
    width: 100%;
    height: 100%;
  }
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 60%;
  height: 80%;
  // background-color: #1e1e1f;
  // border: 1px solid #1e1e1e;
  padding: 2rem;
  @media (max-width: 768px && max-height: 1024px && max-width: 425px && portrait) {
    padding: 0;
    width: 100%;
    height: 100%;
  }
`;

const InputForm = styled.input.attrs(() => ({}))`
  height: 3rem;
  border-radius: 2rem;
  text-align: center;
  font-size: 1.2rem;
  transition: all 0.2s ease-in-out;
  &:active {
    border: 2px solid #18bf8d;
  }

  &:hover {
    border: 2px solid #18bf8d;
    box-shadow: 0 0 0 1px #fff, 0 0 0 8px rgba(24, 191, 141, 0.2);
  }
`;

const Text = styled.p`
  font-size: 0.9rem;
  margin-left: 1rem;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-left: 1rem;
  }
  @media (max-width: 425px) {
    font-size: 0.7rem;
    margin-left: 1rem;
  }
`;
const TextCenter = styled.p`
  font-size: 0.9rem;
  margin-left: 1rem;
  font-weight: 700;

  text-align: center;
  position: relative;
  &:after {
    content: " ";
    position: absolute;
    border-bottom: 1px solid #1e1e1e;
    top: 50%;
    width: 25%;
    right: 5%;
  }
  &:before {
    content: " ";
    position: absolute;
    border-bottom: 1px solid #1e1e1e;
    top: 50%;
    width: 25%;
    left: 5%;
  }
  @media (max-width: 425px) {
    &:after {
      content: " ";
      position: absolute;
      border-bottom: 1px solid #1e1e1e;
      top: 50%;
      width: 2%;
      right: 5%;
    }
    &:before {
      content: " ";
      position: absolute;
      border-bottom: 1px solid #1e1e1e;
      top: 50%;
      width: 2%;
      left: 5%;
    }
  }
  @media (max-height: 768px) {
    &:after {
      content: " ";
      position: absolute;
      border-bottom: 1px solid #1e1e1e;
      top: 50%;
      width: 10%;
      right: 5%;
    }
    &:before {
      content: " ";
      position: absolute;
      border-bottom: 1px solid #1e1e1e;
      top: 50%;
      width: 10%;
      left: 5%;
    }
  }
  @media (max-height: 1024px) {
    &:after {
      content: " ";
      position: absolute;
      border-bottom: 1px solid #1e1e1e;
      top: 50%;
      width: 25%;
      right: 5%;
    }
    &:before {
      content: " ";
      position: absolute;
      border-bottom: 1px solid #1e1e1e;
      top: 50%;
      width: 25%;
      left: 5%;
    }
  }
`;

const Heading = styled.h1`
  font-size: 3rem;
  text-align: center;
  // padding-bottom: 0;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-left: 1rem;
  }
`;

const Button = styled.button`
  position: relative;
  z-index: 5;
  margin-top: 1.3rem;
  height: 3.5rem;
  border-radius: 2rem;
  text-align: center;
  font-size: 1.2rem;
  background-color: #18bf8d;
  color: white;
  border: 2px solid #18bf8d;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #18bf8d;
    border: 2px solid #18bf8d;
    box-shadow: 0 0 0 4px #fff, 0 0 0 8px rgba(24, 191, 141, 0.2);
  }
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #1e1e1e;
  border-radius: 40%;
  padding: 0.5rem;
  cursor: pointer;

  transition: all 0.2s ease-in-out;
  &::hover {
    baclground-color: white;
  }
  @media (max-width: 768px) {
    background-color: white;
  }
  @media (max-width: 1440px) {
    background-color: white;
  }
`;
const Icons = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;
const Login = () => {
  return (
    <Container>
      <UserInfo>
        <Heading>Log in</Heading>
        <Text>Login, email or phone number</Text>
        <InputForm type="text" placeholder="Vinchi" />
        <Text>Password</Text>
        {/* <Passwords> */}
        <InputForm type="password" placeholder="......" />
        {/* <VscEye className="Eye" size={20} /> */}
        {/* </Passwords> */}
        <Button>Log in</Button>
        <TextCenter>or log in with</TextCenter>
        <Icons>
          <Icon>
            <FcGoogle size={30} />
          </Icon>
          <Icon>
            <AiFillGithub size={30} />
          </Icon>
        </Icons>
      </UserInfo>
    </Container>
  );
};

export default Login;
