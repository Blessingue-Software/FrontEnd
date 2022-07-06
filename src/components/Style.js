import styled from "styled-components";
import { color } from "./style/color";

export const LoginInput = styled.input`
  display: block;
  width: 100%;
  height: 10px;
  margin-bottom: 15px;
  margin-top: 5px;
  padding: 20px 20px;
  border-radius: 8px;
  border: 1px solid ${color.main};
  &::placeholder {
    font-size: 16px;
  }
`;

export const LoginLabel = styled.label`
  font-size: 18px;
  display: block;
  font-weight: 700;
  color: ${color.main};
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

export const DisabledLoginButton = styled.button`
  display: block;
  background-color: #c8c8c8;
  color: #000000;
  border: 0;
  border-radius: 8px;
  width: 100%;
  height: 54px;
  text-align: center;
  margin: 50px auto 30px auto;
  font-size: 20px;
  font-weight: 900;
  transition: 0.3s;
`;

export const LoginButton = styled.button`
  display: block;
  background-color: ${color.main};
  color: #000000;
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
  color: #c8c8c8;
  padding: 0 10px;
  font-size: 12px;
  text-decoration-line: none;
  &:hover {
    color: ${color.main};
    transition: 0.3s;
  }
  transition: 0.3s;
`;

export const BlueTopBar = styled.hr`
  display: block;
  width: 15%;
  height: 5px;
  background-color: ${color.main};
  margin: 36px auto;
  border: 0;
`;

export const MainText = styled.a`
  text-align: center;
  display: block;
  color: ${color.main};
  transition: 0.3s;
  font-size: 24px;
  &:hover {
    animation: rainbow 5s infinite linear;
    transition: 0.3s;
    text-decoration: none;

    @keyframes rainbow {
      0% {
        color: red;
      }
      10% {
        color: orange;
      }
      23% {
        color: color.main;
      }
      36% {
        color: color.maingreen;
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
  color: ${color.main};
  font-size: 36px;
  font-weight: bold;
`;

export const Squre = styled.div`
  text-align: center;
  font-size: 36px;
  width: 20%;
  min-width: 160px;
  height: 15%;
  min-height: 100px;
  padding: 10px;
  margin: 100px 0 0 40px;
  background-color: ${color.grey};
`;
export const Num = styled.span`
  text-align: center;
  margin-top: 10px;
  display: block;
`;

export const Post = styled.ul`
  width: 800px;
  min-width: 300px;
  height: 300px;
  padding: 30px;
  margin: 40px 50px 100px 40px;
  background-color: #ccc;
  list-style: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const PostList = styled.li`
  font-size: 28px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  -ms-text-overflow: ellipsis;
`;

export const Month = styled.span`
  font-size: 24px;
  color: ${color.main};
`;
export const Day = styled.span`
  margin-top: 10px;
  margin-left: 4px;
  font-weight: bold;
`;
export const Date = styled.div`
  width: 80px;
  height: 80px;
  margin: 10px;
  font-size: 13px;
  background-color: ${color.darkGrey};
  border-radius: 4px;
  border: 2px solid ${color.darkGrey};
  // box-shadow: 3px 3px 3px 3px ${color.main};
`;
export const Today = styled.div`
  width: 80px;
  height: 80px;
  margin: 10px;
  background-color: ${color.main};

  border-radius: 4px;
  border: 4px solid ${color.main};
  // box-shadow: 3px 3px 3px 3px #e1e1e1;
`;
// background-color: rgb(197, 197, 197);

// ----------------------- Schedule --------------------
// ----------------------- Schedule --------------------
// ----------------------- Schedule --------------------

export const Schedule = styled.div`
  height: 750px;
`;
export const ScheduleTitle = styled.span`
  display: block;
  font-size: 36px;
  font-weight: bold;
  color: ${color.main};
  text-align: center;
`;
// text-align: center;
export const ScheduleBoard = styled.div`
  width: 26%;
  height: 750px;
  border-radius: 10px;
  margin: 0 auto;
  background-color: beige;
`;
export const ScheduleList = styled.li`
  font-size: 18px;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  -ms-text-overflow: ellipsis;
`;

export const TodayTitle = styled.span`
  display: block;
  padding-top: 12px;
  margin-bottom: 21px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: ${color.main};
`;
export const LongButton = styled.button`
  width: 80%;
  height: 32px;
  display: block;
  font-size: 18px;
  background-color: ${color.main};
  color: #000000;
  box-sizing: border-box;
  border: 0;
  outline: 0;
  border-radius: 30px;
`;
export const Line = styled.hr`
  width: 30%;
  border: solid 1px #c8c8c8;
`;

// ----------------------- Timetable --------------------

export const Timetable = styled.div`
  margin: 0 auto;
  width: 90%;
  background-color: ${color.black};
`;

export const TimetableTitle = styled.span`
  display: block;
  padding-top: 24px;
  font-size: 36px;
  font-weight: bold;
  color: ${color.main};
  text-align: center;
  margin-bottom: 46px;
`;

export const periodFrame = styled.div`
  width: 100%;
  height: 66px;
`;

export const period = styled.div`
  width: 40%;
  height: 36px;
  display: flex;
  margin: 10px auto;
  border-radius: 8px;
  background-color: #ffffff;
`;

export const periodCount = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: ${color.main};
  border: solid 1.5px ${color.main};
  background-color:${color.grey};
  margin-left: 3px;
  margin-top: 3px;
  font-weight: bold;
`;

export const periodName = styled.span`
  display: flex;
  padding-left: 32px;
  font-size: 16px;
  align-items: center;
  font-weight: bold;
`;

export const calendarBtn = styled.div`
  display: block;
  background-color: ${color.main};
  color: ${color.black};
  border: 0;
  border-radius: 8px;
  width: 30px;
  height: 30px;
  text-align: center;
  font-size: 24px;
  font-weight: 900;
  &:hover {
    background-color: ${color.darkGrey};
    color: #ffffff;
    transition: 0.3s;
  }
  transition: 0.3s;
`;
