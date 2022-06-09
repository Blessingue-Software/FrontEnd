import styled from "styled-components";

export const LoginInput = styled.input`
  display: block;
  width: 100%;
  height: 10px;
  margin-bottom: 10px;
  margin-top: 5px;
  padding: 20px 20px;
  border-radius: 8px;
  border: 1px solid #6e92fa;
  &::placeholder {
    font-size: 16px;
    // padding-left: -10px;
  }
`;

export const Signup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const SignupInput = styled.input`
  display: block;
  width: 60%;
  height: 8px;
  margin: 0 auto;
  margin-bottom: 45px;
  padding: 20px;
  font-size: 24px;
  border-radius: 12px;
  border: 1px solid #6e92fa;
`;
export const SignupLabel = styled.label`
  font-size: 18px;
  display: block;
  margin: 0 auto;
  font-weight: 700;
`;

export const LoginLabel = styled.label`
  font-size: 18px;
  display: block;
  font-weight: 700;
`;

export const RedStar = styled.span`
  color: red;
  display: inline;
`;
export const Nav = styled.li`
  text-align: center;
  display: block;
  color: #787878;
  font-size: 24px;
  text-align: center;
`;
export const LoginButton = styled.button`
  display: block;
  background-color: #6e92fa;
  color: #ffffff;
  border: 0;
  border-radius: 8px;
  width: 100%;

  height: 54px;
  text-align: center;
  margin: 50px auto 30px auto;
  font-size: 24px;
  font-weight: 900;
  &:hover {
    background-color: #61dafb;
    transition: 0.3s;
  }
  transition: 0.3s;
`;

export const LoginBottom = styled.a`
  display: block;
  color: #000000;
  padding: 0 10px;
  font-size: 12px;
  text-decoration-line: none;
  &:hover {
    color: #6e92fa;
    transition: 0.3s;
  }
  transition: 0.3s;
`;
export const SignupButton = styled.button`
  display: block;
  background-color: #6e92fa;
  color: #ffffff;
  border: 0;
  border-radius: 12px;
  margin: 0 auto;
  width: 80%;
  height: 72px;
  text-align: center;
  font-size: 24px;
  font-weight: 900;
  &:hover {
    background-color: #61dafb;
    transition: 0.3s;
  }
  transition: 0.3s;
`;

export const SignupCancelButton = styled.button`
  display: block;
  background-color: #cccccc;
  color: #ffffff;
  border: 0;
  border-radius: 12px;
  width: 150px;
  height: 72px;
  margin: 24px auto;
  font-size: 24px;
  font-weight: 900;
  &:hover {
    background-color: #b1b1b1;
    transition: 0.3s;
  }
  transition: 0.3s;
`;

export const BtnFlex = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const Flex = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const BlueTopBar = styled.hr`
  display: block;
  width: 15%;
  height: 5px;
  background-color: #6e92fa;
  margin: 36px auto;
  border: 0;
`;

export const BlueTopBar_Signup = styled.hr`
  display: block;
  width: 30%;
  height: 5px;
  background-color: #63500f692fa;
  margin: 36px auto;
  border: 0;
`;

export const MainText = styled.a`
  text-align: center;
  display: block;
  color: #6e92fa;
  transition: 0.3s;
  font-size: 24px;
  &:hover {
    animation: rainbow 5s infinite linear;
    transition: 0.3s;
    @keyframes rainbow {
      0% {
        color: red;
      }
      10% {
        color: orange;
      }
      23% {
        color: yellow;
      }
      36% {
        color: yellowgreen;
      }
      49% {
        color: green;
      }
      62% {
        color: blue;
      }
      74% {
        color: indigo;
      }
      86% {
        color: purple;
      }
      100% {
        color: red;
      }
    }
  }
`;
export const LoginMainText = styled.p`
  text-align: center;
  display: block;
  color: #6e92fa;
  font-size: 36px;
  font-weight: bold;
`;
export const OverlapButton = styled.button`
  display: flex;
  background-color: #6e92fa;
  color: #ffffff;
  border-radius: 4px;
  border: 0;
  height: 24px;
  font-size: 12px;
  text-align: center;
  align-items: center;
`;

export const LoginMenu = styled.div`
  display: inline-block;
  justify-content: center;
  align-items: center;
`;
