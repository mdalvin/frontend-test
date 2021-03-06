import styled from "styled-components";
// import { Link } from "react-router-dom";

export const ListContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  top: 0;
  background-color: #1f386f;
`;

export const WelcomeWrapper = styled.div`
  height: 150px;
  margin-top: 50px;
  display: grid;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
  margin-bottom: 100px;
  @media screen and (max-width: 375px) {
    width: 375px;
    height: 70px;
  }
`;

export const WelcomeH2 = styled.h2`
  font-size: 36px;
  font-weight: 900;
  letter-spacing: 3px;
  margin-bottom: 0;
  @media screen and (max-width: 375px) {
    font-size: 30px;
  }
`;

export const WelcomeP = styled.p`
  font-size: 22px;
  font-weight: 700;
  margin-top: 0;
  @media screen and (max-width: 375px) {
    font-size: 18px;
  }
`;

export const ListWrapper = styled.div`
  height: 700px;
  padding: 50px 50px;
  margin-top: 0;
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat()
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 375px) {
    width: 375px;
    height: 800px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(30px)
    padding: 10px 10px;
  }
`;

export const TaskTextWrapper = styled.div`
  height: 50px;
  display: flex;
  text-align: left;
  margin-top: 100px;
  margin-bottom: 0;
  margin-left: 50px;
  color: #fff;
  @media screen and (max-width: 375px) {
    margin-top: 0px;
    margin-left: 20px;
    margin-bottom: 0px;
    height: 0px;
  }
`;

export const TaskP = styled.p`
  font-size: 22px;
  font-weight: 700;
  margin-top: 0;
  @media screen and (max-width: 375px) {
    font-size: 18px;
    font-weight: 600;
    margin-top: 0;
  
  }
`;

export const TaskCard = styled.div`
  width: 350px;
  height: 80px;
  // background-color: #fff;
  border-radius: 25px;
  border: none;
  display: flex;
  box-shadow: 5px 7px #fec14a;
  @media screen and (max-width: 375px) {
    width: 300px;
    height: 50px;  
  }
`;

export const TaskInfo = styled.div`
  width: 200px;
  display: grid;
  padding: 0px 10px;
`;

export const TaskTitle = styled.h2`
  font-size: 20px;
  color: #222;
  font-weight: 600;
  margin-bottom: 0;
  margin-left: 10px;
  text-transform: capitalize;
  @media screen and (max-width: 375px) {
    font-size: 18px;
  }
`;

export const TaskDate = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-top: 0;
  margin-left: 10px;
`;

export const TaskAction = styled.div`
  width: 150px;
  padding: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 0;
`;

export const TaskButton = styled.div`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  color: #1f386f;
  background-color: #fec14a;
  margin-right: 15px;
  border-radius: 50%;
  padding-top: 10px;
  border: none;
  cursor: pointer;
  &:hover {
    transition: 0.3s all ease-in-out;
    color: #fec14a;
    background-color: #1f386f;
  }
`;

export const SpinnerWrapper = styled.div`
  height: 50px;
  width: 50px;
  margin-left: 80px;
  align-items: center;
  justify-content: center;
`;