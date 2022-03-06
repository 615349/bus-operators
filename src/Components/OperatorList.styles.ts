import styled from '@emotion/styled';

export const Operators = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Operator = styled.div<{ width: string }>`
  flex: 0 0 ${({ width }) => width};
  margin-bottom: 32px;
  height: 120px;
  min-height: 120px;
  padding: 20px;
  cursor: pointer;
`;

export const OperatorInner = styled.div`
  background-color: #fff;
  border-bottom: 4px solid #0f61a9;
  color: #0f61a9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;
  :hover {
    background-color: #0f61a9;
    color: #fff;
    .operator-name {
      border-bottom: 1px solid #fff;
    }
  }
`;

export const OperatorName = styled.h3`
  border-bottom: 1px solid #0f61a9;
  font-size: 32px;
  margin: 0;
`;

export const OperatorDate = styled.small`
  margin-top: 6px;
`;
