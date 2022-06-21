import styled from "styled-components";
const blue = "#6e92fa";
export const LoginInput = styled.input`
  display: block;
  width: 100%;
  height: 10px;
  margin-bottom: 15px;
  margin-top: 5px;
  padding: 20px 20px;
  border-radius: 8px;
  border: 1px solid ${blue};
  &::placeholder {
    font-size: 16px;
  }
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

export const DisabledLoginButton = styled.button`
  display: block;
  background-color: #c8c8c8;
  color: #ffffff;
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
  background-color: ${blue};
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
    color: ${blue};
    transition: 0.3s;
  }
  transition: 0.3s;
`;

export const BlueTopBar = styled.hr`
  display: block;
  width: 15%;
  height: 5px;
  background-color: ${blue};
  margin: 36px auto;
  border: 0;
`;

export const MainText = styled.a`
  text-align: center;
  display: block;
  color: ${blue};
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
  color: ${blue};
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
  background-color: #ccc;
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
  background-color: #fff;
  border-radius: 4px;
  border: 2px solid #c8c8c8;
  box-shadow: 3px 3px 3px 3px #e1e1e1;
`;
// background-color: rgb(197, 197, 197);
export const Today = styled.div`
  width: 100px;
  height: 100px;
  margin: 10px;
  background-color: #fff;
  border-radius: 4px;
  border: 4px solid ${blue};
  box-shadow: 3px 3px 3px 3px #e1e1e1;
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
  color: ${blue};
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
  color: ${blue};
`;
export const LongButton = styled.button`
  width: 80%;
  height: 32px;
  display: block;
  font-size: 18px;
  background-color: ${blue};
  color: #ffffff;
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
  background-color: #f0f0f0;
`;

export const TimetableTitle = styled.span`
  display: block;
  padding-top: 24px;
  font-size: 36px;
  font-weight: bold;
  color: ${blue};
  text-align: center;
  margin-bottom: 46px;
`;

export const periodFrame = styled.div`
  width: 800px;
  height: 66px;
`;

export const period = styled.div`
  width: 30%;
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
  color: ${blue};
  border: solid 1.5px ${blue};
  background-color: #ffffff;
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

export const restTime = styled.div`
  display: inline;
  width: 105px;
  height: 60px;
  background-color: ${blue};
  color: #ffffff;
  font-size: 16px;
  border-radius: 8px;
  font-weight: bold;
  vertical-align: middle;
  text-align: center;
  float: right;
  margin-left: 220px;
`;

export const calendarBtn = styled.div`
  display: block;
  background-color: ${blue};
  color: #ffffff;
  border: 0;
  border-radius: 8px;
  width: 30px;
  height: 30px;
  text-align: center;
  font-size: 24px;
  font-weight: 900;
  &:hover {
    background-color: #61dafb;
    transition: 0.3s;
  }
  transition: 0.3s;
`;
