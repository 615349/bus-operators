import styled from '@emotion/styled';

export const BackBtn = styled.button`
  border: none;
  background-color: transparent;
  height: 32px;
  cursor: pointer;
  margin-top: 15px;
  padding: 0;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  color: #333;
  :hover {
    color: #0f61a9;
    text-decoration: underline;
  }
`;

export const BackImg = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 5px;
`;

export const Table = styled.table`
  width:100%;
  text-align: left;
  border-radius: 4px 4px 0 0;
  border-collapse: separate;
  border-spacing: 0;
`;

export const Thead = styled.thead`
  .tr {
    color: #fff;
    font-weight: 500;
    text-align: left;
    background-color: #0f61a9;
    border-bottom: 1px solid #e8e8e8;
    .th {
      padding: 16px;
      font-weight: 500;
      text-align: left;
      border-bottom: 1px solid #e8e8e8;
    }
    &:first-of-type {
      > .th:first-of-type {
        border-top-left-radius: 4px;
      }
    }
  }
`;

export const Tbody = styled.tbody`
  .no-data {
    border-bottom: none;
  }
  .on-time {
    color: green;
  }
  .early {
    color: red;
  }
  .late {
    color: blue;
  }
`;

export const Td = styled.td`
  padding: 16px;
  border-bottom: 1px solid #e8e8e8;
  font-weight: 300;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  border: 1px solid #e8e8e8;
  padding: 10px 15px;
  margin-top: 50px;
`;

export const BtnWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 768px) {
    justify-content: flex-end;
  }
`;

export const SaveBtn = styled.button`
  background-color: #0f61a9;
  color: #fff;
  border: 1px solid #0f61a9;
  border-radius: 6px;
  cursor: pointer;
  padding: 10px 18px;
  font-size: 20px;
  line-height: 28px;
`;
