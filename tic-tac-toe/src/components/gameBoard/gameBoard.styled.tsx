import styled from "styled-components";

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  color: #ffffff;
  font-size: 18px;
  margin-bottom: 18px;
`;

export const BoardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 60px);
  gap: 10px;
`;

export const CellButton = styled.button`
  width: 60px;
  height: 60px;
  font-size: 24px;
  background-color: #333;
  color: #fff;
  border: 2px solid #555;
  cursor: pointer;

  &:disabled {
    background-color: #111;
    color: #777;
    cursor: not-allowed;
  }
`;
