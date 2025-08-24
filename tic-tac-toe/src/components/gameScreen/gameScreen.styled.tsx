import styled from "styled-components";

export const ScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 20px 0px 20px;
  background-color: black;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HorizontalDivider = styled.hr`
  width: 100%;
  border: 1px solid #454545;
  margin: 0;
  padding: 0;
`;

export const PlayersRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 800px;
`;

export const BoardsRow = styled.div`
  display: flex;
  justify-content: center;
`;

export const PlayerLabel = styled.h3`
  color: #fff;
  font-size: 20px;
`;

export const Score = styled.div`
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 32px;
  line-height: 100%;
  letter-spacing: -0.3px;
  text-align: center;
  vertical-align: middle;
  color: #ffffff;
`;

export const ScoreField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

export const ScoreBtn = styled.button`
  width: 61px;
  height: 36px;
  font-family: "Inter", sans-serif;
  background-color: #00ae1c;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 8px;
`;

export const PlayersLabel = styled.h3`
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: -0.3px;
  text-align: center;
  vertical-align: middle;
  color: #ffffff;
  font-family: "Inter", sans-serif;
`;

export const VerticalDivider = styled.div`
  width: 1px;
  background-color: #454545;
  height: auto;
  margin-inline: 40px;
`;

export const GameBoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
