import styled from "styled-components";

export const Squre = styled.div`
  text-align: center;
  font-size: 36px;
  width: 20%;
  min-width: 160px;
  height: 15%;
  min-height: 100px;
  padding: 10px;
  margin-left: 100px;
  margin-right: 0;
  margin-top: 100px;
  margin-bottom: 40px;
  background-color: #ccc;
`;
export const Num = styled.span`
  text-align: center;
  margin-top: 10px;
  display: block;
`;
export const Text = styled.span``;

export const Post = styled.ul`
  width: 800px;
  min-width: 300px;
  height: 300px;
  padding: 30px;
  margin-right: 100px;
  margin-left: 50px;
  margin-top: 40px;
  margin-bottom: 40px;
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
// export const PostedPeople = styled.span`
//   font-size: 28px;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   -o-text-overflow: ellipsis;
//   -ms-text-overflow: ellipsis;
// `;
export const HeaderLogo = styled.span`
  display: block;
  color: #6e92fa;
  font-size: 26px;
  text-align: center;
`;
