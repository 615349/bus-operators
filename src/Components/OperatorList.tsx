import { OperatorType } from "Constants/types";
import { Title, Operators, Operator, OperatorName, OperatorInner, OperatorDate } from './OperatorList.styles';
import { MouseEvent } from 'react';

type OperatorListType = {
  operators: Array<OperatorType>;
  onClickBusOperator(id: number): void;
};

const OperatorList = ({ operators, onClickBusOperator }: OperatorListType) => {
  const handleClickOperator = (event: MouseEvent<HTMLDivElement>, index: number): void => {
    event.stopPropagation();
    onClickBusOperator(index);
  }

  return (
    <>
      <Title>Transport of NSW - Bus operators</Title>
      {operators.length === 0 && <div>No data available</div>}
      {operators.length > 0 && (
        <Operators>
          {operators.map((operator, index) => (
            <Operator
              key={index}
              width={operators.length >= 3 ? '33.3%' : operators.length === 2 ? '50%' : '100%'}
              role="button"
              className="operator"
              onClick={(event) => handleClickOperator(event, index)}
            >
              <OperatorInner>
                <OperatorName className="operator-name">{operator.name}</OperatorName>
                <OperatorDate>{operator.date}</OperatorDate>
              </OperatorInner>
            </Operator>
          ))}
        </Operators>
      )}
    </>
  );
}

export default OperatorList;
