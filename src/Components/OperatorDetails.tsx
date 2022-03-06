import { ChangeEvent, MouseEvent, useState } from 'react';
import { OperatorType } from 'Constants/types';
import {
  BackBtn,
  BackImg,
  Table,
  Thead,
  Tbody,
  Td,
  Textarea,
  BtnWrapper,
  SaveBtn,
} from './OperatorDetails.styles';
import { Title } from 'Constants/styles';
import { TABLE_HEADERS } from 'Constants/tableHeader';
import getStatusFromTime from 'Utils/getStatusFromTime';

type OperatorDetailsType = {
  operator: OperatorType;
  localStorageKey: string;
  onClickBack(): void;
}

const OperatorDetails = ({ operator, localStorageKey, onClickBack }: OperatorDetailsType) => {
  const [note, setNote] = useState<string>(
    () => localStorage.getItem(localStorageKey) ?? ''
  );

  const handleClickBackBtn = (event: MouseEvent<HTMLButtonElement>): void => {
    event.stopPropagation();
    onClickBack();
  };

  const handleChangeNote = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setNote(event.target.value);
  };

  const handleSave = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    window.localStorage.setItem(localStorageKey, note);
    window.alert(`Saved note: ${note}`);
  };

  return (
    <div>
      <BackBtn onClick={handleClickBackBtn}>
        <BackImg
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTIiIGhlaWdodD0iMTkyIj48cGF0aCBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0OyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iOCIgZD0iTTEyNCAxNjRMNTYgOTZsNjgtNjgiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMTkyIDB2MTkySDBWMHoiLz48L3N2Zz4="
          alt="Back button"
        />
        Back
      </BackBtn>
      <Title>{operator.name} - {operator.date}</Title>
      <Table>
        <Thead>
          <tr className='tr'>
            {TABLE_HEADERS.map((header) => (
              <th className='th' key={header.id}>
                <span>{header.name}</span>
              </th>
            ))}
          </tr>
        </Thead>
        <Tbody>
          {operator.routes.length > 0 && operator.routes.map((route) => {
            const { label, className } = getStatusFromTime(route.deviationFromTimetable);

            return (
              <tr key={route.id}>
                <Td>{route.id}</Td>
                <Td>
                  {route.routeVariant === 'UNKNOWN' && 'N.A.'}
                  {route.routeVariant !== 'UNKNOWN' && (
                    <span>
                      <b>{route.routeVariant.slice(0, 3)}</b>{route.routeVariant.slice(3)}
                    </span>
                  )}
                </Td>
                <Td className={className}>{label}</Td>
              </tr>
          )})}
          {
            operator.routes.length === 0 && <tr>
              <td className="no-data">No available data</td>
            </tr>
          }
        </Tbody>
      </Table>
      <form>
        <Textarea value={note} onChange={handleChangeNote} />
        <BtnWrapper>
          <SaveBtn onClick={handleSave}>Save note</SaveBtn>
        </BtnWrapper>
      </form>
    </div>
  )
}

export default OperatorDetails;