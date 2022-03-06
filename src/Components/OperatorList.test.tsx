import { Title } from 'Constants/styles';
import { mount } from 'enzyme';
import OperatorList from './OperatorList';
import { Operator } from './OperatorList.styles';
import { act } from 'react-dom/test-utils';

describe('OperatorList', () => {

  const onClickBusOperator = jest.fn();

  afterEach(() => {
    onClickBusOperator.mockRestore();
  });

  const props = {
    operators: [
      {
        name: 'Sydney Buses',
        date: '25/09/2021',
        routes: [
          {
            id: '42612',
            routeVariant: '891 2 1',
            deviationFromTimetable: 77,
          },
          {
            id: '29016',
            routeVariant: '400 1 1',
            deviationFromTimetable: 340,
          },
        ]
      },
      {
        name: 'Westbus',
        date: '25/09/2021',
        routes: [
          {
            id: '29016',
            routeVariant: '400 1 1',
            deviationFromTimetable: 340,
          },
        ]
      }
    ],
    onClickBusOperator,
  }

  it('When operators array is empty, should show no data', () => {
    const newProps = {
      ...props,
      operators: [],
    };
    const component = mount(<OperatorList {...newProps} />);
    expect(component.find(Title).text()).toEqual('Transport of NSW - Bus operators');
    expect(component.text()).toContain('No data available');
  });

  it('When click one operator, callback should be invoked', () => {
    const component = mount(<OperatorList {...props} />);
    act(() => {
      component.find('.operator').at(1).simulate('click');
    });
    component.update();
    expect(onClickBusOperator).toHaveBeenCalled();
  });

  it('when operator array varies, the width props should be updated', () => {
    let newProps = {
      ...props,
      operators: [
        {
          name: 'Sydney bus',
          date: '25/09/2021',
          routes: [],
        }
      ]
    }

    let component = mount(<OperatorList {...newProps} />);
    expect(component.find(Operator).prop('width')).toEqual('100%');

    newProps = {
      ...props,
      operators: [
        {
          name: 'Sydney bus',
          date: '25/09/2021',
          routes: [],
        },
        {
          name: 'South bus',
          date: '25/09/2021',
          routes: [],
        }
      ]
    }

    component = mount(<OperatorList {...newProps} />);
    expect(component.find(Operator).at(0).prop('width')).toEqual('50%');

    newProps = {
      ...props,
      operators: [
        {
          name: 'Sydney bus',
          date: '25/09/2021',
          routes: [],
        },
        {
          name: 'South bus',
          date: '25/09/2021',
          routes: [],
        },
        {
          name: 'West bus',
          date: '25/09/2021',
          routes: [],
        }
      ]
    }

    component = mount(<OperatorList {...newProps} />);
    expect(component.find(Operator).at(0).prop('width')).toEqual('33.3%');
  });
});
