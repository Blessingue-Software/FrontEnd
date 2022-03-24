import styled from "styled-components";

export const LoginInput = styled.input`
  display: block;
  width: 30%;
  height: 48px;
  margin: 20px auto;
  padding: 20px;
  font-size: 24px;
  border-radius: 12px;
  border: 1px solid #ccc;
`;

export const Signup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const SignupInput = styled.input`
  display: block;
  width: 80%;
  height: 6px;
  margin: 10px 20px;
  padding: 20px;
  font-size: 24px;
  border-radius: 12px;
  border: 1px solid #6e92fa;
`;
export const SignupLabel = styled.label`
  font-size: 22px;
  font-weight: 700;
`;

export const RedStar = styled.span`
  font-size: 24px;
  color: red;
  display: inline;
`;

export const LoginButton = styled.button`
  display: block;
  background-color: #61dafb;
  color: #ffffff;
  border: 0;
  border-radius: 12px;
  width: 300px;
  height: 54px;
  margin: 48px auto;
  font-size: 24px;
  font-weight: 900;
  &:hover {
    background-color: #6e92fa;
    transition: 0.3s;
  }
  transition: 0.3s;
`;

export const LoginBottom = styled.a`
  display: block;
  color: #000000;
  margin: 0 auto;
  font-size: 12px;
  font-weight: 900;
  text-decoration-line: none;
  &:hover {
    color: #6e92fa;
    transition: 0.3s;
  }
  transition: 0.3s;
`;
export const SignupButton = styled.button`
  display: block;
  background-color: #61dafb;
  color: #ffffff;
  border: 0;
  border-radius: 12px;
  width: 200px;
  height: 72px;
  margin: 24px auto;
  margin-right: 10px;
  font-size: 24px;
  font-weight: 900;
  &:hover {
    background-color: #6e92fa;
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
`;

export const BlueTopBar = styled.hr`
  display: block;
  width: 30%;
  height: 5px;
  background-color: #61dafb;
  margin: 36px auto;
  border: 0;
`;

export const BlueTopBar_Signup = styled.hr`
  display: block;
  width: 30%;
  height: 5px;
  background-color: #61dafb;
  margin: 36px auto;
  border: 0;
`;

export const MainText = styled.h1`
  color: #61dafb;
  font-size: 36px;
  text-align: center;
`;
export const OverlapButton = styled.button`
  display: flex;
  background-color: #61dafb;
  color: #ffffff;
  border-radius: 4px;
  border: 0;
  height: 24px;
  font-size: 12px;
  text-align: center;
  align-items: center;
`;
